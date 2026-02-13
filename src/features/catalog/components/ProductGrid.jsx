import ProductCard from "./ProductCard";

//Product grid component to display a list of products in a responsive grid layout. Used in the product listing and search results.
export default function ProductGrid({ products }) {
    if(!products || products.length === 0) {
        return <div className="text-center text-secondary">No products found.</div>;
    }

    return (
        <div className="row g-3">
            {products.map(product => (
                <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                    <ProductCard product={product} />
                </div>
            ))} 
        </div>
    );
}