"use client";

import LinkIcon from "@/public/icons/icon-links-header.svg";
import ProfileIcon from "@/public/icons/icon-profile-details-header.svg";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: Path;
}

type Path = "links" | "profile";

const NavLinkObj = {
    links: {
        label: "Link",
        Icon: (
            <LinkIcon className="h-[2rem] w-[2rem] fill-grey group-hover:fill-primary" />
        ),
        pathname: "/links"
    },
    profile: {
        label: "Profile Details",
        Icon: (
            <ProfileIcon className="h-[2rem] w-[2rem] fill-grey group-hover:fill-primary" />
        ),
        pathname: "/profile"
    }
};

const NavLink = ({ path }: Props) => {
    const active_pathname = usePathname();
    return (
        <Link
            href={NavLinkObj[path].pathname}
            className={clsx(
                "flex h-[4.2rem] items-center justify-center gap-[.8rem] rounded-[.8rem] px-[2.7rem] md:h-[4.6rem]",
                {
                    ["bg-primary_lighter *:fill-primary"]:
                        active_pathname === NavLinkObj[path].pathname
                }
            )}
        >
            {NavLinkObj[path].Icon}
            <span
                className={clsx(
                    "hidden font-semibold text-grey group-hover:text-primary md:block",
                    {
                        ["text-primary"]:
                            active_pathname === NavLinkObj[path].pathname
                    }
                )}
            >
                {NavLinkObj[path].label}
            </span>
        </Link>
    );
};

export default NavLink;
