import Button from "@/app/_components/Button";
import React from "react";

interface Props {
    params: {
        email: string;
    };
}

const data = {
    profile_ppicture: "/jhones.jpg",
    first_name: "Jhones",
    last_name: "Digno",
    email: "jhonesdigno666@gmail.com",
    devlinks: [
        { id: 8256104, platform: "github", link: "https://github.com/jownsu" }
    ]
};

const PreviewPage = ({ params }: Props) => {
    const { email } = params;

    return (
        <div>
            <div className="flex gap-[1.6rem] px-[2.4rem] py-[1.6rem]">
                <Button variant={"outline"} className="flex-1 px-0">
                    Back to Editor
                </Button>
                <Button className="flex-1 px-0">Share Link</Button>
            </div>
        </div>
    );
};

export default PreviewPage;
