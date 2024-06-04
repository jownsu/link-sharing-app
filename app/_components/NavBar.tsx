import DevlinkLogo from "./DevlinkLogo";
import LinkIcon from "@/public/icons/icon-links-header.svg";
import ProfileIcon from "@/public/icons/icon-profile-details-header.svg";
import PreviewIcon from "@/public/icons/icon-preview-header.svg";

const NavBar = () => {
    return (
        <nav className="container mx-auto flex p-[1.6rem]">
            <DevlinkLogo className="mr-auto" />
            <button className="flex h-[4.2rem] items-center justify-center gap-[.8rem] rounded-[.8rem] bg-primary_lighter px-[2.7rem]">
                <LinkIcon className="h-[2rem] w-[2rem] fill-primary" />
                <span className="hidden font-semibold text-primary md:block">
                    Links
                </span>
            </button>
            <button className="flex h-[4.2rem] items-center justify-center gap-[.8rem] rounded-[.8rem] px-[2.7rem]">
                <ProfileIcon className="h-[2rem] w-[2rem]" />
                <span className="hidden font-semibold text-grey md:block">
                    Profile Details
                </span>
            </button>
            <button className="ml-auto flex h-[4.2rem] items-center justify-center rounded-[.8rem] border border-primary px-[1.6rem] md:px-[2.7rem]">
                <PreviewIcon className="h-[2rem] w-[2rem] md:hidden" />
                <span className="hidden font-semibold text-primary md:block">
                    Preview
                </span>
            </button>
        </nav>
    );
};

export default NavBar;
