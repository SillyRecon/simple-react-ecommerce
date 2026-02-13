import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { products, categories } from '../features/catalog/mockData';
import ProductGrid from '../features/catalog/components/ProductGrid';

export default function CategoryPage() {
    const { categoryId } = useParams();
    // Use useMemo to efficiently find the category and filter products based on the category ID from the URL parameters.
    const category = useMemo(() => categories.find(cat => cat.id === categoryId), [categoryId]);
    const categoryProducts = useMemo(() => products.filter(prod => prod.categoryId === categoryId), [categoryId]);
    // If the category is not found, display a message to the user.
    if (!category) {
        return <div className="text-center text-secondary">Category not found.</div>;
    }
    // Main layout for the category page, including a header, filters sidebar, product grid, and pagination controls.
    return (
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Category Header</h5>
                    <div className="text-secondary">{category ? category.name : category.slug}</div>
                </div>
            </div>

            <div className="row g-3">
                <aside className="col-12 col-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Filters</h5>
                            <div className="text-secondary">Filter options will go here.</div>
                        </div>
                    </div>
                </aside>

                <section className="col-12 col-lg-9">
                    <ProductGrid products={categoryProducts} />
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Pagination</h5>
                            <div className="text-secondary">Pagination controls will go here.</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}