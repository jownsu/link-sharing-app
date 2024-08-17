import { LoginFormData } from "../(auth)/login/_component/LoginForm";
import { RegisterFormData } from "../(auth)/register/_component/RegisterForm";
import { DevlinkForm } from "../_constants/constants";
import { redirect } from "next/navigation";

const useLocalStorage = () => {
    const saveDevLinks = (email: string, data: DevlinkForm) => {
        const devlinks = JSON.parse(localStorage.getItem("devlinks") || "{}");
        devlinks[email] = data;
        localStorage.setItem("devlinks", JSON.stringify(devlinks));
    };

    const registerUser = (data: RegisterFormData) => {
        const users = JSON.parse(localStorage.getItem("devlink_users") || "{}");

        if (users[data.email]) {
            return false;
        }

        users[data.email] = data.password;
        localStorage.setItem("devlink_users", JSON.stringify(users));
        localStorage.setItem("devlink_logged_in", "true");

        return true;
    };

    const loginUser = (data: LoginFormData) => {
        const users = JSON.parse(localStorage.getItem("devlink_users") || "{}");

        if (users[data.email] === data.password) {
            localStorage.setItem("devlink_logged_in", "true");
            return true;
        }

        return false;
    };

    const logoutUser = () => {
        localStorage.removeItem("devlink_logged_in");
    };

    return {
        saveDevLinks,
        registerUser,
        loginUser,
        logoutUser
    };
};

export default useLocalStorage;
