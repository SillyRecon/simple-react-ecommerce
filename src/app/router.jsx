import {createBrowserRouter} from 'react-router-dom';
//Import the layouts
import RootLayout from './layout/RootLayout';
import AccountLayout from './layout/AccountLayout'; 
import AdminLayout from './layout/AdminLayout';

//Import the pages
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import SearchPage from '../pages/SearchPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';

//Import account pages
import OrdersPage from '../pages/account/OrdersPage';
import OrderDetailPage from '../pages/account/OrderDetailPage';

//Import admin pages
import AdminHomePage from '../pages/admin/AdminHomePage';
import AdminProductsPage from '../pages/admin/AdminProductsPage';
import AdminCreateProductPage from '../pages/admin/AdminCreateProductPage';
import AdminOrdersPage from '../pages/admin/AdminOrdersPage';
import AdminEditProductPage from '../pages/admin/AdminEditProductPage';
import AdminOrderDetailPage from '../pages/admin/AdminOrderDetailPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            //General routes
            {index: true, element: <HomePage />},
            {path: "c/:categorySlug", element: <CategoryPage />},
            {path: "p/:productSlug", element: <ProductPage />},
            {path: "search", element: <SearchPage />},
            {path: "cart", element: <CartPage />},
            {path: "checkout", element: <CheckoutPage />},
            {path: "order/:orderId", element: <OrderConfirmationPage />},
            {path: "login", element: <LoginPage />},
            //Account routes
            {   
                path: "account", 
                element: <AccountLayout />,
                children: [
                    {path: "orders", element: <OrdersPage />},
                    {path: "orders/:orderId", element: <OrderDetailPage />}
                ],
            },
            //Admin routes
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    {index: true, element: <AdminHomePage />},
                    {path: "products", element: <AdminProductsPage />},
                    {path: "products/create", element: <AdminCreateProductPage />},
                    {path: "orders", element: <AdminOrdersPage />},
                    {path: "products/:productId/edit", element: <AdminEditProductPage />},
                    {path: "orders/:orderId", element: <AdminOrderDetailPage />}
                ]
            }
        ]
    }
]);