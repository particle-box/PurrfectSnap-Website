import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const getOptions = [
    {
        name: "GitHub",
        href: "https://github.com/particle-box/PurrfectSnap/releases",
        logoType: "github" as const,
        button: "Get on GitHub",
    },
    {
        name: "Xposed Repo",
        href: "https://github.com/Xposed-Modules-Repo/me.eternal.purrfectsnap",
        logoType: "image" as const,
        logo: "/assets/get/xposed-repo.jpeg",
        button: "Get on Xposed Repo",
    },
    {
        name: "Orion Store",
        href: "https://github.com/RookieEnough/Orion-Store",
        logoType: "image" as const,
        logo: "/assets/get/orion-store.png",
        button: "Get on Orion Store",
    },
    {
        name: "GitHub Store",
        href: "https://github.com/rainxchzed/Github-Store",
        logoType: "image" as const,
        logo: "/assets/get/github-store.png",
        button: "Get on GitHub Store",
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 place-items-center">
                    {getOptions.map((item) => (
                        <div key={item.name} className="w-[150px] md:w-[170px] text-center">
                            <a href={item.href} target="_blank" rel="noreferrer" className="group block">
                                <div className="mx-auto w-[96px] h-[96px] md:w-[112px] md:h-[112px] rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-aurora-cyan/50 group-hover:bg-white/10">
                                    {item.logoType === "github" ? (
                                        <Github className="w-14 h-14 text-white" />
                                    ) : (
                                        <Image src={item.logo} alt={`${item.name} logo`} width={112} height={112} className="w-full h-full object-cover" />
                                    )}
                                </div>
                            </a>

                            <a href={item.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs md:text-sm font-semibold text-gray-300 hover:text-aurora-cyan transition-colors">
                                {item.button}
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

