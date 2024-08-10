"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { DevlinkForm } from "../_constants/constants";
import toast from "react-hot-toast";
import FloppyDiskIcon from "@/public/icons/icon-changes-saved.svg";
import clsx from "clsx";

export const formSchema = z.object({
    devlinks: z.array(
        z.object({
            id: z.number(),
            platform: z.string(),
            link: z
                .string()
                .min(1, "Can't be empty")
                .url("Please check the URL")
        })
    ),
    first_name: z.string().min(1, "Can't be empty"),
    last_name: z.string().min(1, "Can't be empty"),
    email: z.string().min(1, "Can't be empty").email("Invalid email address"),
    profile_picture: z
        .any()
        .refine((file) => file?.length > 0, "File is required")
        .refine(
            (file) => file?.[0]?.size <= 10 * 1024 * 1024,
            "File size should be less than 10MB"
        )
});

interface Props {
    children: ReactNode;
}

const DevlinkFormProvider = ({ children }: Props) => {
    const methods = useForm<DevlinkForm>({
        defaultValues: {
            devlinks: []
        },
        resolver: zodResolver(formSchema)
    });

    const onSubmit = (data: DevlinkForm) => {
        console.log(data);
        toast.custom(
            () => (
                <div
                    className={clsx(
                        "flex items-center gap-[.8rem] rounded-[1.2rem] bg-dark_grey px-[2.4rem] py-[1.6rem] font-semibold text-light_grey"
                    )}
                >
                    <FloppyDiskIcon className="h-[2rem] w-[2rem]" />
                    <p>Your changes have been successfully saved!</p>
                </div>
            ),
            {
                position: "bottom-center"
            }
        );
    };

    return (
        <FormProvider {...methods}>
            <form
                className="flex h-full flex-1 flex-col"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default DevlinkFormProvider;
