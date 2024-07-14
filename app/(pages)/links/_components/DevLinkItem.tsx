"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/app/_components/Select";
import {
    DevLink,
    DevlinkForm,
    Platforms,
    PlatformType
} from "@/app/_constants/constants";
import DragIcon from "@/public/icons/icon-drag-and-drop.svg";
import LinkIcon from "@/public/icons/icon-link.svg";
import { Draggable } from "@hello-pangea/dnd";
import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
import PlatformIcon from "./PlatformIcon";

interface Props {
    link: DevLink;
    index: number;
    remove: (id: number) => void;
}

const DevLinkItem = ({ link, index, remove }: Props) => {
    const {
        register,
        control,
        formState: { errors }
    } = useFormContext<DevlinkForm>();

    return (
        <Draggable draggableId={link.id.toString()} index={index}>
            {(provided) => (
                <li
                    ref={provided.innerRef}
                    key={link.id}
                    className="rounded-[1.2rem] bg-light_grey p-[2rem]"
                    {...provided.draggableProps}
                >
                    <div className="mb-[1rem] flex items-center gap-[1rem] text-grey">
                        <span {...provided.dragHandleProps}>
                            <DragIcon />{" "}
                        </span>
                        <span className="mr-auto font-bold">
                            Link #{index + 1}
                        </span>
                        <button type="button" onClick={() => remove(index)}>
                            Remove
                        </button>
                    </div>

                    <div className="mb-[.5rem]">
                        <label
                            htmlFor="link"
                            className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                        >
                            Platform
                        </label>

                        <Controller
                            control={control}
                            name={`devlinks.${index}.platform`}
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    value={value}
                                    onValueChange={(a) => onChange(a)}
                                >
                                    <SelectTrigger className="h-[4.8rem] rounded-[.8rem] border border-borders pl-[1rem] pr-[1.5rem] text-[1.6rem] text-grey aria-expanded:border-primary aria-expanded:shadow-drop_primary">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="z-50 bg-white px-[1.6rem]">
                                        {Object.entries(Platforms).map(
                                            ([key, platform]) => (
                                                <SelectItem
                                                    key={platform.id}
                                                    value={platform.icon}
                                                    className="border-b-borders px-0 py-[1.2rem] text-[1.6rem] text-dark_grey [&:not(:last-of-type)]:border-b"
                                                >
                                                    <div className="flex items-center gap-[1rem]">
                                                        <PlatformIcon
                                                            platform={
                                                                key as PlatformType
                                                            }
                                                        />
                                                        {platform.label}
                                                    </div>
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="link"
                            className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                        >
                            Link
                        </label>
                        <div
                            className={clsx(
                                "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary",
                                {
                                    ["border-red"]:
                                        errors.devlinks?.[index]?.link
                                }
                            )}
                        >
                            <LinkIcon className="shrink-0" />
                            <input
                                {...register(`devlinks.${index}.link`, {
                                    required: "Can't be empty",
                                    pattern: {
                                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                                        message: "Please check the URL"
                                    }
                                })}
                                className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                                type="url"
                                placeholder="e.g https://github.com/jownsu"
                            />
                            {errors.devlinks?.[index]?.link && (
                                <p className="text-nowrap text-[1.2rem] text-red">
                                    {errors.devlinks?.[index]?.link?.message}
                                </p>
                            )}
                        </div>
                    </div>
                </li>
            )}
        </Draggable>
    );
};

export default DevLinkItem;
