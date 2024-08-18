import PreviewLink from "@/app/_components/PreviewLink";
import { DevlinkForm } from "@/app/_constants/constants";
import Image from "next/image";
import NavBar from "./_components/NavBar";

interface Props {
    params: {
        email: string;
    };
}

const data = {
    first_name: "Jhones",
    last_name: "Digno",
    email: "jhonesdigno666@gmail.com",
    devlinks: [
        { id: 8256104, platform: "github", link: "https://github.com/jownsu" },
        { id: 8256106, platform: "youtube", link: "https://github.com/jownsu" },
        {
            id: 8256108,
            platform: "linked_in",
            link: "https://github.com/jownsu"
        }
    ],
    img: "/jhones.jpg"
} as DevlinkForm;

const PreviewPage = ({ params }: Props) => {
    const { email } = params;

    return (
        <main className="flex min-h-screen flex-col bg-light_grey">
            <div className="absolute top-0 hidden h-[35.7rem] w-full rounded-b-[3.2rem] bg-primary md:block"></div>
            <NavBar />
            <div className="md:shadow-drop_grey z-10 mx-auto w-[23.7rem] text-center md:w-[34.9rem] md:rounded-[2.4rem] md:bg-white md:px-[5.6rem] md:py-[4.8rem]">
                <div className="mb-[5.6rem]">
                    <div className="mx-auto mb-[2.5rem] size-[10.4rem] overflow-hidden rounded-full outline outline-[.4rem] outline-primary">
                        <Image
                            className="h-full w-full object-cover"
                            src={data.img!}
                            height={96}
                            width={96}
                            alt="Profile picture of the user"
                        />
                    </div>
                    <p className="mb-[.8rem] overflow-hidden text-ellipsis whitespace-nowrap text-[3.2rem] font-bold text-dark_grey">{`${data.first_name} ${data.last_name}`}</p>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.6rem] text-grey">
                        {data.email}
                    </p>
                </div>
                <div className="flex flex-col gap-[2rem]">
                    {data.devlinks.map((devlink) => (
                        <PreviewLink
                            key={devlink.id}
                            href={devlink.link}
                            platform={devlink.platform}
                            className="h-[5.6rem]"
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PreviewPage;
