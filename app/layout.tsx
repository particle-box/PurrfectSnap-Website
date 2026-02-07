import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
    title: "PurrfectSnap | The Aurora Experience",
    description: "A fork of Snapenhance made to meow your Snapchat experience.",
    icons: {
        icon: "/icon.jpg",
        shortcut: "/icon.jpg",
        apple: "/icon.jpg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={outfit.className}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
