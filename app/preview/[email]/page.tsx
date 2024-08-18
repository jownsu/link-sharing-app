"use client";

import PreviewLink from "@/app/_components/PreviewLink";
import Image from "next/image";
import NavBar from "./_components/NavBar";
import useLocalStorage from "@/app/_hooks/useLocalStorage";

interface Props {
    params: {
        email: string;
    };
}

const PreviewPage = ({ params }: Props) => {
    const { email } = params;
    const { findUserDevlink } = useLocalStorage();

    const devlink = findUserDevlink(email);

    if (!devlink) {
        return <div>404: User not found</div>;
    }

    return (
        <div className="flex min-h-screen flex-col bg-light_grey">
            <div className="absolute top-0 hidden h-[35.7rem] w-full rounded-b-[3.2rem] bg-primary md:block"></div>
            <NavBar />
            <div className="md:shadow-drop_grey z-10 mx-auto w-[23.7rem] text-center md:w-[34.9rem] md:rounded-[2.4rem] md:bg-white md:px-[5.6rem] md:py-[4.8rem]">
                <div className="mb-[5.6rem]">
                    <div className="mx-auto mb-[2.5rem] size-[10.4rem] overflow-hidden rounded-full outline outline-[.4rem] outline-primary">
                        <Image
                            className="h-full w-full object-cover"
                            src={devlink.img || ""}
                            height={96}
                            width={96}
                            alt="Profile picture of the user"
                        />
                    </div>
                    <p className="mb-[.8rem] overflow-hidden text-ellipsis whitespace-nowrap text-[3.2rem] font-bold text-dark_grey">{`${devlink.first_name} ${devlink.last_name}`}</p>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.6rem] text-grey">
                        {devlink.email}
                    </p>
                </div>
                <div className="flex flex-col gap-[2rem]">
                    {devlink.devlinks.map((devlink) => (
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
