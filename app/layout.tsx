import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
    title: "PurrfectSnap | Redefine Snapchat",
    description: "A fork of Snapenhance made to meow your Snapchat experience.",
    icons: {
        icon: "/icon.png",
        shortcut: "/icon.png",
        apple: "/icon.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={outfit.className}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
