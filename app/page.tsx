import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { GetSection } from "../components/sections/GetSection";
import { Features } from "../components/sections/Features";
import { FeaturedOn } from "../components/sections/FeaturedOn";
import { Comparison } from "../components/sections/Comparison";
import { FAQ } from "../components/sections/FAQ";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-aurora-dark text-white selection:bg-aurora-cyan selection:text-aurora-dark">
            <Navbar />

            {/* FIXED BACKGROUND FX */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[20%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-aurora-cyan/20 blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow" />
                <div className="absolute -bottom-[10%] -right-[20%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-aurora-pink/15 blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-aurora-purple/10 blur-[60px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* SCROLLABLE SECTIONS */}
            <div className="relative z-10">
                <Hero />
                <GetSection />
                <Features />
                <FeaturedOn />

                {/* NEW SECTIONS ADDED HERE */}
                <Comparison />
                <FAQ />

                <footer className="py-8 md:py-12 border-t border-white/5 bg-black/20 backdrop-blur-xl">
                    <div className="container mx-auto px-6 text-center text-gray-500 text-xs md:text-sm">
                        <p className="mb-2">© 2026 PurrfectSnap.</p>
                        <p className="mb-4 opacity-80">
                            Licensed under GPL 3.0 and Apache 2.0.
                        </p>
                        <p className="opacity-60 max-w-xs mx-auto">
                            Not affiliated with, endorsed by, or sponsored by Snapchat Inc.
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
