export const Platforms = {
    github: {
        id: 1,
        label: "Github",
        icon: "github"
    },
    frontend_mentor: {
        id: 2,
        label: "Frontend Mentor",
        icon: "frontend_mentor"
    },
    twitter: {
        id: 3,
        label: "Twitter",
        icon: "twitter"
    },
    linked_in: {
        id: 4,
        label: "LinkedIn",
        icon: "linked_in"
    },
    youtube: {
        id: 5,
        label: "Youtube",
        icon: "youtube"
    },
    facebook: {
        id: 6,
        label: "Facebook",
        icon: "facebook"
    },
    twitch: {
        id: 7,
        label: "Twitch",
        icon: "twitch"
    },
    dev_to: {
        id: 8,
        label: "Dev.to",
        icon: "dev_to"
    },
    codewars: {
        id: 9,
        label: "Codewars",
        icon: "codewars"
    },
    codepen: {
        id: 10,
        label: "Codepen",
        icon: "codepen"
    },
    freecodecamp: {
        id: 11,
        label: "freeCodeCamp",
        icon: "freecodecamp"
    },
    gitlab: {
        id: 12,
        label: "GitLab",
        icon: "gitlab"
    },
    hash_node: {
        id: 13,
        label: "Hashnode",
        icon: "hash_node"
    },
    stack_overflow: {
        id: 14,
        label: "Stack Overflow",
        icon: "stack_overflow"
    }
};

export type PlatformType = keyof typeof Platforms

export interface DevLink {
    id: number;
    platform: PlatformType;
    link: string;
}

export type DevlinkForm = {
    devlinks: DevLink[];
};