"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DevlinkForm } from "../_constants/constants";

interface Props {
    children: ReactNode;
}


const DevlinkFormProvider = ({ children }: Props) => {
    const methods = useForm<DevlinkForm>({
        defaultValues: {
            devlinks: []
        }
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
