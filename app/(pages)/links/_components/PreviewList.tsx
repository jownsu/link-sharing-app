"use client";

import PreviewLink from "@/app/_components/PreviewLink";
import { DevlinkForm } from "@/app/_constants/constants";
import { useFormContext } from "react-hook-form";

const PreviewList = () => {
    const { watch } = useFormContext<DevlinkForm>();
    const devlinks = watch("devlinks");

    return (
        <div className="absolute bottom-[5.3rem] left-[50%] flex h-[30rem] max-h-[30rem] w-[23.7rem] -translate-x-1/2 flex-col gap-[2rem] overflow-auto">
            {!!devlinks.length &&
                devlinks.map((devlink) => (
                    <PreviewLink
                        key={devlink.id}
                        href={devlink.link}
                        platform={devlink.platform}
                    />
                ))}
            {!devlinks.length &&
                Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-[4.4rem] w-full rounded-[.8rem] bg-[#eee]"
                    ></div>
                ))}
        </div>
    );
};

export default PreviewList;
