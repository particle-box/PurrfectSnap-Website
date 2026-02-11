export const HowToUse = () => {
    return (
        <section id="guide" className="relative z-10 py-16 md:py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-10 md:mb-12">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-aurora-cyan/90 mb-3">
                        Guide
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
                        How To Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-pink">PurrfectSnap</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Non-rooted devices</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Just install the PurrfectSnap app and follow in-app instructions. No need to do anything else,
                            no need for Shizuku, Lspatch, etc. the app will do everything automatically!
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Rooted devices</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Just install the PurrfectSnap app and follow in-app instructions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
