import { NavLink, Outlet } from "react-router-dom";

function NavItem({ to, children }) {
    return (
        <li className="nav-item">
            <NavLink 
                to={to} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                {children}
            </NavLink>
        </li>
    );
}

export default function RootLayout() {
    return (
        <div className="container py-3">
            <div className="boarder rounded-4 bg-white shadow-sm overflow-hidden">
                <header className="boarder-bottom">
                    <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container-fluid">
                            <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
                                <span className="d-inline-flex align-items-center justify-content-center border rounded-cicle"
                                      style={{ width: 44, height: 44 }}
                                >
                                    Logo
                                </span>
                            </NavLink>
                            <button className="navbar-toggler" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#mainNav" 
                                    aria-controls="#mainNav" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mainNav">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <NavItem to="/">Home</NavItem>
                                    <NavItem to="/search">Search</NavItem>
                                    <NavItem to="/cart">Cart</NavItem>
                                    <NavItem to="/account/orders">My Account</NavItem>
                                    <NavItem to="/admin">Admin</NavItem>
                                </ul>
                                <div className="d-flex">
                                    <NavLink to="/login" className="btn btn-outline-primary">
                                        Login
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <main className="p-3">
                    <Outlet />
                </main>

                <footer className="border-top p-3 text-center text-muted">
                    <p>&copy; {new Date().getFullYear()} Simple React Ecommerce Website. </p>
                </footer>
            </div>
        </div>
    );
}