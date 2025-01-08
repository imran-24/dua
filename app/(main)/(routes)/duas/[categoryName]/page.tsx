import React from "react";

// import {
//   getCategoriesWithSubCategories,
//   getDuasByCategoryId,
// } from "@/actions/queries";

const DuaPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ cat: string }>;
}) => {
  // const categories = getCategoriesWithSubCategories();
  // const categoryId = await searchParams; // Resolve the promise

  console.log(searchParams);

  // const duas = getDuasByCategoryId(categoryId.cat);

  // console.log(categories, duas);

  return (
    <div className='w-full grid grid-cols-8 gap-x-4'>
      {/* <Suspense>
        <DuaList duas={duas} categories={categories}  />
        <Settings />
      </Suspense> */}
      Hi there
    </div>
  );
};

export default DuaPage;


