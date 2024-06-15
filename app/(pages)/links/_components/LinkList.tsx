"use client";

import Button from "@/app/_components/Button";
import useDevLinkStore from "@/app/_store/devlink.store";
import EmptyIcon from "@/public/icons/illustration-empty.svg";
import DevLinkItem from "./DevLinkItem";

const LinkList = () => {
    const devlinks = useDevLinkStore((state) => state.devlinks);
    const addDevLink = useDevLinkStore((state) => state.addDevLink);

    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <Button
                variant={"outline"}
                size={"full"}
                type="submit"
                className="mb-[2.4rem]"
                onClick={addDevLink}
            >
                + Add new link
            </Button>
            {!!devlinks.length && (
                <ul className="mb-[2.4rem] flex flex-1 flex-col gap-[2.4rem] overflow-y-auto">
                    {devlinks.map((link, index) => (
                        <DevLinkItem key={link.id} link={link} index={index} />
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
            <Button size="full" disabled className="md:ml-auto md:w-fit">
                Save
            </Button>
        </div>
    );
};

export default LinkList;
