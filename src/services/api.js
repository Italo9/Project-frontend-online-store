export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await request.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categories = await request.json();
  return categories;
}

export async function getProductDetails(productId) {
  const request = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const products = await request.json();
  return products;
}
