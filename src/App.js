import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductList from "./pages/product-list";
import Register from "./pages/register";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
