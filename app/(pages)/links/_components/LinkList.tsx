"use client";

import { useState } from "react";
import EmptyIcon from "@/public/icons/illustration-empty.svg";
import Button from "@/app/_components/Button";

const LinkList = () => {
    const [links, setLinks] = useState([]);

    return (
        <div className="flex flex-col">
            <Button
                variant={"outline"}
                size={"full"}
                type="submit"
                className="mb-[2.4rem]"
            >
                + Add new link
            </Button>
            {!!links.length && <p>Render List</p>}

            {!links.length && (
                <div className="mb-[2.4rem] rounded-[1.2rem] bg-white px-[2rem] py-[4.6rem] text-center">
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
            <Button size="full" disabled className="w-fit ml-auto">
                Save
            </Button>
        </div>
    );
};

export default LinkList;
