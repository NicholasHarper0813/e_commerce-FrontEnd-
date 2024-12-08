import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSigup from "./Pages/LoginSigup";
import Footer from "./Components/Footer/Footer";
import menbanner from "./Components/Asset/banner_mens.png";
import womenbanner from "./Components/Asset/banner_women.png";
import kidbanner from "./Components/Asset/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={menbanner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womenbanner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidbanner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSigup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
