import { useParams } from "react-router-dom";

export default function ProductPage() {
    const { productId } = useParams();

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Details for product ID: {productId} will be displayed here.</p>
        </div>
    );
}