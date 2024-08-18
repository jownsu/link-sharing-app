import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../_utils/helpers";

interface Props
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof btnVariants> {
            asChild?: boolean;
        }

export const btnVariants = cva(
    "h-[4.6rem] rounded-[.8rem] disabled:opacity-25 font-semibold duration-200 px-[2.7rem]",
    {
        variants: {
            variant: {
                default: "bg-primary hover:bg-primary_light text-white",
                outline: "bg-white border border-primary text-primary hover:bg-primary_lighter"
            },
            size: {
                default: "w-fit",
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
    ({ className, size, variant, asChild = false, ...rest }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(btnVariants({ variant, size, className }))}
                {...rest}
            />
        );
    }
);
Button.displayName = "Button";

export default Button;
