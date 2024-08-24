import { LoginFormData } from "../(auth)/login/_component/LoginForm";
import { RegisterFormData } from "../(auth)/register/_component/RegisterForm";
import { DevlinkForm } from "../_constants/constants";

const useLocalStorage = () => {
    const saveDevLinks = async (data: DevlinkForm) => {
        const devlinks = JSON.parse(localStorage.getItem("devlinks") || "{}");
        const logged_in_email = localStorage.getItem("devlink_logged_in") || "";

        devlinks[logged_in_email] = data;
        localStorage.setItem("devlinks", JSON.stringify(devlinks));
    };

    const getDevlinks = (): DevlinkForm => {
        let devlink = {
            email: "",
            first_name: "",
            last_name: "",
            profile_picture: "",
            devlinks: []
        };

        if (typeof window !== "undefined") {
            const user = localStorage.getItem("devlink_logged_in") || "";
            const devlinks = JSON.parse(localStorage.getItem("devlinks") || "{}");

            if(devlinks[user]){
                devlink = devlinks[user];
            }
        }

        return devlink;
    };

    const registerUser = (data: RegisterFormData) => {
        const users = JSON.parse(localStorage.getItem("devlink_users") || "{}");

        if (users[data.email]) {
            return false;
        }

        users[data.email] = data.password;
        localStorage.setItem("devlink_users", JSON.stringify(users));
        localStorage.setItem("devlink_logged_in", data.email);

        return true;
    };

    const loginUser = (data: LoginFormData) => {
        const users = JSON.parse(localStorage.getItem("devlink_users") || "{}");

        if (users[data.email] === data.password) {
            localStorage.setItem("devlink_logged_in", data.email);
            return true;
        }

        return false;
    };

    const logoutUser = () => {
        localStorage.removeItem("devlink_logged_in");
    };

    const findUserDevlink = (email: string): DevlinkForm | false => {
        if (typeof window !== "undefined") {
            const devlink = JSON.parse(
                localStorage.getItem("devlinks") || "{}"
            );

            const decoded_email = decodeURIComponent(email);

            if (devlink[decoded_email]) {
                return devlink[decoded_email];
            }
        }

        return false;
    };

    return {
        saveDevLinks,
        getDevlinks,
        registerUser,
        loginUser,
        logoutUser,
        findUserDevlink
    };
};

export default useLocalStorage;
