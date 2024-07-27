"use client";

import { DevlinkForm } from "@/app/_constants/constants";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

const ProfileDetailsForm = () => {
    const {
        register,
        formState: { errors }
    } = useFormContext<DevlinkForm>();

    return (
        <div className="flex flex-col gap-[.6rem] rounded-[1.2rem] bg-light_grey p-[2rem] md:gap-[1.2rem]">
            <div className="flex flex-col md:flex-row md:items-center md:gap-[1.6rem] lg:flex-col lg:items-start lg:gap-0 xl:flex-row xl:items-center xl:gap-[1.6rem]">
                <label
                    htmlFor="first_name"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey md:shrink-0 md:basis-[24rem] md:text-[1.6rem] md:text-grey lg:basis-0 xl:basis-[24rem]"
                >
                    First name*
                </label>
                <div
                    className={clsx(
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary",
                        {
                            ["border-red"]: errors.first_name
                        }
                    )}
                >
                    <input
                        {...register("first_name", {
                            required: "Can't be empty"
                        })}
                        className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="text"
                        placeholder="e.g John"
                    />
                    {errors.first_name && (
                        <p className="text-nowrap text-[1.2rem] text-red">
                            {errors.first_name.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-[1.6rem] lg:flex-col lg:items-start lg:gap-0 xl:flex-row xl:items-center xl:gap-[1.6rem]">
                <label
                    htmlFor="last_name"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey md:shrink-0 md:basis-[24rem] md:text-[1.6rem] md:text-grey lg:basis-0 xl:basis-[24rem]"
                >
                    Last name*
                </label>
                <div
                    className={clsx(
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary",
                        {
                            ["border-red"]: errors.last_name
                        }
                    )}
                >
                    <input
                        {...register("last_name", {
                            required: "Can't be empty"
                        })}
                        className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="text"
                        placeholder="e.g Appleseed"
                    />
                    {errors.last_name && (
                        <p className="text-nowrap text-[1.2rem] text-red">
                            {errors.last_name.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-[1.6rem] lg:flex-col lg:items-start lg:gap-0 xl:flex-row xl:items-center xl:gap-[1.6rem]">
                <label
                    htmlFor="email"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey md:shrink-0 md:basis-[24rem] md:text-[1.6rem] md:text-grey lg:basis-0 xl:basis-[24rem]"
                >
                    Email
                </label>
                <div
                    className={
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary"
                    }
                >
                    <input
                        {...register("email")}
                        className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="email"
                        placeholder="e.g email@example.com"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailsForm;
