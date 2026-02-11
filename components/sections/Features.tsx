'use client';

import { useState } from "react";

export const Features = () => {
    const highlights = [
        { title: "Media Downloader", icon: "📥" },
        { title: "Revamped Theming", icon: "🎨" },
        { title: "Spoof Location", icon: "📍" },
        { title: "Friend Tracker", icon: "🕵️" },
        { title: "Spoofing Tools", icon: "⚙️" },
        { title: "Camera Enhancements", icon: "📸" }
    ];

    const allFeatures = [
        "Account Switcher",
        "AddFriendSourceSpoof",
        "AppLock",
        "Auto Delete Sent Messages",
        "Auto Mark As Read",
        "Auto Open Snaps",
        "Auto Read",
        "Auto Reply",
        "Auto Save",
        "Best Friend Pinning",
        "Better Location",
        "Better Transcript",
        "Bypass Message Action Restrictions",
        "BypassScreenshotDetection",
        "BypassVideoLengthRestriction",
        "Call Recorder",
        "CallButtonsOverride",
        "Camera Tweaks",
        "Chat Wallpaper Downloader",
        "ClientBootstrapOverride",
        "COF Override",
        "Configuration Override",
        "Context Menu Fix",
        "Conversation Toolbox",
        "Convert Message Edit",
        "Custom Theming",
        "CustomStreaksExpirationFormat",
        "Debug",
        "Default Volume Controls",
        "Device Spoofer",
        "Disable Confirmation Dialogs",
        "Disable Custom Tabs",
        "Disable GMS Dialogs",
        "Disable Memories Snap Feed",
        "Disable Permission Requests",
        "Disable Snap Mode Restrictions",
        "Disable Telecom Framework",
        "DisableMetrics",
        "DisableReplayInFF",
        "Double Tap Chat Action",
        "Edit Text Override",
        "Friend Notes",
        "Friend Tracker",
        "FriendFeedMessagePreview",
        "FriendMutationObserver",
        "Half Swipe Notifier",
        "Hide Active Music",
        "Hide Typing Indicator",
        "HideFriendFeedEntry",
        "HideStreakRestore",
        "InfiniteStoryBoost",
        "Instant Translation",
        "Media File Picker",
        "Media Upload Quality Override",
        "MediaDownloader",
        "Meo Passcode Bypass",
        "Message Indicators",
        "MessageLogger",
        "MixerStories",
        "NoFriendScoreDelay",
        "Better Notifications",
        "OldBitmojiSelfie",
        "OperaViewerParamsOverride",
        "PinConversations",
        "Prevent Forced Keyboard",
        "Prevent Forced Logout",
        "Prevent message sending",
        "PreventMessageListAutoScroll",
        "ProfilePictureDownloader",
        "Refresh Friend Suggestions",
        "Remove Groups Locked Status",
        "Send Override",
        "Snap Score Changes",
        "SnapchatPlus",
        "SnapPreview",
        "SpotlightCommentsUsername",
        "StealthMode",
        "StealthModeIndicator",
        "UITweaks",
        "UnlimitedSnapViewTime",
        "ValdiHooks",
        "Voice Note Override"
    ];

    const batchSize = 20;
    const [visibleCount, setVisibleCount] = useState(batchSize);
    const visibleFeatures = allFeatures.slice(0, visibleCount);

    return (
        <section id="features" className="relative py-16 md:py-24 px-4 md:px-6 z-10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-pink">Purrfect</span>Snap?
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">Refined for aesthetics and control.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
                    {highlights.map((f, i) => (
                        <div key={i} className="group w-[150px] md:w-[170px] p-4 md:p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-aurora-cyan/40 hover:bg-white/10 transition-all duration-300 active:scale-98 backdrop-blur-sm flex flex-col items-center text-center">
                            <div className="text-3xl md:text-4xl mb-3 bg-white/5 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-aurora-cyan transition-colors leading-tight break-words">{f.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="p-6 md:p-12 rounded-[2rem] bg-black/30 border border-white/5 backdrop-blur-md">
                    <h3 className="text-center text-xs md:text-sm font-bold text-aurora-pink uppercase tracking-widest mb-6">Full Feature List</h3>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {visibleFeatures.map((item, i) => (
                            <span key={`${item}-${i}`} className="px-3 py-1.5 md:px-4 rounded-full bg-white/5 text-[10px] md:text-xs lg:text-sm text-gray-300 border border-white/5 hover:border-aurora-cyan/50 hover:text-white transition-all cursor-default">{item}</span>
                        ))}
                    </div>

                    {visibleCount < allFeatures.length && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setVisibleCount((prev) => Math.min(prev + batchSize, allFeatures.length))}
                                className="inline-flex items-center rounded-full px-4 py-2 text-xs md:text-sm font-semibold border border-white/15 bg-white/5 text-gray-200 hover:text-white hover:border-aurora-cyan/50 hover:bg-white/10 transition-all"
                            >
                                See more...
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
