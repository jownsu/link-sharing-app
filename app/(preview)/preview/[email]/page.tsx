import Button from "@/app/_components/Button";
import PreviewLink from "@/app/_components/PreviewLink";
import { DevlinkForm } from "@/app/_constants/constants";
import Image from "next/image";

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
        <div>
            <div className="absolute top-0 z-[-10] hidden h-[35.7rem] w-full rounded-b-[3.2rem] bg-primary md:block"></div>
            <div className="mb-[6rem] md:mb-[10.2rem] md:p-[2.4rem] lg:mb-[8.1rem]">
                <div className="flex gap-[1.6rem] rounded-[1.2rem] px-[2.4rem] py-[1.6rem] md:justify-between md:bg-white">
                    <Button
                        variant={"outline"}
                        className="flex-1 px-0 md:flex-none md:px-[2.7rem]"
                    >
                        Back to Editor
                    </Button>
                    <Button className="flex-1 px-0 md:flex-none md:px-[2.7rem]">
                        Share Link
                    </Button>
                </div>
            </div>

            <div className="md:shadow-drop_grey mx-auto max-w-[23.7rem] bg-white text-center md:max-w-[34.9rem] md:rounded-[2.4rem] md:px-[5.6rem] md:py-[4.8rem]">
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
        </div>
    );
};

export default PreviewPage;
