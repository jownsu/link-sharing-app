import Button from "@/app/_components/Button";
import ProfilePictureForm from "./_components/ProfilePictureForm";
import ProfileDetailsForm from "./_components/ProfileDetailsForm";

const ProfilePage = () => {
    return (
        <div className="flex h-full flex-1 flex-col">
            <h1 className="text-[2.4rem] font-bold leading-[150%] text-dark_grey md:text-[3.2rem]">
                Profile Details
            </h1>
            <p className="mb-[4.1rem] text-grey">
                Add your details to create a personal touch to your profile.
            </p>

            <ProfilePictureForm />
            <ProfileDetailsForm />

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
