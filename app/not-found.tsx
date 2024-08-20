import React from "react";
import Button from "./_components/Button";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-[2rem] bg-primary_lighter">
            <h1 className="text-[4rem] font-bold">404: User Not Found</h1>
            <Button asChild className="flex items-center">
                <Link href="/links">Back</Link>
            </Button>
        </div>
    );
};

export default ErrorPage;
