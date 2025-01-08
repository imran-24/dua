


import { Category } from "@/type";

export const getDuasByCategoryId = async (id: string) => {
  const response = await fetch(`https://dua-app-api.onrender.com/duas/${id}`);
  const data = await response.json();
  return data;

};

export const getCategories = async () => {
  const response = await fetch("https://dua-app-api.onrender.com/categories");
  const categories = await response.json();
  return categories;
};

export const getCategoriesWithSubCategories = async () => {
  try {
    const rows = await getCategories();

    const categoryWithSubCategory = await Promise.all(
      rows.map(async (row: Category) => ({
        ...row,
        subCategories: await getSubCategoriesById(row.cat_id),
      }))
    );

    return categoryWithSubCategory;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getSubCategoriesById = async (id: number) => {
    const response = await fetch(
      `https://dua-app-api.onrender.com/sub-categories/${id}`);
    const subcategories = await response.json();

    return subcategories;


};
