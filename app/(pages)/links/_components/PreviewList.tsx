"use client";

import PreviewLink from "@/app/_components/PreviewLink";
import useDevLinkStore from "@/app/_store/devlink.store";

const PreviewList = () => {

    const devlinks = useDevLinkStore(state => state.devlinks);

    return (
        <div className="absolute bottom-[5.3rem] left-[50%] flex h-[30rem] max-h-[30rem] w-[23.7rem] -translate-x-1/2 flex-col gap-[2rem] overflow-auto">
            {
                devlinks.map((devlink) => (
                    <PreviewLink key={devlink.id} href={devlink.link} platform={devlink.platform} />
                ))
            }
        </div>
    );
};

export default PreviewList;
