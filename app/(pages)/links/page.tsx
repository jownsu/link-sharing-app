import LinkList from "./_components/LinkList";
import PhoneIllustration from "@/public/icons/illustration-phone-mockup.svg";

const LinkPage = () => {
    return (
        <div className="container flex flex-1 gap-[2.4rem] py-[2.4rem] min-h-full">
            <div className="hidden w-[56rem] place-items-center rounded-[1.2rem] bg-white lg:grid">
                <PhoneIllustration className="h-[63.1rem] w-[30.7rem]" />
            </div>
            <div className="flex flex-1 flex-col rounded-[1.2rem] bg-white p-[2.4rem]">
                <h1 className="text-[2.4rem] font-bold leading-[150%] text-dark_grey md:text-[3.2rem]">
                    Customize your links
                </h1>
                <p className="mb-[4.1rem] text-grey">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                </p>
                <LinkList />
            </div>
        </div>
    );
};

export default LinkPage;
