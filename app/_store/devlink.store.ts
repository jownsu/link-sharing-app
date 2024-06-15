import { create } from "zustand";
import { DevLink } from "../_constants/constants";

interface DevLinkStoreType {
    devlinks: DevLink[];
    addDevLink: () => void;
    removeDevLink: (id: number) => void;
}

const useDevLinkStore = create<DevLinkStoreType>((set) => ({
    devlinks: [],
    is_from_contact_us: false,
    addDevLink: () => {
        set((state) => ({
            devlinks: [{ id: Math.floor(Math.random() * 9999999), link: "", platform: "github" }, ...state.devlinks]
        }));
    },
    removeDevLink: (id) => {
        set((state) => ({
            devlinks: state.devlinks.filter((devlink) => devlink.id !== id)
        }));
    }
}));

export default useDevLinkStore;
