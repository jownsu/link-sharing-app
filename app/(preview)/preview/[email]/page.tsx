import Button from "@/app/_components/Button";
import PreviewLink from "@/app/_components/PreviewLink";
import { DevlinkForm } from "@/app/_constants/constants";

interface Props {
    params: {
        email: string;
    };
}

const data = {
    first_name: "Jhones",
    last_name: "Digno",
    email: "jhonesdigno666@gmail.com",
    devlinks: [
        { id: 8256104, platform: "github", link: "https://github.com/jownsu" }
    ]
} as DevlinkForm;

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
            <div className="mx-auto max-w-[23.7rem]">
                <div>
                    {data.devlinks.map((devlink) => (
                        <PreviewLink
                            key={devlink.id}
                            href={devlink.link}
                            platform={devlink.platform}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;
