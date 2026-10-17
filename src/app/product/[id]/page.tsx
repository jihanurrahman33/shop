import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailView } from "@/components/product/ProductDetailView";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
