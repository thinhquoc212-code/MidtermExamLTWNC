import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} /> {/*Trang chủ*/}
          {/* Thêm các route khác nếu cần */}    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
