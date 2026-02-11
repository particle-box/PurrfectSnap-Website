'use client';

import { useEffect, useMemo, useState } from "react";
import { Download, Activity } from "lucide-react";

type StatsResponse = {
    totalDownloads: number;
    source: string;
};

function formatCompact(value: number) {
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value);
}

export function DownloadStats() {
    const [target, setTarget] = useState<number | null>(null);
    const [animatedValue, setAnimatedValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let active = true;

        async function loadStats() {
            try {
                const response = await fetch("/api/github-downloads");
                if (!response.ok) throw new Error("Failed to fetch stats");
                const data = (await response.json()) as StatsResponse;
                if (!active) return;
                setTarget(data.totalDownloads);
            } catch {
                if (!active) return;
                setTarget(null);
            } finally {
                if (active) setIsLoading(false);
            }
        }

        loadStats();
        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        if (target === null) return;

        let rafId = 0;
        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimatedValue(Math.round(target * eased));
            if (progress < 1) {
                rafId = requestAnimationFrame(tick);
            }
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [target]);

    const valueText = useMemo(() => {
        if (isLoading) return "Loading...";
        if (target === null) return "Unavailable";
        return `${formatCompact(animatedValue)}+`;
    }, [animatedValue, isLoading, target]);

    return (
        <a
            href="https://github.com/particle-box/PurrfectSnap/releases"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-aurora-cyan/40 px-4 py-3 backdrop-blur-md transition-all duration-300"
        >
            <div className="w-9 h-9 rounded-xl bg-aurora-cyan/15 border border-aurora-cyan/30 text-aurora-cyan flex items-center justify-center">
                <Download className="w-4 h-4" />
            </div>

            <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Total Downloads</p>
                <p className="text-base md:text-lg font-extrabold text-white leading-tight">{valueText}</p>
            </div>

            <Activity className="w-4 h-4 text-aurora-pink/80 group-hover:text-aurora-pink transition-colors" />
        </a>
    );
}
