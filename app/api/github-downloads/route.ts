import { NextResponse } from "next/server";

const OWNER = "particle-box";
const REPO = "PurrfectSnap";
const GITHUB_API = `https://api.github.com/repos/${OWNER}/${REPO}/releases?per_page=100`;

export async function GET() {
    try {
        const response = await fetch(GITHUB_API, {
            headers: {
                Accept: "application/vnd.github+json",
                "User-Agent": "PurrfectSnap-Website",
            },
            next: { revalidate: 600 },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch release stats from GitHub." },
                { status: response.status }
            );
        }

        const releases = (await response.json()) as Array<{
            assets?: Array<{ download_count?: number }>;
        }>;

        const totalDownloads = releases.reduce((releaseTotal, release) => {
            const assetTotal =
                release.assets?.reduce((assetSum, asset) => assetSum + (asset.download_count ?? 0), 0) ?? 0;
            return releaseTotal + assetTotal;
        }, 0);

        return NextResponse.json(
            {
                totalDownloads,
                releaseCount: releases.length,
                source: `${OWNER}/${REPO}`,
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
