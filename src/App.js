import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductList from "./pages/product-list";
import Register from "./pages/register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList/>}/>
        <Route path="product/:id" element={<Product />} />
        <Route path="auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
