import {useParams} from 'react-router-dom';

export default function OrderDetailPage() {
    const { orderId } = useParams();

    return (
        <div>
            <h1>Order Detail</h1>
            <p>Details for order ID: {orderId} will be displayed here.</p>
        </div>
    );
}