import ImageIcon from "@/public/icons/icon-upload-image.svg";

const ProfilePictureForm = () => {
    return (
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
    );
};

export default ProfilePictureForm;
