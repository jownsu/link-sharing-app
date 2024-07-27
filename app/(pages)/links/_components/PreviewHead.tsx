"use client";

import { DevlinkForm } from "@/app/_constants/constants";
import { useFormContext } from "react-hook-form";

const PreviewHead = () => {
    const { watch } = useFormContext<DevlinkForm>();
    const [ email, first_name, last_name ] = watch(["email", "first_name", "last_name"]);

    return (
        <div>
            <p>{`${first_name} ${last_name}`}</p>
            <p>{email}</p>
        </div>
    );
};

export default PreviewHead;
