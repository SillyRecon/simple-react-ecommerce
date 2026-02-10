import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
    return (
        <div>
            <h2>My Account</h2>
            <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <NavLink to="/account/orders">My Orders</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}