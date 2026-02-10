import { NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <NavLink to="/admin/products">Manage Inventory</NavLink>
                <NavLink to="/admin/orders">Customer Orders</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}