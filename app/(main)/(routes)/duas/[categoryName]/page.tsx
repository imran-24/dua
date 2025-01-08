import React, { Suspense } from "react";

import {
  getCategoriesWithSubCategories,
  getDuasByCategoryId,
} from "@/actions/queries";
import DuaList from "../_components/dua/dualist";
import Settings from "@/components/settings/settings";

const DuaPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ cat: string }>;
}) => {

  const categories = await  getCategoriesWithSubCategories();
  const categoryId = await searchParams; // Resolve the promise
  const duas = await getDuasByCategoryId(categoryId.cat);

  return (
    <div className='w-full grid grid-cols-8 gap-x-4'>
      <Suspense >
        <DuaList duas={duas} categories={categories}  />
        <Settings />
      </Suspense>
    </div>
  );
};

export default DuaPage;


