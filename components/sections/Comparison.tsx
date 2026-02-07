import { Check, X } from 'lucide-react';

export const Comparison = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-4xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Stock vs <span className="text-aurora-cyan">Purrfect</span>
                    </h2>
                    <p className="text-gray-400">See what you&apos;ve been missing.</p>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    {/* Header */}
                    <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-black/20 font-bold text-sm md:text-lg">
                        <div className="text-gray-500 flex items-center">Feature</div>
                        <div className="text-center text-gray-400">Standard</div>
                        <div className="text-center text-aurora-cyan drop-shadow-[0_0_10px_rgba(0,242,234,0.5)]">PurrfectSnap</div>
                    </div>

                    {/* Rows */}
                    {[
                        { name: "Save Snaps Secretly", stock: false, mod: true },
                        { name: "AMOLED Dark Mode", stock: false, mod: true },
                        { name: "View Stories Anonymously", stock: false, mod: true },
                        { name: "Disable 'Typing...' Indicator", stock: false, mod: true },
                        { name: "Unlimited Snap Viewing", stock: false, mod: true },
                        { name: "Ad-Free Experience", stock: false, mod: true },
                    ].map((item, i) => (
                        <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors">
                            <div className="text-gray-300 font-medium text-xs md:text-base flex items-center">{item.name}</div>
                            <div className="flex justify-center items-center">
                                {item.stock ? <Check className="text-green-500" /> : <X className="text-red-500/50" />}
                            </div>
                            <div className="flex justify-center items-center">
                                {item.mod ? (
                                    <div className="w-8 h-8 rounded-full bg-aurora-cyan/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,234,0.2)]">
                                        <Check className="text-aurora-cyan w-5 h-5" />
                                    </div>
                                ) : <X className="text-red-500" />}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
