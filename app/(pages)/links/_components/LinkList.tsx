"use client";

import Button from "@/app/_components/Button";
import { DevLink } from "@/app/_constants/constants";
import EmptyIcon from "@/public/icons/illustration-empty.svg";
import { useState } from "react";
import DevLinkItem from "./DevLinkItem";

const LinkList = () => {
    const [dev_links, setDevLinks] = useState<DevLink[]>([]);

    return (
        <div className="flex flex-1 flex-col">
            <Button
                variant={"outline"}
                size={"full"}
                type="submit"
                className="mb-[2.4rem]"
                onClick={() =>
                    setDevLinks((prev_state) => [
                        ...prev_state,
                        { id: Math.floor(Math.random() * 9999999), link: "", platform: "github" }
                    ])
                }
            >
                + Add new link
            </Button>
            {!!dev_links.length && (
                <ul className="flex-1 flex flex-col gap-[2.4rem] mb-[2.4rem]"> 
                    {dev_links.map((link, index) => (
                        <DevLinkItem key={link.id} link={link} index={index} />
                    ))}
                </ul>
            )}

            {!dev_links.length && (
                <div className="mb-[2.4rem] flex flex-1 flex-col justify-center rounded-[1.2rem] bg-light_grey px-[2rem] py-[4.6rem] text-center">
                    <EmptyIcon className="mx-auto mb-[2.4rem] h-[8rem] w-[12.477rem]" />
                    <h2 className="mb-[2.2rem] text-[2.4rem] font-bold text-dark_grey md:text-[3.2rem]">
                        Let&apos;s get you started
                    </h2>
                    <p className="mx-auto text-dark_grey md:max-w-[49rem]">
                        Use the &quot;Add new link&quot; button to get started.
                        Once you have more than one link, you can reorder and
                        edit them. We&apos;re here to help you share your
                        profiles with everyone!
                    </p>
                </div>
            )}

            <div className="mb-[2.4rem] h-[.1rem] w-[calc(100%_+_4.8rem)] translate-x-[-2.4rem] bg-borders"></div>
            <Button size="full" disabled className="md:ml-auto md:w-fit">
                Save
            </Button>
        </div>
    );
};

export default LinkList;
