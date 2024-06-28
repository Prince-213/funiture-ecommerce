interface CartItem extends Products {
  count: number;
}

export const getTotalPrice = ({ products }: { products: CartItem[] }) => {
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

  return totalPrice;
};
