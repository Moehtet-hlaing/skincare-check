import CategoryButton from "./CategoryButton";
import useCategoryStore from "../../../stores/useCategoryStore";

const CategoriesSection = () => {
    const { categories } = useCategoryStore();

  return (
    <section className="p-4 flex flex-col">
      <div className=" gap-3 text-nowrap  hide-scrollbar overflow-x-scroll">
        {categories.map((category) => (
          <CategoryButton key={category.id} category={category} />
        ))}
      </div>

      
    </section>
  );
};

export default CategoriesSection;
