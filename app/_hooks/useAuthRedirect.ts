import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useAuthRedirect() {
    const router = useRouter();
    const current_path = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const is_logged_in = localStorage.getItem("devlink_logged_in");

        if (is_logged_in === null && current_path !== "/register") {
            router.push("/login");
        } 
        else if (is_logged_in !== null && current_path === "/login") {
            router.push("/links");
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 50);
    }, [router, current_path]);

    return { isLoading };
}
