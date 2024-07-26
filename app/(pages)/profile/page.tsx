import Button from "@/app/_components/Button";
import ImageIcon from "@/public/icons/icon-upload-image.svg";

const ProfilePage = () => {
    return (
        <div className="flex h-full flex-1 flex-col">
            <h1 className="text-[2.4rem] font-bold leading-[150%] text-dark_grey md:text-[3.2rem]">
                Profile Details
            </h1>
            <p className="mb-[4.1rem] text-grey">
                Add your details to create a personal touch to your profile.
            </p>

            <div className="mb-[2.4rem] flex flex-col rounded-[1.2rem] bg-light_grey p-[2rem] md:flex-row md:items-center md:gap-[1.2rem] lg:flex-col lg:items-start lg:gap-[0] xl:flex-row xl:items-center xl:gap-[1.2rem]">
                <p className="mb-[1.6rem] text-grey md:shrink-0 md:basis-[24rem] lg:basis-0 xl:basis-[24rem]">
                    Profile picture
                </p>
                <label
                    htmlFor="profile_picture"
                    className="mb-[2.4rem] flex size-[19.3rem] shrink-0 flex-col items-center justify-center rounded-[1.2rem] bg-primary_lighter md:mr-[1.1rem]"
                >
                    <ImageIcon className="size-[4rem]" />
                    <span className="text-[1.6rem] font-semibold text-primary">
                        + Upload Image
                    </span>
                </label>
                <input
                    className="hidden"
                    type="file"
                    name="profile_picture"
                    id="profile_picture"
                    accept="image/png, image/jpeg"
                />
                <p className="text-[1.2rem] text-grey md:max-w-[13rem] lg:w-auto xl:max-w-[13rem]">
                    Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
            </div>

            <div className="flex flex-col gap-[.6rem] rounded-[1.2rem] bg-light_grey p-[2rem] md:gap-[1.2rem]">
                <div className="flex flex-col md:flex-row md:items-center md:gap-[1.6rem] lg:flex-col lg:items-start lg:gap-0 xl:flex-row xl:items-center xl:gap-[1.6rem]">
                    <label
                        htmlFor="first_name"
                        className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey md:shrink-0 md:basis-[24rem] md:text-[1.6rem] md:text-grey lg:basis-0 xl:basis-[24rem]"
                    >
                        First name*
                    </label>
                    <div className="flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary">
                        <input
                            id="first_name"
                            className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                            type="text"
                            placeholder="e.g John"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-[1.6rem] lg:flex-col lg:items-start lg:gap-0 xl:flex-row xl:items-center xl:gap-[1.6rem]">
                    <label
                        htmlFor="first_name"
                        className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey md:shrink-0 md:basis-[24rem] md:text-[1.6rem] md:text-grey lg:basis-0 xl:basis-[24rem]"
                    >
                        Last name*
                    </label>
                    <div className="flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary">
                        <input
                            id="first_name"
                            className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                            type="text"
                            placeholder="e.g Appleseed"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-[1.6rem] lg:flex-col lg:items-start lg:gap-0 xl:flex-row xl:items-center xl:gap-[1.6rem]">
                    <label
                        htmlFor="first_name"
                        className="mb-[.5rem] inline-block text-[1.2rem] text-dark_grey md:shrink-0 md:basis-[24rem] md:text-[1.6rem] md:text-grey lg:basis-0 xl:basis-[24rem]"
                    >
                        Email
                    </label>
                    <div className="flex h-[4.8rem] w-full items-center gap-[1rem] rounded-[.8rem] border border-borders px-[1rem] has-[input:focus]:border-primary has-[input:focus]:shadow-drop_primary">
                        <input
                            id="first_name"
                            className="input:-internal-autofill-selected: w-full bg-transparent text-dark_grey outline-none placeholder:text-dark_grey placeholder:opacity-50"
                            type="email"
                            placeholder="e.g email@example.com"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-[2.4rem] mt-auto h-[.1rem] w-[calc(100%_+_4.8rem)] translate-x-[-2.4rem] bg-borders"></div>

            <Button
                size="full"
                className="flex-shrink-0 md:ml-auto md:w-fit"
                type="submit"
            >
                Save
            </Button>
        </div>
    );
};

export default ProfilePage;
