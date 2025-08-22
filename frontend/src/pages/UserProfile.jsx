import React, { useState } from "react";
import { Edit, Lock, Store, Save } from "lucide-react";

export default function UserProfile() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "+91 9876543210",
    role: "Store Manager",
    stores: ["Store A", "Store B", "Store C"],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-0 max-w-4xl mx-auto">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl  shadow-md p-8">
        <div className="flex items-center gap-6 border-b pb-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-600">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{formData.name}</h2>
            <p className="text-gray-500">{formData.role}</p>
            <p className="text-gray-400 text-sm">{formData.email}</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            {isEditing ? <Save size={18} /> : <Edit size={18} />}
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 text-sm">Name</label>
            <input
              type="text"
              name="name"
              disabled={!isEditing}
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              name="email"
              disabled={!isEditing}
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Mobile</label>
            <input
              type="text"
              name="mobile"
              disabled={!isEditing}
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Role</label>
            <input
              type="text"
              name="role"
              disabled={!isEditing}
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Stores Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Store size={18} className="text-green-600" /> Assigned Stores
          </h3>
          <ul className="space-y-2">
            {formData.stores.map((store, index) => (
              <li
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700"
              >
                {store}
              </li>
            ))}
          </ul>
        </div>

        {/* Change Password */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Lock size={18} className="text-red-600" /> Change Password
          </h3>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
          <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
