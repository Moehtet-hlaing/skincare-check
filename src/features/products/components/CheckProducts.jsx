
import React, { useState, useEffect } from "react"; // Import useEffect
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

const CheckProducts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, // <-- Import watch from useForm
  } = useForm();
  const navigate = useNavigate();
  

  // Watch the values of product_1 and product_2
  const selectedProduct1Value = watch("product_1");
  const selectedProduct2Value = watch("product_2");

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  // Use useEffect to update image1 when selectedProduct1Value changes
  useEffect(() => {
    if (selectedProduct1Value) {
      try {
        const product = JSON.parse(selectedProduct1Value);
        setImage1(product.image_url);
      } catch (error) {
        console.error("Failed to parse product 1 JSON:", error);
        setImage1(""); // Clear image if parsing fails
      }
    } else {
      setImage1(""); // Clear image if no product is selected
    }
  }, [selectedProduct1Value]); // Dependency array: run when selectedProduct1Value changes

  // Use useEffect to update image2 when selectedProduct2Value changes
  useEffect(() => {
    if (selectedProduct2Value) {
      try {
        const product = JSON.parse(selectedProduct2Value);
        setImage2(product.image_url);
      } catch (error) {
        console.error("Failed to parse product 2 JSON:", error);
        setImage2(""); // Clear image if parsing fails
      }
    } else {
      setImage2(""); // Clear image if no product is selected
    }
  }, [selectedProduct2Value]); // Dependency array: run when selectedProduct2Value changes

  const handleCheck = async (data) => {
    const product1 = JSON.parse(data.product_1);
    const product2 = JSON.parse(data.product_2);

    const ingredientCategories = {
      RETINOID: [
        "Retinol",
        "Retinaldehyde",
        "Tretinoin",
        "Adapalene",
        "Retinyl Palmitate",
      ],
      AHA: ["Glycolic Acid", "Lactic Acid", "Mandelic Acid", "Citric Acid"],
      BHA: ["Salicylic Acid"],
      BENZOYL_PEROXIDE: ["Benzoyl Peroxide"],
      VITAMIN_C_LAA: ["L-Ascorbic Acid", "Ascorbic Acid"], // Be specific about L-AA
      VITAMIN_C_DERIVATIVES: [
        "Sodium Ascorbyl Phosphate",
        "Magnesium Ascorbyl Phosphate",
        "Ascorbyl Glucoside",
        "3-O-Ethyl Ascorbic Acid",
      ], // Generally safer with other actives
      NIACINAMIDE: ["Niacinamide", "Vitamin B3"],
    };
    const product1Ingredients = product1.ingredients;
    const product2Ingredients = product2.ingredients;

    const product1IngredientGroup = product1Ingredients.map((ingredient) => {
      if (ingredientCategories.RETINOID.includes(ingredient)) {
        return "RETINOID";
      } else if (ingredientCategories.AHA.includes(ingredient)) {
        return "AHA";
      } else if (ingredientCategories.BHA.includes(ingredient)) {
        return "BHA";
      } else if (ingredientCategories.BENZOYL_PEROXIDE.includes(ingredient)) {
        return "BENZOYL_PEROXIDE";
      } else if (ingredientCategories.VITAMIN_C_LAA.includes(ingredient)) {
        return "VITAMIN_C_LAA";
      } else if (
        ingredientCategories.VITAMIN_C_DERIVATIVES.includes(ingredient)
      ) {
        return "VITAMIN_C_DERIVATIVES";
      } else if (ingredientCategories.NIACINAMIDE.includes(ingredient)) {
        return "NIACINAMIDE";
      }
    });
        const product2IngredientGroup = product2Ingredients.map((ingredient) => {
      if (ingredientCategories.RETINOID.includes(ingredient)) {
        return "RETINOID";
      } else if (ingredientCategories.AHA.includes(ingredient)) {
        return "AHA";
      } else if (ingredientCategories.BHA.includes(ingredient)) {
        return "BHA";
      } else if (ingredientCategories.BENZOYL_PEROXIDE.includes(ingredient)) {
        return "BENZOYL_PEROXIDE";
      } else if (ingredientCategories.VITAMIN_C_LAA.includes(ingredient)) {
        return "VITAMIN_C_LAA";
      } else if (
        ingredientCategories.VITAMIN_C_DERIVATIVES.includes(ingredient)
      ) {
        return "VITAMIN_C_DERIVATIVES";
      } else if (ingredientCategories.NIACINAMIDE.includes(ingredient)) {
        return "NIACINAMIDE";
      }
    });
    const prod1 = product1IngredientGroup.filter((el) => el !== undefined);
    const prod2 = product2IngredientGroup.filter((el) => el !== undefined);
    console.log("Product 1:", prod1);
    console.log("Product 2:", prod2);

if (
  (prod1.includes("RETINOID") && prod2.includes("AHA")) ||
  (prod1.includes("AHA") && prod2.includes("RETINOID"))
) {
  data.message = "Combining RETINOID and AHA poses a HIGH risk. Both are potent exfoliants, and using them together can lead to increased irritation, dryness, and disruption of the skin barrier. It is advised to use them on alternate nights or at different times of the day. Introduce each ingredient slowly, and support your skin with barrier-repairing ingredients like ceramides and hyaluronic acid."
} else if (
  (prod1.includes("RETINOID") && prod2.includes("BHA")) ||
  (prod1.includes("BHA") && prod2.includes("RETINOID"))
) {
  data.message = "Combining RETINOID and BHA poses a HIGH risk. Similar to AHAs, both are strong exfoliants, which increases the risk of dryness, peeling, and irritation. It is recommended to use them on alternate nights or at different times of the day (e.g., BHA in the morning and Retinoid at night)."
} else if (
  (prod1.includes("RETINOID") && prod2.includes("BENZOYL_PEROXIDE")) ||
  (prod1.includes("BENZOYL_PEROXIDE") && prod2.includes("RETINOID"))
) {
  data.message =  "Combining RETINOID and BENZOYL_PEROXIDE poses a HIGH risk. Benzoyl peroxide can deactivate some forms of retinoids, and both ingredients are very drying and irritating to the skin. It is recommended to use them at different times of the day (e.g., benzoyl peroxide in the morning and retinoid at night) or on alternate days. If needed, consider using products specifically formulated to combine both safely."
} else if (
  (prod1.includes("VITAMIN_C_LAA") && prod2.includes("BENZOYL_PEROXIDE")) ||
  (prod1.includes("BENZOYL_PEROXIDE") && prod2.includes("VITAMIN_C_LAA"))
) {
  data.message = "Combining VITAMIN_C_LAA and BENZOYL_PEROXIDE poses a HIGH risk. Benzoyl peroxide oxidizes pure Vitamin C, rendering it ineffective. It is recommended to use them at different times of the day (e.g., Vitamin C in the morning and benzoyl peroxide at night) or on alternate days."
} else if (
  (prod1.includes("VITAMIN_C_LAA") && prod2.includes("AHA")) ||
  (prod1.includes("AHA") && prod2.includes("VITAMIN_C_LAA"))
) {
  return (
    "Combining VITAMIN_C_LAA and AHA poses a MEDIUM risk. Both are acidic and can cause irritation and over-exfoliation when combined, especially on sensitive skin. It is recommended to use them at different times of the day (Vitamin C in the morning and AHA at night) or on alternate days, and to use lower concentrations."
  );
} else if (
  (prod1.includes("VITAMIN_C_LAA") && prod2.includes("BHA")) ||
  (prod1.includes("BHA") && prod2.includes("VITAMIN_C_LAA"))
) {
  data.message =  "Combining VITAMIN_C_LAA and BHA poses a MEDIUM risk. Both are acidic and can cause irritation and over-exfoliation when combined, especially on sensitive skin. It is recommended to use them at different times of the day (Vitamin C in the morning and BHA at night) or on alternate days, and to use lower concentrations."
} else if (
  (prod1.includes("VITAMIN_C_LAA") && prod2.includes("NIACINAMIDE")) ||
  (prod1.includes("NIACINAMIDE") && prod2.includes("VITAMIN_C_LAA"))
) {
  data.message = "Combining VITAMIN_C_LAA and NIACINAMIDE poses a LOW risk. Older studies suggested incompatibility due to the formation of nicotinic acid causing flushing, but modern formulations generally prevent this. There is a potential for mild flushing in very sensitive individuals because of pH differences. Generally, it is safe to use them together. If you have sensitive skin, apply Niacinamide first, wait a few minutes, then apply Vitamin C, or use them at different times of the day."
}else{
  data.message = "These two ingredients are safe to use together. There is no known interaction or conflict between them, and combining them can often enhance skincare benefits. However, always patch test new products and monitor your skin’s response, especially if you have sensitive skin.";

}
try {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/check-result`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      product1,
      product2,
      message: data.message,
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const result = await response.json();
  console.log(result);
  navigate(`/products/check-ingredients/${result.id}`);
} catch (error) {
  console.error("Error submitting check result:", error);
  // Optionally show a user-friendly message here
}


};
//
return (
    <section className="container mx-auto p-4 md:p-8 lg:p-12 flex flex-col gap-4 bg-white shadow-lg rounded-xl max-w-4xl my-8">
      <h1 className="text-2xl font-bold mb-4 font-gray-800">Check Products</h1>
      <form
      id="check-form"
        className=" flex flex-col  md:relative md:h-[350px] justify-center md:gap-40 gap-4"
        onSubmit={handleSubmit(handleCheck)}
      >
        {/* Product 1 Selection */}
        <select
          name="product_1"
          id="product_1" // Good practice to have an id
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded" // Added some basic styling
          {...register("product_1", { required: true })} // Added required directly in register
        >
          <option value="">Select Product</option>
          {!isLoading &&
            data &&
            data.map(
              (
                product // Add check for data existence
              ) => (
                <option key={product.id} value={JSON.stringify(product)}>
                  {product.product_name}
                </option>
              )
            )}
        </select>
        {errors.product_1 && (
          <span className="text-red-500 text-sm">Product 1 is required</span>
        )}
        <div className="flex items-center justify-center border-absolute md:absolute md:right-40 md:top-0">
          {image1 ? (
            <div className="w-40 h-40 flex items-center justify-center  rounded-full bg-gray-100 text-gray-500">
              <img
              src={image1}
              alt="Product 1"
              className="w-40 h-40 object-contain border-absolute p-2 rounded-full overflow-hidden"
            /> 
            </div>// Adjusted sizing and alt
          ) : (
            <div className="w-40 h-40 flex items-center justify-center border rounded-full bg-gray-100 text-gray-500">
              No Product 1 Image
            </div>
          )}
        </div>

        {/* Product 2 Selection */}
        <select
          name="product_2"
          id="product_2" // Good practice to have an id
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded" // Added some basic styling
          {...register("product_2", { required: true })} // Added required directly in register
        >
          <option value="">Select Product</option>
          {!isLoading &&
            data &&
            data.map(
              (
                product // Add check for data existence
              ) => (
                <option key={product.id} value={JSON.stringify(product)}>
                  {product.product_name}
                </option>
              )
            )}
        </select>
        {errors.product_2 && (
          <span className="text-red-500 text-sm">Product 2 is required</span>
        )}
              <div className="flex items-center justify-center border-absolute md:absolute md:right-40 md:bottom-0">
          {image2 ? (
            <div className="w-40 h-40 flex items-center justify-center  rounded-full bg-gray-100 text-gray-500">
              <img
              src={image2}
              alt="Product 2"
              className="w-40 h-40 object-contain border-absolute p-2 rounded-full overflow-hidden"
            /> 
            </div>// Adjusted sizing and alt
          ) : (
            <div className="w-40 h-40 flex items-center justify-center border rounded-full bg-gray-100 text-gray-500">
              No Product 2 Image
            </div>
          )}
        </div>


        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          className="hidden"
          checked
          {...register("checkbox")}
        />

      </form>
         <div className="flex justify-center items-center">
          <button
          type="submit"
          form = "check-form"
          className="text-white bg-blue-700 mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full md:w-1/3 text-center"
        >
          Check
        </button>
         </div>
    </section>
  );

};


export default CheckProducts;
