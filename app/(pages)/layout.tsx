import NavBar from "../_components/NavBar";
import "../globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-light_grey min-h-screen">
            <NavBar />
            {children}
        </main>
    );
}
