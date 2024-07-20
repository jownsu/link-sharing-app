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

            <div className="rounded-[1.2rem] bg-light_grey p-[2rem]">
                <p className="mb-[1.6rem] text-grey">Profile picture</p>
                <label
                    htmlFor="profile_picture"
                    className="mb-[2.4rem] flex size-[19.3rem] flex-col items-center justify-center rounded-[1.2rem] bg-primary_lighter"
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
                <p className="text-[1.2rem] text-grey">
                    Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
            </div>
        </div>
    );
};

export default ProfilePage;
