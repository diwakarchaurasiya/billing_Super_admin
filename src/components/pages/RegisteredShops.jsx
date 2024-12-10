import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisteredShops = () => {
  // State for the registered shops
  const [shops, setShops] = useState([
    {
      id: 1,
      shopName: "FreshMart",
      gstNumber: "29ABCDE1234F1Z5",
      category: "Grocery",
      address: "123 Main Street, City",
      ownerName: "John Doe",
      subscriptionFees: "1000",
    },
    {
      id: 2,
      shopName: "ElectroHub",
      gstNumber: "07XYZPQ5678L1Z7",
      category: "Electronics",
      address: "456 Elm Street, Town",
      ownerName: "Jane Smith",
      subscriptionFees: "1500",
      },
      {
        id: 1,
        shopName: "FreshMart",
        gstNumber: "29ABCDE1234F1Z5",
        category: "Grocery",
        address: "123 Main Street, City",
        ownerName: "John Doe",
        subscriptionFees: "1000",
      },
      {
        id: 2,
        shopName: "ElectroHub",
        gstNumber: "07XYZPQ5678L1Z7",
        category: "Electronics",
        address: "456 Elm Street, Town",
        ownerName: "Jane Smith",
        subscriptionFees: "1500",
      }, {
        id: 1,
        shopName: "FreshMart",
        gstNumber: "29ABCDE1234F1Z5",
        category: "Grocery",
        address: "123 Main Street, City",
        ownerName: "John Doe",
        subscriptionFees: "1000",
      },
      {
        id: 2,
        shopName: "ElectroHub",
        gstNumber: "07XYZPQ5678L1Z7",
        category: "Electronics",
        address: "456 Elm Street, Town",
        ownerName: "Jane Smith",
        subscriptionFees: "1500",
      },
  ]);

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#15283C]">Registered Shops</h1>


      {/* Shops Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-[#15283C]">Shop List</h2>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-[#15283C] text-white">
              <th className="p-2 border">Shop Name</th>
              <th className="p-2 border">GST Number</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Owner</th>
              <th className="p-2 border">Subscription Fees</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shops.length > 0 ? (
              shops.map((shop) => (
                <tr key={shop.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{shop.shopName}</td>
                  <td className="p-2 border">{shop.gstNumber}</td>
                  <td className="p-2 border">{shop.category}</td>
                  <td className="p-2 border">{shop.address}</td>
                  <td className="p-2 border">{shop.ownerName}</td>
                  <td className="p-2 border">{`₹ ${shop.subscriptionFees}`}</td>
                      <td className="p-2 border">
                          <Link to={`/edit-shop/${shop.id}`}
                          className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary mr-2 transition duration-100"
                        >
                          Edit
                        </Link>
                    <Link
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-secondary transition duration-100"
                    >
                      Remove
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  No shops found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredShops;
