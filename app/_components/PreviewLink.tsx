import { PlatformType, Platforms } from "@/app/_constants/constants";
import PlatformIcon from "../(pages)/links/_components/PlatformIcon";
import RightIcon from "@/public/icons/icon-arrow-right.svg";
import clsx from "clsx";

interface Props {
    platform: PlatformType;
    href: string;
}

interface PlatformStyle {
    style: string;
    light: boolean;
}

const Platform: Record<PlatformType, PlatformStyle> = {
    github: {
        style: "bg-[#1A1A1A]",
        light: false
    },
    frontend_mentor: {
        style: "bg-[#FFFFFF]",
        light: true
    },
    twitter: {
        style: "bg-[#43B7E9]",
        light: false
    },
    linked_in: {
        style: "bg-[#2D68FF]",
        light: false
    },
    youtube: {
        style: "bg-[#EE3939]",
        light: false
    },
    facebook: {
        style: "bg-[#2442AC]",
        light: false
    },
    twitch: {
        style: "bg-[#EE3FC8]",
        light: false
    },
    dev_to: {
        style: "bg-[#333333]",
        light: false
    },
    codewars: {
        style: "bg-[#8A1A50]",
        light: false
    },
    codepen: {
        style: "bg-[#1A1A1A]",
        light: false
    },
    freecodecamp: {
        style: "bg-[#302267]",
        light: false
    },
    gitlab: {
        style: "bg-[#EB4925]",
        light: false
    },
    hash_node: {
        style: "bg-[#0330D1]",
        light: false
    },
    stack_overflow: {
        style: "bg-[#EC7100]",
        light: false
    }
};

const PreviewLink = ({ platform, href }: Props) => {
    return (
        <a
            href={href}
            target="_blank"
            className={clsx(
                "flex h-[4.4rem] w-full items-center gap-[.8rem] rounded-[.8rem] p-[1.6rem] text-white",
                Platform[platform].style,
                {
                    ["border border-borders !text-dark_grey"]:
                        Platform[platform].light
                }
            )}
        >
            <PlatformIcon platform={platform} />
            <span className="mr-auto text-[1.6rem]">
                {Platforms[platform].label}
            </span>
            <RightIcon
                className={clsx("h-[1.6rem] w-[1.6rem]", {
                    ["text-grey"]: Platform[platform].light
                })}
            />
        </a>
    );
};

export default PreviewLink;
