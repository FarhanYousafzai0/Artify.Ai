import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import TryNowPage from './Pages/TryNowPage'
import PricingPage from './Pages/PricingPage'
import HelpCenterPage from './Pages/HelpCenterPage'
import GalleryPage from './Pages/GalleryPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/try-now' element={<TryNowPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/help' element={<HelpCenterPage />} />
          <Route path='/galery' element={<GalleryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
