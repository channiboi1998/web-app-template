import { ProductListTable } from "@/features/product/components/product-list-table";

export default function Products() {
  return (
    <main className="flex-1 flex flex-col gap-2">
      <h1 className="text-2xl mx-auto">Applesung Product List</h1>
      <ProductListTable />
    </main>
  );
}
