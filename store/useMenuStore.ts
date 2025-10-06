import { create } from "zustand";

type MenuState = {
  activeMenuItem: string | null;
  setActiveMenuItem: (item: string | null) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  activeMenuItem: "0",
  setActiveMenuItem: (item: string | null) => set({ activeMenuItem: item }),
}));
