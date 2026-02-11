import Image from 'next/image';
import { Github, Send } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-4 md:gap-6 px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-lg">
                <span className="flex items-center gap-2">
                    <Image
                        src="/assets/purrfectsnap-logo.jpg"
                        alt="PurrfectSnap logo"
                        width={24}
                        height={24}
                        className="rounded-full overflow-hidden object-cover"
                    />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-white">PurrfectSnap</span>
                </span>
                <div className="h-4 w-px bg-white/20"></div>
                <a href="https://github.com/particle-box/PurrfectSnap" target="_blank" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                </a>
                <a href="/self-build" className="flex items-center gap-2 text-sm text-gray-300 hover:text-aurora-cyan transition-colors">
                    <span className="hidden sm:inline">Self Build</span>
                    <span className="sm:hidden">Build</span>
                </a>
                <a href="https://t.me/purrfectsnap_official" target="_blank" className="flex items-center gap-2 text-sm text-gray-300 hover:text-aurora-cyan transition-colors">
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">Telegram</span>
                </a>
            </div>
        </nav>
    );
};
