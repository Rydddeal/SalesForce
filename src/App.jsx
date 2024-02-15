import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from  './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Product from './components/Product/Product'
import ProductDetail from './components/Product/ProductDetail'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import './Data.jsx'
import './App.css'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/Checkout' element={<Checkout />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}








export default App
