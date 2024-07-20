import LinkList from "./_components/LinkList";

const LinkPage = () => {
    return (
        <div className="flex h-full flex-1 flex-col">
            <h1 className="text-[2.4rem] font-bold leading-[150%] text-dark_grey md:text-[3.2rem]">
                Customize your links
            </h1>
            <p className="mb-[4.1rem] text-grey">
                Add/edit/remove links below and then share all your profiles
                with the world!
            </p>
            <LinkList />
        </div>
    );
};

export default LinkPage;
