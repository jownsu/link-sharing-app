import NavBar from "../_components/NavBar";
import DevlinkFormProvider from "../_providers/devlink_form_provider";
import PhoneIllustration from "@/public/icons/illustration-phone-mockup.svg";
import PreviewList from "./links/_components/PreviewList";
import "../globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col min-h-screen bg-light_grey">
            <NavBar />
            <DevlinkFormProvider>
                <div className="container flex min-h-full flex-1 gap-[2.4rem] py-[2.4rem] pt-[13rem]">
                    <div className="hidden w-[56rem] place-items-center rounded-[1.2rem] bg-white lg:grid fixed h-[87vh]">
                        <div className="relative h-[63.1rem] w-[30.7rem]">
                            <PhoneIllustration className="h-full w-full" />
                            <PreviewList />
                        </div>
                    </div>
                    <div className="hidden lg:block w-[56rem]"></div>
                    <div className="flex-1 rounded-[1.2rem] bg-white p-[2.4rem]">
                        {children}
                    </div>
                </div>
            </DevlinkFormProvider>
        </main>
    );
}
