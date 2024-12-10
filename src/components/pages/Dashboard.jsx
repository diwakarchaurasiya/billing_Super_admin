import React from "react";
import Card from "../Card";
import { FaUser, FaClock, FaDownload, FaComment, FaFacebook, FaTwitter, FaLinkedin, FaGooglePlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card icon={FaUser} title="Welcome" value="2500" color="text-secondary" />
        <Card icon={FaClock} title="Average Time" value="123.50" color="text-blue-500" />
        <Card icon={FaDownload} title="Collections" value="1,805" color="text-green-500" />
        <Card icon={FaComment} title="Comments" value="54" color="text-pink-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card icon={FaFacebook} title="Friends" value="35k" color="text-blue-600" />
        <Card icon={FaTwitter} title="Followers" value="584k" color="text-blue-400" />
        <Card icon={FaLinkedin} title="Contacts" value="758+" color="text-blue-700" />
        <Card icon={FaGooglePlus} title="Followers" value="450" color="text-red-600" />
      </div>
    </div>
  );
};

export default Dashboard;
