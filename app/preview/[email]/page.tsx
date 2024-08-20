import NavBar from "./_components/NavBar";

import dynamic from "next/dynamic";

const UserCard = dynamic(() => import("./_components/UserCard"), { ssr: false });

interface Props {
    params: {
        email: string;
    };
}

const PreviewPage = ({ params }: Props) => {
    const { email } = params;

    return (
        <div className="flex min-h-screen flex-col bg-light_grey">
            <div className="absolute top-0 hidden h-[35.7rem] w-full rounded-b-[3.2rem] bg-primary md:block"></div>
            <NavBar />
            <UserCard email={email} />
        </div>
    );
};

export default PreviewPage;
