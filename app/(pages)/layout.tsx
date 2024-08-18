import NavBar from "../_components/NavBar";
import DevlinkFormProvider from "../_providers/devlink_form_provider";
import PhoneIllustration from "@/public/icons/illustration-phone-mockup.svg";
import PreviewList from "../_components/PreviewList";
import PreviewHead from "../_components/PreviewHead";
import "../globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen flex-col bg-light_grey">
            <DevlinkFormProvider>
                <NavBar />
                <div className="container flex min-h-full flex-1 gap-[2.4rem] py-[2.4rem] pt-[13rem]">
                    <div className="fixed hidden h-[87vh] w-[56rem] place-items-center rounded-[1.2rem] bg-white lg:grid">
                        <div className="relative h-[63.1rem] w-[30.7rem]">
                            <PhoneIllustration className="h-full w-full" />
                            <PreviewHead />
                            <PreviewList />
                        </div>
                    </div>
                    <div className="hidden w-[56rem] lg:block"></div>
                    <div className="flex-1 rounded-[1.2rem] bg-white p-[2.4rem]">
                        {children}
                    </div>
                </div>
            </DevlinkFormProvider>
        </main>
    );
}
