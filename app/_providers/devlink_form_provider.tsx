"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { DevlinkForm } from "../_constants/constants";
import toast from "react-hot-toast";
import clsx from "clsx";
import useLocalStorage from "../_hooks/useLocalStorage";
import FloppyDiskIcon from "@/public/icons/icon-changes-saved.svg";

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
    profile_picture: z.string().min(1, "Can't be empty")
});

interface Props {
    children: ReactNode;
}

const DevlinkFormProvider = ({ children }: Props) => {
    const { saveDevLinks, getDevlinks } = useLocalStorage();
   
    const default_value = getDevlinks();
   
    const methods = useForm<DevlinkForm>({
        defaultValues: default_value,
        resolver: zodResolver(formSchema)
    });

    const onSubmit: SubmitHandler<DevlinkForm> = (data) => {
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

        saveDevLinks(data);
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
