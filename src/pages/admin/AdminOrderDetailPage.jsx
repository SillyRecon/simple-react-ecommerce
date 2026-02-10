import { useParams } from "react-router-dom";

export default function AdminOrderDetailPage() {
    const { orderId } = useParams();

    return (
        <div>
            <h1>Admin Order Detail</h1>
            <p>Details for order ID: {orderId} will be displayed here.</p>
        </div>
    );  
}   