import React from "react";

const Me = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-4xl mx-auto">
        {/* Company Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQGjS5aL8wInBQ/company-logo_100_100/company-logo_100_100/0/1728667945266/elite_software_solution_logo?e=1741824000&v=beta&t=7Z4615Q3G-D7Dtesc0NSo9tYQShGq2_92F19JXH4_4I" // Replace with the actual path to your company image
            alt="Company Logo"
            className="w-32"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-3xl font-bold my-12 text-center text-secondary">
          "Innovation and Excellence in Every Step"
        </h1>

        {/* Company Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#15283C]">About Our Company</h2>
          <p className="text-gray-700">
            ACME Global is a leading provider of inventory management solutions, offering a suite of
            products that streamline business operations. Our mission is to empower businesses with
            technology that enhances efficiency, accuracy, and growth.
          </p>
        </div>

        {/* Registration Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-[#15283C]">Registration Information</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Company Name:</strong> ACME Global Pvt. Ltd.
            </li>
            <li>
              <strong>Registration Number:</strong> 12345678
            </li>
            <li>
              <strong>Established:</strong> 2010
            </li>
            <li>
              <strong>Headquarters:</strong> 789 Innovation Park, Tech City, Country
            </li>
            <li>
              <strong>Contact:</strong> info@acmeglobal.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Me;
