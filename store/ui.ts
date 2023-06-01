import { atom, selector } from "recoil";

// Define atoms
export const isLoadingAtom = atom({
    key: "isLoadingAtom",
    default: false,
});
