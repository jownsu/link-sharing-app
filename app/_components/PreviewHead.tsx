"use client";

import { DevlinkForm } from "@/app/_constants/constants";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const PreviewHead = () => {
    const { watch } = useFormContext<DevlinkForm>();
    const [email, first_name, last_name, profile_picture] = watch([
        "email",
        "first_name",
        "last_name",
        "profile_picture"
    ]);

    return (
        <div className="absolute left-[50%] top-[6.3rem] flex h-[15.8rem] max-h-[15.8rem] w-full -translate-x-1/2 flex-col gap-[2rem] px-[1.2rem]">
            {profile_picture && profile_picture[0] ? (
                <div className="absolute left-[50%] top-0 size-[9.6rem] translate-x-[-50%] overflow-hidden rounded-full outline outline-[.4rem] outline-primary">
                    <Image
                        className="h-full w-full object-cover"
                        src={URL.createObjectURL(profile_picture[0])}
                        height={96}
                        width={96}
                        alt="Profile picture of the user"
                    />
                </div>
            ) : (
                <div className="absolute left-[50%] top-0 size-[9.6rem] translate-x-[-50%] rounded-full bg-placeholder"></div>
            )}

            {!first_name && !last_name ? (
                <div className="absolute bottom-[2rem] left-[50%] h-[1.6rem] w-[16rem] translate-x-[-50%] rounded-[10.4rem] bg-placeholder"></div>
            ) : (
                <p className="absolute bottom-[1.4rem] left-[50%] max-w-[23.7rem] translate-x-[-50%] overflow-hidden text-ellipsis whitespace-nowrap text-[1.8rem] font-semibold text-dark_grey">{`${first_name} ${last_name}`}</p>
            )}

            {!email ? (
                <div className="absolute bottom-0 left-[50%] h-[.8rem] w-[7.2rem] translate-x-[-50%] rounded-[10.4rem] bg-placeholder"></div>
            ) : (
                <p className="absolute bottom-[-1.4rem] left-[50%] max-w-[23.7rem] translate-x-[-50%] overflow-hidden text-ellipsis whitespace-nowrap text-[1.4rem] text-grey">
                    {email}
                </p>
            )}
        </div>
    );
};

export default PreviewHead;
