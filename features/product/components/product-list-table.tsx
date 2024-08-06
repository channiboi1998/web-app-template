"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProduct } from "../hooks/use-product";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

const TableHeadComponent = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Color</TableHead>
        <TableHead>Capacity</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Year</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};

type TableBodyComponentProps = {
  products: Product[];
};
const TableBodyComponent = ({ products }: TableBodyComponentProps) => {
  return (
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.data?.color}</TableCell>
          <TableCell>{product.data?.capacity}</TableCell>
          <TableCell>{product.data?.price}</TableCell>
          <TableCell>{product.data?.year}</TableCell>
          <TableCell className="flex gap-2">
            <Button>View</Button>
            <Button variant="secondary">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export const ProductListTable = () => {
  const { data: products, isPending, isError } = useProduct();

  if (isPending) {
    return <p>loading</p>;
  }

  if (isError) {
    return <p>theres an error</p>;
  }

  if (products) {
    return (
      <Table>
        <TableHeadComponent />
        <TableBodyComponent products={products} />
      </Table>
    );
  }

  return null;
};
