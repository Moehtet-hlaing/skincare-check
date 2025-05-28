import React from "react";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 1, name: "Cleanser", isActive: true },
    { id: 2, name: "Moisturizer", isActive: false },
    { id: 3, name: "Serum", isActive: false },
    { id: 4, name: "Sunscreen", isActive: false },
    { id: 5, name: "Exfoliator", isActive: false },
    { id: 6, name: "Lip Care", isActive: false },
    { id: 7, name: "Toner", isActive: false },
    { id: 8, name: "Mask", isActive: false },
    { id: 9, name: "Eye Cream", isActive: false },
  ],
  setIsActive: (id) => {
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === id ? { ...category, isActive: true } : { ...category, isActive: false }
      ),
    }));
  },
}));
export default useCategoryStore;
