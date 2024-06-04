import classNames from "classnames";
import Image from "next/image";

interface Props {
    className?: string,
    size?: "sm" | "lg",
    responsive?: boolean
} 

const DevlinkLogo = ({ className, size = "lg", responsive = true }: Props) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Image
                src="/icons/logo-devlinks-small.svg"
                alt="Icon of devlinks"
                width={size === "lg" ? 40 : 32}
                height={size === "lg" ? 40 : 32}
            />
            <span className={classNames("font-bold text-dark_grey", {
                ["text-[3.6rem]"]: size === "lg",
                ["text-[2.4rem]"]: size === "sm",
                ["hidden md:block"]: responsive
            })}>
                devlinks
            </span>
        </div>
    );
};

export default DevlinkLogo;
