import { create } from "zustand";
import { DevLink } from "../_constants/constants";

interface DevLinkStoreType {
    devlinks: DevLink[];
    updateDevLinks: (devlinks: DevLink[]) => void;
}

const useDevLinkStore = create<DevLinkStoreType>((set) => ({
    devlinks: [],

    updateDevLinks: (devlinks) => {
        set(() => ({ devlinks }));
    }
}));

export default useDevLinkStore;
