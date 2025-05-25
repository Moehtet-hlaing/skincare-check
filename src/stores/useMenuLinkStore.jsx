import { create } from "zustand";

const useMenuLinkStore = create((set) => ({
    menuLinks: [
  {
    id: 1,
    label: "Home",
    offset: -100,
    to: "hero",
  },
  {
    id: 2,
    label: "Skills",
    offset: -80,
    to: "skills",
  },
  {
    id: 3,
    label: "About Us",
    offset: -80,
    to: "about",
  },
  {
    id: 4,
    label: "Projects",
    offset: -80,
    to: "projects",
  },
  {
    id: 5,
    label: "Contact Us",
    offset: -80,
    to: "contact",
  },
],
    setMenuLinks: (menuLinks) => set({ menuLinks }),
}));

export default useMenuLinkStore