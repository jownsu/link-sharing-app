export const Platforms: PlatformItem[] = [
    {
        id: 1,
        label: "Github",
        icon: "github"
    },
    {
        id: 2,
        label: "Frontend Mentor",
        icon: "frontend_mentor"
    },
    {
        id: 3,
        label: "Twitter",
        icon: "twitter"
    },
    {
        id: 4,
        label: "LinkedIn",
        icon: "linked_in"
    },
    {
        id: 5,
        label: "Youtube",
        icon: "youtube"
    },
    {
        id: 6,
        label: "Facebook",
        icon: "facebook"
    },
    {
        id: 7,
        label: "Twitch",
        icon: "twitch"
    },
    {
        id: 8,
        label: "Dev.to",
        icon: "dev_to"
    },
    {
        id: 9,
        label: "Codewars",
        icon: "codewars"
    },
    {
        id: 10,
        label: "Codepen",
        icon: "codepen"
    },
    {
        id: 11,
        label: "freeCodeCamp",
        icon: "freecodecamp"
    },
    {
        id: 12,
        label: "GitLab",
        icon: "gitlab"
    },
    {
        id: 13,
        label: "Hashnode",
        icon: "hash_node"
    },
    {
        id: 14,
        label: "Stack Overflow",
        icon: "stack_overflow"
    }
];

export type PlatformType = "github" | "frontend_mentor" | "twitter" | "linked_in" | "youtube" | "facebook" | "twitch" | "dev_to" | "codewars" | "codepen" | "freecodecamp" | "gitlab" | "hash_node" | "stack_overflow" ;

interface PlatformItem {
    id: number;
    label: string;
    icon: PlatformType
}

export interface DevLink {
    id: number,
    platform: PlatformType,
    link: string
}
