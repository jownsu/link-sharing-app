import "../globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-white md:bg-light_grey">
            {children}
        </main>
    );
}
