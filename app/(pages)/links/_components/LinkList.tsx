"use client";

import { useState } from "react";
import EmptyIcon from "@/public/icons/illustration-empty.svg";
import Button from "@/app/_components/Button";

const LinkList = () => {
    const [links, setLinks] = useState([]);

    return (
        <div>
            <Button 
                variant={"outline"} 
                size={"full"} 
                type="submit"
            >
                + Add new link
            </Button>
            {!!links.length && <p>Render List</p>}

            {!links.length && (
                <div>
                    <EmptyIcon />
                    <h2>Let&apos;s get you started</h2>
                    <p>
                        Use the &quot;Add new link&quot; button to get started.
                        Once you have more than one link, you can reorder and
                        edit them. We&apos;re here to help you share your
                        profiles with everyone!
                    </p>
                </div>
            )}

            <Button size="full">Save</Button>
        </div>
    );
};

export default LinkList;
