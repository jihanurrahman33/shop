import { notFound } from "next/navigation";
import { productService } from "@/services/productService";
import { ProductDetailView } from "@/components/product/ProductDetailView";

export function generateStaticParams() {
  return productService.getAll().map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productService.getById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
