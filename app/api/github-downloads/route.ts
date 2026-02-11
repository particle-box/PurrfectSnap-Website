import { NextResponse } from "next/server";

const OWNER = "particle-box";
const REPO = "PurrfectSnap";
const GITHUB_API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/releases`;
const PER_PAGE = 100;
const MAX_PAGES = 20;

export async function GET() {
    try {
        const headers = {
            Accept: "application/vnd.github+json",
            "User-Agent": "PurrfectSnap-Website",
        };
        const releases: Array<{
            name?: string;
            tag_name?: string;
            assets?: Array<{ download_count?: number }>;
        }> = [];

        for (let page = 1; page <= MAX_PAGES; page += 1) {
            const response = await fetch(`${GITHUB_API_BASE}?per_page=${PER_PAGE}&page=${page}`, {
                headers,
                next: { revalidate: 600 },
            });

            if (!response.ok) {
                return NextResponse.json(
                    { error: "Failed to fetch release stats from GitHub." },
                    { status: response.status }
                );
            }

            const currentPage = (await response.json()) as Array<{
                name?: string;
                tag_name?: string;
                assets?: Array<{ download_count?: number }>;
            }>;
            releases.push(...currentPage);

            if (currentPage.length < PER_PAGE) {
                break;
            }
        }

        const totalDownloads = releases.reduce((releaseTotal, release) => {
            const assetTotal =
                release.assets?.reduce((assetSum, asset) => assetSum + (asset.download_count ?? 0), 0) ?? 0;
            return releaseTotal + assetTotal;
        }, 0);
        const latestReleaseTitle = releases[0]?.name || releases[0]?.tag_name || "Latest Release";

        return NextResponse.json(
            {
                totalDownloads,
                releaseCount: releases.length,
                source: `${OWNER}/${REPO}`,
                latestReleaseTitle,
            },
            {
                headers: {
                    "Cache-Control": "public, s-maxage=600, stale-while-revalidate=300",
                },
            }
        );
    } catch {
        return NextResponse.json({ error: "Unable to load download stats right now." }, { status: 500 });
    }
}
