import { RegisterFormData } from "../(auth)/register/_component/RegisterForm";
import { DevlinkForm } from "../_constants/constants";

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
    }

    return {
        saveDevLinks,
        registerUser
    };
};

export default useLocalStorage;
