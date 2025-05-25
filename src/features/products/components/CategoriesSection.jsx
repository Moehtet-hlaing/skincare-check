import React from "react";
import useSWR from "swr";
import CategoryButton from "./CategoryButton";
// import Container from "../../../components/Container";
import useCategoryStore from "../../../stores/useCategoryStore";

const CategoriesSection = () => {
    const { categories } = useCategoryStore();
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4 font-gray-800">Categories</h1>
      <div className="flex gap-3 text-nowrap ">
        {categories.map((category) => (
          <CategoryButton key={category.id} category={category} />
        ))}
      </div>
      
    </section>
  );
};

export default CategoriesSection;
