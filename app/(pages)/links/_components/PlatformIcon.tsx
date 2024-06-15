import { PlatformType } from "@/app/_constants/constants";
import { ComponentType, SVGProps } from "react";

import GithubIcon from "@/public/icons/github.svg";
import FMIcon from "@/public/icons/frontend_mentor.svg";
import TwitterIcon from "@/public/icons/twitter.svg";
import LinkedinIcon from "@/public/icons/linked_in.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import TwitchIcon from "@/public/icons/twitch.svg";
import DevToIcon from "@/public/icons/dev_to.svg";
import CodewarsIcon from "@/public/icons/codewars.svg";
import CodePenIcon from "@/public/icons/codepen.svg";
import FCCIcon from "@/public/icons/freecodecamp.svg";
import GitlabIcon from "@/public/icons/gitlab.svg";
import HashNodeIcon from "@/public/icons/hash_node.svg";
import StackOverflowIcon from "@/public/icons/stack_overflow.svg";

interface Props extends SVGProps<SVGSVGElement> {
    platform: PlatformType;
}

const ICONS: Record<PlatformType, ComponentType> = {
    github: GithubIcon,
    frontend_mentor: FMIcon,
    twitter: TwitterIcon,
    linked_in: LinkedinIcon,
    youtube: YoutubeIcon,
    facebook: FacebookIcon,
    twitch: TwitchIcon,
    dev_to: DevToIcon,
    codewars: CodewarsIcon,
    codepen: CodePenIcon,
    freecodecamp: FCCIcon,
    gitlab: GitlabIcon,
    hash_node: HashNodeIcon,
    stack_overflow: StackOverflowIcon
};

const PlatformIcon = ({ platform, ...props }: Props) => {
    const Icon = ICONS[platform];
    
    if(!Icon) return null;

    return <Icon {...props} />;
};

export default PlatformIcon;
