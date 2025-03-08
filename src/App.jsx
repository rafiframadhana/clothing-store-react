import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Products from './pages/products/Products.jsx';
import ProductDetails from './pages/product-details/ProductDetails.jsx';
import Account from './pages/account/Account.jsx';
import Cart from './pages/checkout/Cart.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import NotFound from './pages/extra/NotFound.jsx';
import Payment from './pages/checkout/Payment.jsx';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />  
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />


        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;