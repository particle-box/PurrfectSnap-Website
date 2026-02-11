export const Features = () => {
    const features = [
        { title: "Revamped Theming", icon: "🎨" },
        { title: "Dynamic Tabs", icon: "⚡" },
        { title: "Friend Tracker", icon: "🕵️" },
        { title: "Easy Config", icon: "⚙️" },
        { title: "Media Downloader", icon: "📥" },
        { title: "Modern Internals", icon: "🚀" }
    ];
    const pills = ["Haptic Feedback", "Auto-Updater", "Quick Actions", "Restored Icons", "Auto-Reply", "Auto-Snap Sender", "Merge Overlays", "Force Formats", "Profile Pic Downloader", "Session Events", "Device Spoof", "Message Logger", "App Passcode", "E2E Encryption", "Prevent Logout", "Disable Camera"];

    return (
        <section id="features" className="relative py-16 md:py-24 px-4 md:px-6 z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-pink">Purrfect</span>Snap?
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">Refined for aesthetics and control.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
                    {features.map((f, i) => (
                        <div key={i} className="group p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-aurora-cyan/40 hover:bg-white/10 transition-all duration-300 active:scale-98 backdrop-blur-sm min-h-[144px] flex flex-col justify-center">
                            <div className="text-3xl md:text-4xl mb-4 bg-white/5 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-aurora-cyan transition-colors">{f.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="p-6 md:p-12 rounded-[2rem] bg-black/30 border border-white/5 backdrop-blur-md">
                    <h3 className="text-center text-xs md:text-sm font-bold text-aurora-pink uppercase tracking-widest mb-6">Full Feature Roster</h3>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {pills.map((item, i) => (
                            <span key={i} className="px-3 py-1.5 md:px-4 rounded-full bg-white/5 text-[10px] md:text-xs lg:text-sm text-gray-300 border border-white/5 hover:border-aurora-cyan/50 hover:text-white transition-all cursor-default">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
