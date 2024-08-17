import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AuthProvider from "./_providers/AuthProvider";
import "./globals.css";

const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Link Sharing App",
    description:
        "Link sharing app that can customize and share your profile links"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon-32x32.png" sizes="any" />
            <body className={instrument_sans.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
