import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./pages/product-list";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
