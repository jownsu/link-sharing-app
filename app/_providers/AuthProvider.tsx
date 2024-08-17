"use client";

/* REACT */
import React, { PropsWithChildren } from "react";

/* PLUGINS */
import { useAuthRedirect } from "../_hooks/useAuthRedirect";

const AuthProvider = ({ children }: PropsWithChildren) => {
    const { isLoading } = useAuthRedirect();

    if (isLoading) {
        return null;
    }

    return <>{children}</>;
};

export default AuthProvider;
