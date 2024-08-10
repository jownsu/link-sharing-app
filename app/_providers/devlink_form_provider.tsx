"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DevlinkForm } from "../_constants/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: DevlinkForm) => {
        console.log(data);
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
