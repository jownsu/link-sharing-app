"use client";

import { DevlinkForm } from "@/app/_constants/constants";
import ImageIcon from "@/public/icons/icon-upload-image.svg";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import Image from "next/image";

const ProfilePictureForm = () => {
    const { register, watch } = useFormContext<DevlinkForm>();

    const profile_picture = watch("profile_picture");

    return (
        <div className="mb-[2.4rem] flex flex-col rounded-[1.2rem] bg-light_grey p-[2rem] md:flex-row md:items-center md:gap-[1.2rem] lg:flex-col lg:items-start lg:gap-[0] xl:flex-row xl:items-center xl:gap-[1.2rem]">
            <p className="mb-[1.6rem] text-grey md:shrink-0 md:basis-[24rem] lg:basis-0 xl:basis-[24rem]">
                Profile picture
            </p>
            <label
                htmlFor="profile_picture"
                className={
                    "relative mb-[2.4rem] flex size-[19.3rem] shrink-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[1.2rem] bg-primary_lighter md:mr-[1.1rem]"
                }
            >
                {profile_picture && profile_picture[0] && (
                    <>
                        <Image
                            className="relative object-cover"
                            src={URL.createObjectURL(profile_picture[0])}
                            fill
                            alt="Profile picture of the user"
                        />
                        <div className="absolute left-0 top-0 z-20 block h-full w-full bg-black opacity-50 content-['']"></div>
                    </>
                )}

                <ImageIcon
                    className={clsx("relative z-30 size-[4rem] fill-primary", {
                        ["fill-white"]: profile_picture && profile_picture[0]
                    })}
                />
                <span
                    className={clsx(
                        "relative z-30 text-[1.6rem] font-semibold text-primary",
                        {
                            ["text-white"]:
                                profile_picture && profile_picture[0]
                        }
                    )}
                >
                    {profile_picture ? "+ Change Image" : "+ Upload Image"}
                </span>
            </label>
            <input
                {...register("profile_picture")}
                id="profile_picture"
                className="hidden"
                type="file"
                accept="image/png, image/jpeg"
            />
            <p className="text-[1.2rem] text-grey md:max-w-[13rem] lg:w-auto xl:max-w-[13rem]">
                Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
        </div>
    );
};

export default ProfilePictureForm;
