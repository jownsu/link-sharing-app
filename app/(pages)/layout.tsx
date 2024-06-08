import NavBar from "../_components/NavBar";
import "../globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen flex-col bg-light_grey">
            <NavBar />
            {children}
        </main>
    );
}
