"use client";

import Button from "@/app/_components/Button";
import { DevlinkForm } from "@/app/_constants/constants";
import { useFormContext } from "react-hook-form";

const SubmitBtn = () => {

    const {
        watch,
        formState: { isValid }
    } = useFormContext<DevlinkForm>();


    const devlinks = watch("devlinks");

    return (
        <Button
            disabled={!isValid || devlinks.length <= 0}
            size="full"
            className="flex-shrink-0 md:ml-auto md:w-fit"
            type="submit"
        >
            Save
        </Button>
    );
};

export default SubmitBtn;
