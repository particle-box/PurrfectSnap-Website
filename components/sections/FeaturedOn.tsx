import Image from "next/image";
import { ExternalLink } from "lucide-react";

const featuredMentions = [
    {
        name: "FMHY",
        href: "https://fmhy.net/mobile#social-media-apps",
        logo: "/assets/featured/fmhy.ico",
    },
    {
        name: "SeedOSS",
        href: "https://t.me/SeedOSS/434",
        logo: "/assets/featured/seedoss.jpg",
    },
    {
        name: "ZGTechs",
        href: "https://t.me/ZGTechs/796",
        logo: "/assets/featured/zgtechs.jpg",
    },
    {
        name: "FOSSDroid",
        href: "https://t.me/FossDroidAndroid/664",
        logo: "/assets/featured/fossdroid.jpg",
    },
    {
        name: "Fork Repository",
        href: "https://t.me/Fork_Repository/30",
        logo: "/assets/featured/fork-repository.jpg",
    },
    {
        name: "GitDroid",
        href: "https://t.me/gitdroid/1786",
        logo: "/assets/featured/gitdroid.jpg",
    },
    {
        name: "Tech Karan",
        href: "https://youtu.be/QG_v2_HQoJI?si=KnhVVQhwoFqvoUnC",
        logo: "/assets/featured/tech-karan.svg",
    },
];

export const FeaturedOn = () => {
    return (
        <section id="featured" className="relative z-10 py-20 md:py-24 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-aurora-cyan/90 mb-3">
                        Trusted By Communities
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-pink">Across Android</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                        Shoutouts, reviews, and listings from channels that spotlight quality Android projects.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {featuredMentions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-aurora-cyan/40 transition-all duration-300 backdrop-blur-sm p-4 md:p-5 overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-aurora-cyan/10 via-transparent to-aurora-pink/10" />
                            <div className="relative flex flex-col items-center text-center gap-3 md:gap-4">
                                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-white/15 bg-black/20">
                                    <Image src={item.logo} alt={`${item.name} logo`} fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">{item.name}</h3>
                                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] md:text-xs text-gray-400 group-hover:text-aurora-cyan transition-colors">
                                        View mention <ExternalLink className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
