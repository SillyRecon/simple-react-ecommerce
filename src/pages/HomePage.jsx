import { Link } from 'react-router-dom';
import ProductGrid from "../features/catalog/components/ProductGrid";
import { categories, products } from '../features/catalog/mockData';

export default function HomePage() {

    const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

    return (
        <div>
            <div className="row g-3">
                <div className="col-12 col-lg-6">
                    <div className="card-body">
                        <h5 className="card-title">Welcome to our store!</h5>
                        <p className="text-secondary mb-1">Discover our wide range of products and enjoy shopping with us.</p>
                        <p className="text-secondary mb-0">Shop Now</p>
                    </div>
                </div>
            </div>
        
            <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Store Departments</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {categories.slice(0, 4).map((category) => (
                                <Link key={category.id} to={`/c/${category.slug}`} className="btn btn-outline-secondary btn-sm">
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            
            <h2 className="mb-3">Featured Products</h2>
            <ProductGrid products={featuredProducts} />
        </div>
    );
}