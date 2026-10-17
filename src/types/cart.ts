export interface CartItem {
  id: string; // Composite unique key: productId-size-color
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

export interface OrderPricing {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}
