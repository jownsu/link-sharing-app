import PreviewIcon from "@/public/icons/icon-preview-header.svg";
import Button from "./Button";
import DevlinkLogo from "./DevlinkLogo";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <nav className="container bg-white md:bg-transparent md:pt-[2.4rem]">
            <div className="flex items-center rounded-[1.2rem] bg-white px-[2.4rem] py-[1.6rem]">
                <DevlinkLogo className="mr-auto flex-shrink-0" size="sm" />
                <NavLink path="links" />
                <NavLink path="profile" />
                <Button
                    variant={"outline"}
                    className="ml-auto h-[4.2rem] px-[1.6rem] mdF:px-[2.7rem] lg:h-[4.6rem]"
                >
                    <PreviewIcon className="h-[2rem] w-[2rem] md:hidden" />
                    <span className="hidden font-semibold text-primary md:block">
                        Preview
                    </span>
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;
