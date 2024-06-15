import { DevLink } from "@/app/_constants/constants";
import LinkIcon from "@/public/icons/icon-link.svg";
import DragIcon from "@/public/icons/icon-drag-and-drop.svg";
import classNames from "classnames";
import { Platforms } from "@/app/_constants/constants";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/app/_components/Select";
import PlatformIcon from "./PlatformIcon";

interface Props {
    link: DevLink;
    index: number;
}

const DevLinkItem = ({ link, index }: Props) => {
    return (
        <li key={link.id} className="rounded-[1.2rem] bg-light_grey p-[2rem]">
            <div className="mb-[1rem] flex items-center gap-[1rem] text-grey">
                <DragIcon />{" "}
                <span className="mr-auto font-bold">Link #{index + 1}</span>
                <button type="button">Remove</button>
            </div>

            <div className="mb-[.5rem]">
                <label
                    htmlFor="link"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                >
                    Platform
                </label>
                <Select defaultValue="Github">
                    <SelectTrigger className="h-[4.8rem] rounded-[.8rem] border border-borders pl-[1rem] pr-[1.5rem] text-[1.6rem] text-grey aria-expanded:border-primary aria-expanded:shadow-drop_primary">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white px-[1.6rem]">
                        {Object.values(Platforms).map((platform) => (
                            <SelectItem
                                key={platform.id}
                                value={platform.label}
                                className="border-b-borders px-0 py-[1.2rem] text-[1.6rem] text-dark_grey [&:not(:last-of-type)]:border-b"
                            >
                                <div className="flex items-center gap-[1rem]">
                                    <PlatformIcon platform={platform.icon} />
                                    {platform.label}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label
                    htmlFor="link"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                >
                    Link
                </label>
                <div
                    className={classNames(
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary"
                    )}
                >
                    <LinkIcon className="shrink-0" />
                    <input
                        className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="text"
                        placeholder="e.g https://github.com/jownsu"
                    />
                </div>
            </div>
        </li>
    );
};

export default DevLinkItem;
