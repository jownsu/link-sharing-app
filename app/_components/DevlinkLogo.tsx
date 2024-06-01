import Image from "next/image";

interface Props {
    className?: string
}

const DevlinkLogo = ({ className }: Props) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Image
                src="/icons/logo-devlinks-small.svg"
                alt="Icon of devlinks"
                width={40}
                height={40}
            />
            <span className="text-[3.6rem] font-bold text-dark_grey">
                devlinks
            </span>
        </div>
    );
};

export default DevlinkLogo;
