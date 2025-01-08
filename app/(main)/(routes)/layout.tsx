import Sidebar from "@/components/sidebar/sidebar";
import Navigation from "./duas/_components/navigation";
import { getCategoriesWithSubCategories } from "@/actions/queries";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { CategoryList } from "./duas/_components/category/category-list";

// export const revalidate = false; // Ensures the page is statically generated

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getCategoriesWithSubCategories();

  console.log(data)
  return (
    <Sidebar>
      <div className='h-full'>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <div className='grid grid-cols-12 gap-x-4 h-full'>
            <div
              className='hidden
              lg:block 
              lg:col-span-3'
            >
              <CategoryList categories={data} />
            </div>
            <div className='col-span-12 lg:col-span-9'>{children}</div>
          </div>
        </Suspense>
      </div>
    </Sidebar>
  );
}
