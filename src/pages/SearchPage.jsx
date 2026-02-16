import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../features/catalog/components/ProductCard";
import { products } from "../features/catalog/mockData";
import ProductGrid from "../features/catalog/components/ProductGrid";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = (searchParams.get("q") || "").trim().toLocaleLowerCase();

    const results = useMemo(() => {
        if (!query) return [];
        return products.filter((p) => p.title.toLocaleLowerCase().includes(query));
    }, [query]);

    return (
        <div>
            
            <div className="card mb-3">
                <div className="card-body d-flex flex-column flex-md-row gap-2 align-items-md-center justify-content-between">
                    <div>
                        <h5 className="card-title mb-1">Search Results</h5>
                        <div className="text-secondary">Showing results for: <strong>{query || "All Products"}</strong></div>
                    </div>
                    <div className="text-secondary">{results.length} {results.length === 1 ? "result" : "results"}</div>
                </div>
            </div>
            <h5 className="mb-3">Products</h5>
            <ProductGrid products={results} />

            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Pagination</h5>
                    <div className="text-secondary">(placeholder)</div>
                </div>
            </div>

        </div>
    );
}