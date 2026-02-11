import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const getOptions = [
    {
        name: "GitHub",
        href: "https://github.com/particle-box/PurrfectSnap/releases",
        logoType: "github" as const,
        button: "Get on GitHub",
        note: "Official releases",
    },
    {
        name: "Xposed Repo",
        href: "https://github.com/Xposed-Modules-Repo/me.eternal.purrfectsnap",
        logoType: "image" as const,
        logo: "/assets/get/xposed-repo.jpeg",
        button: "Get on Xposed Repo",
        note: "Module listing",
    },
    {
        name: "Orion Store",
        href: "https://github.com/RookieEnough/Orion-Store",
        logoType: "image" as const,
        logo: "/assets/get/orion-store.png",
        button: "Get on Orion Store",
        note: "Community app store",
    },
    {
        name: "GitHub Store",
        href: "https://github.com/rainxchzed/Github-Store",
        logoType: "image" as const,
        logo: "/assets/get/github-store.png",
        button: "Get on GitHub Store",
        note: "Alternative discovery",
    },
];

export const GetSection = () => {
    return (
        <section id="get" className="relative z-10 py-16 md:py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-10 md:mb-12 text-center">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-aurora-pink/90 mb-3">
                        Install Paths
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
                        Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-pink">PurrfectSnap</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                        Pick your preferred source and install the way you like.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {getOptions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-aurora-cyan/40 transition-all duration-300 backdrop-blur-md p-5 md:p-6"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-aurora-cyan/10 via-transparent to-aurora-pink/10" />

                            <div className="relative flex items-start justify-between gap-4 mb-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black/20 border border-white/15 overflow-hidden flex items-center justify-center">
                                    {item.logoType === "github" ? (
                                        <Github className="w-10 h-10 text-white" />
                                    ) : (
                                        <Image src={item.logo} alt={`${item.name} logo`} width={80} height={80} className="w-full h-full object-cover" />
                                    )}
                                </div>

                                <div className="text-right">
                                    <p className="text-xs md:text-sm text-gray-400">{item.note}</p>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{item.name}</h3>
                                </div>
                            </div>

                            <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold bg-aurora-pink/15 border border-aurora-pink/40 text-white group-hover:bg-aurora-pink/25 group-hover:border-aurora-pink/60 transition-all">
                                <span>{item.button}</span>
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

