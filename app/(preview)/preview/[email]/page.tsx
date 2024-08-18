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
            <div className="mb-[6rem] flex gap-[1.6rem] px-[2.4rem] py-[1.6rem]">
                <Button variant={"outline"} className="flex-1 px-0">
                    Back to Editor
                </Button>
                <Button className="flex-1 px-0">Share Link</Button>
            </div>
            <div className="mx-auto max-w-[23.7rem] text-center">
                <div className="mb-[5.6rem]">
                    <div className="mx-auto mb-[2.5rem] size-[9.6rem] overflow-hidden rounded-full outline outline-[.4rem] outline-primary">
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
