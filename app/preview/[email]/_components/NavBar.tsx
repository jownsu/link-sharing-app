"use client";
import Button from "@/app/_components/Button";
import Link from "next/link";
import toast from "react-hot-toast";
import CopyLinkIcon from "@/public/icons/icon-link-copied-to-clipboard.svg";
import copy from "clipboard-copy";

const NavBar = () => {
    const onShareLinkClick = () => {
        copy(window.location.href);
        toast.custom(
            () => (
                <div
                    className={
                        "flex items-center gap-[.8rem] rounded-[1.2rem] bg-dark_grey px-[2.4rem] py-[1.6rem] font-semibold text-light_grey"
                    }
                >
                    <CopyLinkIcon className="h-[2rem] w-[2rem]" />
                    <p>The link has been copied to your clipboard!</p>
                </div>
            ),
            {
                position: "bottom-center"
            }
        );
    };

    return (
        <nav className="z-[10] mb-[6rem] md:mb-[10.2rem] md:p-[2.4rem] lg:mb-[8.1rem]">
            <div className="flex gap-[1.6rem] rounded-[1.2rem] px-[2.4rem] py-[1.6rem] md:justify-between md:bg-white">
                <Button
                    variant={"outline"}
                    className="flex flex-1 items-center justify-center px-0 md:flex-none md:px-[2.7rem]"
                    asChild
                >
                    <Link href="/links">Back to Editor</Link>
                </Button>
                <Button
                    className="flex-1 px-0 md:flex-none md:px-[2.7rem]"
                    onClick={onShareLinkClick}
                >
                    Share Link
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;
