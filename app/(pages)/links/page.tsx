import LinkList from "./_components/LinkList";

const LinkPage = () => {
    return (
        <div className="container py-[2.4rem]">
            <div className="rounded-[1.2rem] p-[2.4rem]">
                <h1 className="text-[2.4rem] font-bold leading-[150%] text-dark_grey">
                    Customize your links
                </h1>
                <p className="mb-[4.1rem] text-grey">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                </p>
                <LinkList />
            </div>
        </div>
    );
};

export default LinkPage;
