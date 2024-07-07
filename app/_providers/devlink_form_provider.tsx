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

    return <FormProvider {...methods}>{children}</FormProvider>;
};

export default DevlinkFormProvider;
