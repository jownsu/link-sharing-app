"use client";

import Button from "@/app/_components/Button";
import { DevlinkForm } from "@/app/_constants/constants";
import EmptyIcon from "@/public/icons/illustration-empty.svg";
import { useFieldArray, useFormContext } from "react-hook-form";
import DevLinkItem from "./DevLinkItem";

const LinkList = () => {
    const methods = useFormContext<DevlinkForm>();

    const {
        fields: devlinks,
        append,
        remove
    } = useFieldArray({
        control: methods.control,
        name: "devlinks"
    });

    const onSubmit = (data: DevlinkForm) => {
        console.log(data.devlinks)
    };

    const onAddNewLink = () => {
        if (devlinks.length >= 5) return;

        append({
            id: Math.floor(Math.random() * 9999999),
            platform: "github",
            link: ""
        });
    };

    return (
        <form
            className="flex flex-1 flex-col overflow-hidden"
            onSubmit={methods.handleSubmit(onSubmit)}
        >
            <Button
                variant={"outline"}
                size={"full"}
                type="button"
                className="mb-[2.4rem]"
                onClick={onAddNewLink}
                disabled={devlinks.length >= 5}
            >
                + Add new link
            </Button>

            {!!devlinks.length && (
                <ul className="mb-[2.4rem] flex flex-1 flex-col gap-[2.4rem] overflow-y-auto">
                    {devlinks.map((link, index) => (
                        <DevLinkItem
                            key={link.id}
                            link={link}
                            index={index}
                            remove={remove}
                        />
                    ))}
                </ul>
            )}

            {!devlinks.length && (
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

            <Button
                size="full"
                disabled={!devlinks.length}
                className="md:ml-auto md:w-fit"
                type="submit"
            >
                Save
            </Button>
        </form>
    );
};

export default LinkList;
