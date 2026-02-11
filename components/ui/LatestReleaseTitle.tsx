'use client';

import { useEffect, useState } from "react";

type ReleaseResponse = {
    latestReleaseTitle?: string;
};

export function LatestReleaseTitle() {
    const [title, setTitle] = useState("Loading latest release...");

    useEffect(() => {
        let active = true;

        async function loadLatestRelease() {
            try {
                const response = await fetch("/api/github-downloads");
                if (!response.ok) throw new Error("Failed to fetch latest release");
                const data = (await response.json()) as ReleaseResponse;
                if (!active) return;
                setTitle(data.latestReleaseTitle || "Latest Release");
            } catch {
                if (!active) return;
                setTitle("Latest Release");
            }
        }

        loadLatestRelease();
        return () => {
            active = false;
        };
    }, []);

    return <span>{title}</span>;
}
