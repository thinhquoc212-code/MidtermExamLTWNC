import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import pic from '../assets/importPicWebPack';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
function Homepage() {
  let activeStyle = {
    fontWeight: "bold"
  };
  return (
    <>
        <header>
            <ul class = "menu">
                <div class ="logo">
                    <img src={pic.logo} alt="Logo" />
                </div>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Trang chủ</NavLink></li>
                <li><NavLink to="/products" style={({ isActive }) => isActive ? activeStyle : undefined}>Giới thiệu</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>Thực đơn</NavLink></li>
                <li><NavLink to="/products" style={({ isActive }) => isActive ? activeStyle : undefined}>Tin tức</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>Liên hệ</NavLink></li>
                <li><NavLink to="/booking" style={({ isActive }) => isActive ? activeStyle : undefined}>Đặt bàn</NavLink></li>
            </ul>
        </header>

        <main>
            <div class ="picture">
                <div class = "left-pic">
                    <img src={pic.anhcafe1} alt="Right Picture 1" />
                </div>
                <div class = "right-pic">
                    <div class = "right-pic1">
                        <img src={pic.anhcafe2} alt="Right Picture 1" />
                    </div>
                    <div class = "right-pic2">
                        <img src={pic.anhcafe3} alt="Right Picture 2" />
                    </div>
                </div>
            </div>
            <Menu />

            <div class ="picture2">
                <div class = "left-pic2">
                    <img src={pic.caphechebien} alt="Left Picture 1" />
                </div>
                <div class = "right-pic2">
                    <img src={pic.cafehiennay} alt="Right Picture 1" />
                </div>
            </div>
            
            <div class = "context">
                <div class ="context1">
                    <h2>Chế biến cà phê</h2>
                    <p>
                        Cà phê sạch là cà phê nguyên chất không pha trộn thêm bất kỳ loại bột, phụ gia nào.
                    </p>
                </div>

                <div class ="context2">
                    <h2>Cà phê phổ biến ưa chuộng ở VN</h2>
                    <p>
                        Điểm danh 20 loại cà phê phổ biến được ưa chuộng tại Viện Nam.
                    </p>
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    )
}
export default Homepage