# Simple React ecommerce website.
## Version 0.0
### Planning :

#### Goals to complete at minimum:

- User can browse products, by categories or seach.
- User can view specific product details.
- User can add, remove or update number of products in a cart.
- User can complete an order through checkout, also have a paymentflow.
- User gets an order confirmation, can also view order history.
- Admin can have basic crude functions for now, since this is practice for Frontend work.

#### User exp

**User:**

- view products -> compare products -> buy products -> Track orders

**Admin:**

- add product ->manage inventory/prices -> Fulfill orders


Acceptance criteria:

- [ ] Add frim product page to cart.
- [ ] Persistent cart after refresh.
- [ ] Quanty can be added to or taken from the cart.
- [ ] Totals update correctly

**Minimum folder structure Version 0.0**

    src/
        app/
          /layouts
            - AccountLayout.jsx
            - AdminLayout.jsx
            - RootLayout.jsx
          router.jsx
        features/
          /catalog
            /components
              - ProductCard.jsx
          /cart
            - cartContext.jsx
        lib/
          - http.js
        pages/
          /account
            - OrderDetailPage.jsx
            - OrdersPage.jsx
          /admin
            - AdminCreateProductPage.jsx
            - AdminEditProdcutPage.jsx
            - AdminHomePage.jsx
            - AdminOrderDetailPage.jsx
            - AdminOrdersPage.jsx
            - AdminProductPage.jsx
          - CartPage.jsx
          - CategoryPage.jex
          - CheckoutPage.jsx
          - HomePage.jsx
          - LoginPage.jsx
          - OrderConfirmationPage.jsx
          - SearchPage.jsx
        styles/
          - index.css
        - App.css
        - App.jsx
        - main.jsx
### Wireframes for pages

#### Home Page
<img width="437" height="306" alt="HomePage-2026-02-10-1736" src="https://github.com/user-attachments/assets/ff95c6fc-38d6-4bd5-8919-909b53a34163" />

#### Category Page
<img width="439" height="306" alt="CategoryPage-2026-02-10-1736" src="https://github.com/user-attachments/assets/24e87b61-5772-4563-a628-aba9e261eef4" />

#### ProductDetail
<img width="441" height="406" alt="ProductDetailPage-2026-02-10-1736" src="https://github.com/user-attachments/assets/da55cf9b-f49e-4b48-b853-0e36fa6c2970" />



### Tech Stack
- React
- Node
- Docker

##### Getting Started

#### Prerequisites
- npm

#### Installation
```bash
npm install
npm run dev
```
***Author - Louis Hamilton 2026***
