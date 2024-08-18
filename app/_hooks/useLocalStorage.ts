import { LoginFormData } from "../(auth)/login/_component/LoginForm";
import { RegisterFormData } from "../(auth)/register/_component/RegisterForm";
import { DevlinkForm } from "../_constants/constants";

const useLocalStorage = () => {
    const saveDevLinks = (data: DevlinkForm) => {
        const devlinks = JSON.parse(localStorage.getItem("devlinks") || "{}");
        const logged_in_email = localStorage.getItem("devlink_logged_in") || "";
        const reader = new FileReader();

        reader.readAsDataURL(data.profile_picture![0]);

        reader.onload = () => {
            const converted_img = reader.result;
            data.img = converted_img as string;
            devlinks[logged_in_email] = data;
            localStorage.setItem("devlinks", JSON.stringify(devlinks));
        };
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
        const devlink = JSON.parse(localStorage.getItem("devlinks") || "{}");

        const decoded_email = decodeURIComponent(email);

        if (devlink[decoded_email]) {
            return devlink[decoded_email];
        }

        return false;
    };

    return {
        saveDevLinks,
        registerUser,
        loginUser,
        logoutUser,
        findUserDevlink
    };
};

export default useLocalStorage;
