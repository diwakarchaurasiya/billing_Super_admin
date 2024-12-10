import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditShop = () => {
  const { id } = useParams();

  const [shop, setShop] = useState({
    shopName: "",
    gstNumber: "",
    category: "",
    address: "",
    ownerName: "",
    subscriptionFees: "",
  });

  useEffect(() => {
    // Fetch the shop data by ID (mock data for example)
    const shopsData = [
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
    ];

    const shopToEdit = shopsData.find((s) => s.id === parseInt(id));
    if (shopToEdit) {
      setShop(shopToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Shop:", shop);
    // Perform update logic here (e.g., API call)
    navigate("/shops");
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#15283C]">Edit Shop</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Shop Name</label>
          <input
            type="text"
            name="shopName"
            value={shop.shopName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={shop.gstNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={shop.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={shop.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={shop.ownerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Subscription Fees</label>
          <input
            type="number"
            name="subscriptionFees"
            value={shop.subscriptionFees}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditShop;
