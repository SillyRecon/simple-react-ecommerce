import { useParams } from "react-router-dom";

export default function AdminEditProductPage() {
    const { productId } = useParams();

    return (
        <div>
            <h1>Edit Product</h1>
            <p>Editing product with ID: {productId}</p>
            <p>Product edit form will be displayed here.</p>
        </div>
    );  
}