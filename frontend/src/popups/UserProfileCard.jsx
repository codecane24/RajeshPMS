import React from "react";
import {
  Phone,
  Store,
  ShoppingBag,
  User,
  LogOut,
  UserCircle,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Correct import

export default function UserProfileCard({ user, image }) {
  return (
    <div
      className="w-80 bg-white shadow-xl rounded-2xl p-6 border 
                 border-gray-200 z-50 transition-shadow duration-300 
                 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative"
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative">
          <img
            src={image}
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-black shadow-md object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-1">
            {user.name}
          </h3>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-black" />
          <span>{user.mobile}</span>
        </div>
        <div className="flex items-center gap-2">
          <Store size={16} className="text-black" />
          <span>{user.store}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShoppingBag size={16} className="text-black" />
          <span>{user.storeCount} Stores</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Actions */}
      <div className="flex justify-between text-sm font-medium">
        <Link
          to="/user-profile" // ✅ navigates to /user-profile
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg 
                     text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <User size={16} /> View Profile
        </Link>

        <button
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg 
                     text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  );
}
