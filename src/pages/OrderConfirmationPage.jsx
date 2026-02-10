import { useParams } from "react-router-dom";

export default function OrderConfirmationPage() {
    const { orderId } = useParams();

    return (
        <div>
            <h1>Order Confirmation</h1>
            <p>Thank you for your purchase! Your order ID is: {orderId}</p>
        </div>
    );
}