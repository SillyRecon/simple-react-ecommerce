import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <header style={{ padding: "1rem", backgroundColor: "#f0f0f0", borderBottom: "1px solid #ccc" }}>
                <nav>
                    <NavLink to="/" style={{ fontWeight: "bold" }}>Home</NavLink>
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                    <div style ={{ marginLeft: "auto", display: "flex", gap: "1rem" }} />
                        <NavLink to="/account/orders">My Orders</NavLink>
                        <NavLink to="/admin">Admin</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    <div/>
                </nav>
            </header>
            
            <main style={{ padding: "1rem" , flex: 1}}>
                <Outlet />
            </main>

            <footer style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
                <p>&copy; {new Date().getFullYear()} Simple React Ecommerce Website. </p>
            </footer>
        </div>
    );
}