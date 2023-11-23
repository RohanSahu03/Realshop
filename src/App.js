import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/productdetails/:pid' element={<ProductDetails />} exact />
          <Route path='/addToCart' element={<Cart />} exact />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
