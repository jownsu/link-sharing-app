import NavBar from "../_components/NavBar";
import DevlinkFormProvider from "../_providers/devlink_form_provider";
import "../globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex max-h-screen min-h-screen flex-col bg-light_grey">
            <NavBar />
            <DevlinkFormProvider>{children}</DevlinkFormProvider>
        </main>
    );
}
