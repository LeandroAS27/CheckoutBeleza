import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import ConfirmPayment from './pages/ConfirmPayment'

//context
import { FetchProduct, ProductProvider } from './context/SearchContext'

function App() {

  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Bag/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/confirmPayment' element={<ConfirmPayment/>}/>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}

export default App
