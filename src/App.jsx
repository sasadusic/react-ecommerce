import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from './pages/Home'
import Bucket from './pages/Bucket'
import Profile from './pages/Profile'
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <main className='main' id='main'>
        <Navbar />
        <div className="hero">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/bucket' element={<Bucket />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />

          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
