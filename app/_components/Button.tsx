import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../_utils/helpers";

interface Props
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof btnVariants> {}

export const btnVariants = cva(
    "h-[4.6rem] rounded-[.8rem] disabled:opacity-25 font-semibold duration-200",
    {
        variants: {
            variant: {
                default: "bg-primary hover:bg-primary_light text-white",
                outline: "bg-white border border-primary text-primary hover:bg-primary_lighter"
            },
            size: {
                default: "w-fit px-[2.7rem]",
                full: "w-full"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

const Button = forwardRef<HTMLButtonElement, Props>(
    ({ className, size, variant, ...rest }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(btnVariants({ variant, size, className }))}
                {...rest}
            />
        );
    }
);
Button.displayName = "Button";

export default Button;
