import { DevlinkForm } from "../_constants/constants";

const useLocalStorage = () => {
    const saveDevLinks = (email: string, data: DevlinkForm) => {
        const devlinks = JSON.parse(localStorage.getItem("devlinks") || "{}");
        devlinks[email] = data;
        localStorage.setItem("devlinks", JSON.stringify(devlinks));
    };

    return {
        saveDevLinks
    };
};

export default useLocalStorage;
