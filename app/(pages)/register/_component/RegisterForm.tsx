"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import MailIcon from "@/public/icons/icon-email.svg";
import PasswordIcon from "@/public/icons/icon-password.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";

export const registerSchema = z
    .object({
        email: z.string().trim().min(1, "Can't be empty").max(255).email(),
        password: z.string().trim().min(8, "At least 8 characters"),
        confirm_password: z.string().trim().min(1, "Can't be empty")
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Passwords must match",
        path: ["confirm_password"]
    });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

    const onSubmit: SubmitHandler<RegisterFormData> = (data) =>
        console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col rounded-[1.2rem] md:w-[47.6rem] md:bg-white md:p-[4rem]"
        >
            <h1 className="mb-[.8rem] text-[2.4rem] font-bold text-dark_grey md:text-[3.2rem]">
                Create account
            </h1>
            <p className="mb-[3.8rem] text-grey">
                Let&apos;s get you started sharing your links!
            </p>
            <div className="mb-[2.4rem]">
                <label
                    htmlFor="email"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                >
                    Email Address
                </label>
                <div
                    className={classNames(
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary",
                        { ["border-red"]: errors.email }
                    )}
                >
                    <MailIcon className="shrink-0" />
                    <input
                        className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="text"
                        placeholder="e.g alex@email.com"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-nowrap text-[1.2rem] text-red">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="mb-[2.4rem]">
                <label
                    htmlFor="password"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                >
                    Create password
                </label>
                <div
                    className={classNames(
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary",
                        { ["border-red"]: errors.email }
                    )}
                >
                    <PasswordIcon className="shrink-0" />
                    <input
                        className="w-full text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="password"
                        placeholder="At least 8 characters"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-nowrap text-[1.2rem] text-red">
                            {errors.password.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="mb-[2.4rem]">
                <label
                    htmlFor="password"
                    className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey"
                >
                    Confirm Password
                </label>
                <div
                    className={classNames(
                        "flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary",
                        { ["border-red"]: errors.email }
                    )}
                >
                    <PasswordIcon className="shrink-0" />
                    <input
                        className="w-full text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                        type="password"
                        placeholder="At least 8 characters"
                        {...register("confirm_password")}
                    />
                    {errors.confirm_password && (
                        <p className="text-nowrap text-[1.2rem] text-red">
                            {errors.confirm_password.message}
                        </p>
                    )}
                </div>
            </div>
            <p className="mb-[2.4rem] text-[1.2rem] text-grey">
                Password must contain at least 8 characters
            </p>
            <button
                type="submit"
                className="mb-[2.4rem] h-[4.6rem] rounded-[.8rem] bg-primary font-semibold text-white duration-200 hover:bg-primary_light"
            >
                Create new account
            </button>
            <p className="flex flex-col text-center text-grey md:flex-row md:justify-center md:gap-[.5rem]">
                Already have an account?{" "}
                <Link href="/login" className="text-primary">
                    Login
                </Link>
            </p>
        </form>
    );
};

export default RegisterForm;
