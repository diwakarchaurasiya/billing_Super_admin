import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaTachometerAlt, FaGem, FaTable, FaRocketchat, FaBars, FaTimes, FaAd, FaEdit, FaUser } from "react-icons/fa";
import Dashboard from "./pages/Dashboard";
import { FaPersonRifle, FaShop, FaShopLock } from "react-icons/fa6";
import AddShops from "./pages/AddShops";
import RegisteredShops from "./pages/RegisteredShops";
import EditShop from "./pages/EditShop";
import Me from "./pages/Me";

const BillingApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-primary h-screen text-white fixed transition-all duration-300 overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && (
            <h1 className="text-2xl font-bold">Elite</h1>
          )}
          <button onClick={toggleSidebar} className="text-secondary text-2xl">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-secondary flex items-center transition duration-100">
              <Link to="/" className="flex items-center">
                <FaTachometerAlt className="text-2xl" />
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </Link>
            </li>
            <li className="p-4 hover:bg-secondary flex items-center">
              <Link to="/add-shop" className="flex items-center">
                <FaShopLock className="text-2xl" />
                {isSidebarOpen && <span className="ml-3">Add Shop</span>}
              </Link>
            </li>
            <li className="p-4 hover:bg-secondary flex items-center">
              <Link to="/shops" className="flex items-center">
                <FaShop className="text-2xl" />
                {isSidebarOpen && <span className="ml-3">Shops</span>}
              </Link>
            </li>
            <li className="p-4 hover:bg-secondary flex items-center">
              <Link to="/me" className="flex items-center">
                <FaUser className="text-2xl" />
                {isSidebarOpen && <span className="ml-3">Me</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-16"} transition-margin duration-300`}>
        <div className="bg-primary text-white p-4">
          <h1 className="text-xl font-semibold">Elite Softwares</h1>
        </div>
        <div className="p-6 ">
          {/* Placeholder for page content */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-shop" element={<AddShops />} />
            <Route path="/shops" element={<RegisteredShops />} />
            <Route path='/edit-shop/:id' element={<EditShop />} />
            <Route path='/me' element={<Me />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default BillingApp;
