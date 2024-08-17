"use client";

import PreviewIcon from "@/public/icons/icon-preview-header.svg";
import LogoutLogo from "@/public/icons/logout.svg";
import Button from "./Button";
import DevlinkLogo from "./DevlinkLogo";
import NavLink from "./NavLink";
import useLocalStorage from "../_hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { DevlinkForm } from "../_constants/constants";

const NavBar = () => {
    const {
        watch,
        formState: { isValid }
    } = useFormContext<DevlinkForm>();

    const devlinks = watch("devlinks");
    const { logoutUser } = useLocalStorage();
    const router = useRouter();

    return (
        <nav className="container fixed left-[50%] top-0 translate-x-[-50%] bg-white md:bg-light_grey md:pt-[2.4rem]">
            <div className="flex items-center rounded-[1.2rem] bg-white px-[2.4rem] py-[1.6rem]">
                <DevlinkLogo className="mr-auto flex-shrink-0" size="sm" />
                <NavLink path="links" />
                <NavLink path="profile" />
                <Button
                    type="submit"
                    variant={"outline"}
                    className="ml-auto h-[4.2rem] px-[1.6rem] md:px-[2.7rem] lg:h-[4.6rem]"
                    disabled={!isValid || devlinks.length <= 0}
                >
                    <PreviewIcon className="h-[2rem] w-[2rem] md:hidden" />
                    <span className="hidden font-semibold text-primary md:block">
                        Preview
                    </span>
                </Button>
                <button
                    type="button"
                    className="group ml-[1rem] rounded-full p-[1rem] duration-200 hover:bg-red"
                    onClick={() => {
                        logoutUser();
                        router.push("/login");
                    }}
                >
                    <LogoutLogo className="size-[1.6rem] fill-red duration-200 group-hover:fill-white md:size-[2rem]" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
