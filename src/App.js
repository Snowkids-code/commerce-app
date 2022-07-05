import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./pages/product-list";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop">
          <Route index element={<ProductList />} />
          <Route path=":productID" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
