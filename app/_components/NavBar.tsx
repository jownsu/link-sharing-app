import PreviewIcon from "@/public/icons/icon-preview-header.svg";
import Button from "./Button";
import DevlinkLogo from "./DevlinkLogo";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <nav className="container mx-auto flex items-center p-[1.6rem]">
            <DevlinkLogo className="mr-auto flex-shrink-0" size="sm" />
            <NavLink path="links" />
            <NavLink path="profile" />
            <Button
                variant={"outline"}
                className="ml-auto h-[4.2rem] px-[1.6rem] md:px-[2.7rem] lg:h-[4.6rem]"
            >
                <PreviewIcon className="h-[2rem] w-[2rem] md:hidden" />
                <span className="hidden font-semibold text-primary md:block">
                    Preview
                </span>
            </Button>
        </nav>
    );
};

export default NavBar;
