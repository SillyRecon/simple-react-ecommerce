import { Link } from "react-router-dom";
import { formatMoneyFromCents } from "../mockData";

//Product card component to display product information in a card format. Used in the product listing and search results.
export default function ProductCard({ product }) {
    return (
        <div className="card h-100 shadow-sm">
            <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                <div className="ratio ratio-1x1 bg-light">
                    <img    
                        src={product.image} 
                        className="w-100 h-100 object-fit-cover" 
                        alt={product.title}
                        loading="lazy"
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-1">{product.title}</h5>
                    <div className="text-secondary">{formatMoneyFromCents(product.price)}</div>
                </div>
            </Link>
        </div>
    );
}