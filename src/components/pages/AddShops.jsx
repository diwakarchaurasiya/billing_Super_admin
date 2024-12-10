import React from "react";
import { useForm } from "react-hook-form";

const AddShops = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="outline-none  mx-auto p-6 bg-white rounded-md mt-5">
      <h2 className="outline-none text-2xl font-bold text-center mb-6">Register Shop</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="outline-none space-y-4">
        
        {/* Shop Name */}
        <div>
          <label className="outline-none block font-semibold mb-1">Shop Name:</label>
          <input
            type="text"
            {...register("shopName", { required: "Shop Name is required" })}
            className="outline-none w-full p-2 border rounded"
            placeholder="Enter shop name"
          />
          {errors.shopName && <p className="outline-none text-red-500 text-sm">{errors.shopName.message}</p>}
        </div>

        {/* GST Number */}
        <div>
          <label className="outline-none block font-semibold mb-1">GST Number:</label>
          <input
            type="text"
            {...register("gstNumber", {
              required: "GST Number is required",
              pattern: {
                value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
                message: "Invalid GST Number format",
              },
            })}
            className="outline-none w-full p-2 border rounded"
            placeholder="Enter GST number"
          />
          {errors.gstNumber && <p className="outline-none text-red-500 text-sm">{errors.gstNumber.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="outline-none block font-semibold mb-1">Category:</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="outline-none w-full p-2 border rounded"
          >
            <option value="">Please Select</option>
            <option value="Grocery">Grocery</option>
            <option value="Restaurant">Restaurant </option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Pharmacy">Pharmacy</option>
          </select>
          {errors.category && <p className="outline-none text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="outline-none block font-semibold mb-1">Address:</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="outline-none w-full p-2 border rounded"
            placeholder="Enter shop address"
          />
          {errors.address && <p className="outline-none text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* Owner Name */}
        <div>
          <label className="outline-none block font-semibold mb-1">Owner Name:</label>
          <input
            type="text"
            {...register("ownerName", { required: "Owner Name is required" })}
            className="outline-none w-full p-2 border rounded"
            placeholder="Enter owner's name"
          />
          {errors.ownerName && <p className="outline-none text-red-500 text-sm">{errors.ownerName.message}</p>}
        </div>

        {/* Subscription Fees */}
        <div>
          <label className="outline-none block font-semibold mb-1">Subscription Fees:(per month)</label>
          <input
            type="number"
            step="0.01"
            {...register("subscriptionFees", { required: "Subscription Fees are required" })}
            className="outline-none w-full p-2 border rounded"
            placeholder="Enter subscription fees"
          />
          {errors.subscriptionFees && <p className="outline-none text-red-500 text-sm">{errors.subscriptionFees.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="outline-none text-center">
          <button type="submit" className="outline-none bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition duration-100">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShops;
