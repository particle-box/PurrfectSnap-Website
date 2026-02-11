'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
    {
        q: "Can this bypass Media Upload Tag?",
        a: "Yes, just download PurrfectSnap and then open it, go to the Features tab and search Gall, it will show Gallery Media Send Override, click on it and then set it to Always Ask.\n\nNow force stop and reopen Snapchat and send a picture through gallery and select your friend and hit send and a dialog will appear, click on Make Snape Saveable in Chat and hit send!"
    },
    { q: "Is PurrfectSnap free?", a: "Yes, it's FLOSS (Free Libre Open Source Software)." },
    { q: "Will I get banned?", a: "We use advanced anti-detection features, but using any mod carries a small risk. Use at your own discretion." },
    { q: "Does it work on iOS?", a: "Currently, PurrfectSnap is Android only (Root & Non-Root supported)." },
    { q: "How do I update?", a: "The app includes an auto-updater that will notify you when a new version is ready." },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 relative z-10 bg-black/20">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
                    Frequent <span className="text-aurora-pink">Questions</span>
                </h2>

                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                            >
                                {item.q}
                                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-aurora-pink' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 whitespace-pre-line">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
