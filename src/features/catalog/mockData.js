//Mock category data for testing and development purposes.
export const categories = [
    {id: 1, title: "Electronics", slug: "electronics"},
    {id: 2, title: "Books", slug: "books"},
    {id: 3, title: "Clothing", slug: "clothing"},
    {id: 4, title: "Home & Kitchen", slug: "home-kitchen"},
    {id: 5, title: "Sports & Outdoors", slug: "sports-outdoors"},
];
//Mock product data for testing and development purposes.
export const products = [
    {id: 1, title: "Smartphone", categoryId: 1, priceCents: 69900, description: "A high-end smartphone with a sleek design.", imageUrl: "https://via.placeholder.com/150"},
    {id: 2, title: "Laptop", categoryId: 1, priceCents: 99900, description: "A powerful laptop for work and play.", imageUrl: "https://via.placeholder.com/150"},
    {id: 3, title: "Novel", categoryId: 2, priceCents: 1999, description: "An engaging novel by a bestselling author.", imageUrl: "https://via.placeholder.com/150"},
    {id: 4, title: "T-Shirt", categoryId: 3, priceCents: 1999, description: "A comfortable cotton t-shirt in various sizes.", imageUrl: "https://via.placeholder.com/150"},
    {id: 5, title: "Blender", categoryId: 4, priceCents: 4999, description: "A versatile blender for smoothies and more.", imageUrl: "https://via.placeholder.com/150"},
    {id: 6, title: "Yoga Mat", categoryId: 5, priceCents: 2999, description: "A non-slip yoga mat for all your workout needs.", imageUrl: "https://via.placeholder.com/150"},
    {id: 7, title: "Headphones", categoryId: 1, priceCents: 19900, description: "Noise-cancelling headphones for immersive sound.", imageUrl: "https://via.placeholder.com/150"},
    {id: 8, title: "E-Reader", categoryId: 1, priceCents: 12900, description: "A lightweight e-reader with a high-resolution display.", imageUrl: "https://via.placeholder.com/150"},
    {id: 9, title: "Cookbook", categoryId: 2, priceCents: 2499, description: "A cookbook filled with delicious recipes.", imageUrl: "https://via.placeholder.com/150"},
    {id: 10, title: "Jeans", categoryId: 3, priceCents: 3999, description: "Stylish and comfortable jeans for everyday wear.", imageUrl: "https://via.placeholder.com/150"},
];
//Utility function to format price from cents to a readable currency format.
export function formatMoneyFromCents(cents, currency = "USD", locale = "en-US") {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(cents / 100);
}