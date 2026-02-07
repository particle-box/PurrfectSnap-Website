import Image from "next/image";
import { DownloadButton } from "../ui/DownloadButton";
import { Github } from "lucide-react";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-20">
                <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg mx-auto md:mx-0 animate-float">
                        <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse"></span>
                        <span className="text-[10px] md:text-xs font-semibold text-gray-300 tracking-wider uppercase">Latest Release</span>
                    </div>
                    <div className="relative z-20 mb-4 md:mb-6">
                        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]">
                            <span className="block drop-shadow-[0_0_15px_rgba(0,242,234,0.3)]">Purrfect</span>
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#ff0055] to-[#00f2ea] bg-[length:200%_auto] animate-text-flow drop-shadow-[0_0_15px_rgba(255,0,85,0.4)] pb-3 pr-2">
                                Snap
                                <span className="absolute -top-2 -right-4 md:-top-3 md:-right-6 w-2 h-2 md:w-3 md:h-3 rounded-full bg-white animate-pulse shadow-[0_0_10px_#fff]"></span>
                            </span>
                        </h1>
                    </div>
                    <p className="text-base md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0 px-2 md:px-0">
                        A fork of Snapenhance made to <span className="text-aurora-pink italic font-semibold">meow</span> your experience. AMOLED aesthetics and powerful modern features.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start pt-2 items-center w-full md:w-auto">
                        <DownloadButton />
                        <a href="https://github.com/particle-box/PurrfectSnap" target="_blank" className="w-full sm:w-auto group px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95">
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <span>Source Code</span>
                        </a>
                    </div>
                    <a
                        href="https://github.com/particle-box/PurrfectSnap/releases"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center md:justify-start"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://img.shields.io/github/downloads/particle-box/PurrfectSnap/total?style=for-the-badge&color=f5bde6&labelColor=1e1e2e"
                            alt="Total downloads"
                            className="h-7 w-auto"
                        />
                    </a>
                    <div className="pt-2 flex items-center justify-center md:justify-start gap-4 text-xs md:text-sm text-gray-500">
                        <a href="https://t.me/purrfectsnap_chat" target="_blank" className="hover:text-aurora-cyan transition-colors underline decoration-dotted p-2">Join Telegram</a>
                        <span>•</span>
                        <span>v1.0.0 Stable</span>
                    </div>
                </div>
                <div className="flex-1 relative w-[280px] sm:w-[400px] md:w-full md:max-w-[600px] perspective-1000 z-10">
                    <div className="relative animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-cyan to-aurora-pink blur-[50px] md:blur-[80px] opacity-50 rounded-full transform scale-90" />
                        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm p-2 md:p-3 shadow-2xl ring-1 ring-white/10">
                            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-black aspect-square">
                                <Image src="/assets/purrfectsnap-logo.jpg" alt="PurrfectSnap logo" fill className="object-cover" priority sizes="(max-width: 768px) 80vw, 50vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
