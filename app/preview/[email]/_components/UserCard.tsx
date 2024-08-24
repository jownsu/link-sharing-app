"use client";

import Image from "next/image";
import useLocalStorage from "@/app/_hooks/useLocalStorage";
import PreviewLink from "@/app/_components/PreviewLink";
import { notFound } from "next/navigation";

interface Props {
    email: string;
}

const UserCard = ({ email }: Props) => {
    const { findUserDevlink } = useLocalStorage();

    const devlink = findUserDevlink(email);

    if (!devlink) {
        return notFound();
    }

    return (
        <div className="z-10 mx-auto w-[23.7rem] text-center md:w-[34.9rem] md:rounded-[2.4rem] md:bg-white md:px-[5.6rem] md:py-[4.8rem] md:shadow-drop_grey">
            <div className="mb-[5.6rem]">
                <div className="mx-auto mb-[2.5rem] size-[10.4rem] overflow-hidden rounded-full outline outline-[.4rem] outline-primary">
                    <Image
                        className="h-full w-full object-cover"
                        src={devlink.profile_picture || ""}
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
    );
};

export default UserCard;
