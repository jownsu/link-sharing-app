import dynamic from "next/dynamic";
const SubmitBtn = dynamic(() => import("./_components/SubmitBtn"));
const ProfilePictureForm = dynamic(() => import("./_components/ProfilePictureForm"), { ssr: false });
const ProfileDetailsForm = dynamic(() => import("./_components/ProfileDetailsForm"), { ssr: false });

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
            <SubmitBtn />
        </div>
    );
};

export default ProfilePage;
