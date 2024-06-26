"use client";

import Button from "@/app/_components/Button";
import MailIcon from "@/public/icons/icon-email.svg";
import PasswordIcon from "@/public/icons/icon-password.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().min(1, "Can't be empty").max(255).email(),
    password: z.string().trim().min(1, "Can't be empty")
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

    const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col rounded-[1.2rem] md:w-[47.6rem] md:bg-white md:p-[4rem]"
        >
            <h1 className="mb-[.8rem] text-[2.4rem] font-bold text-dark_grey md:text-[3.2rem]">
                Login
            </h1>
            <p className="mb-[3.8rem] text-grey">
                Add your details below to get back into the app
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
                    Password
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
                        placeholder="Enter your password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-nowrap text-[1.2rem] text-red">
                            {errors.password.message}
                        </p>
                    )}
                </div>
            </div>
            <Button size="full" className="mb-[2.4rem]">
                Login
            </Button>
            <p className="flex flex-col text-center text-grey md:flex-row md:justify-center md:gap-[.5rem]">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary">
                    Create account
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
