import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function StoreManagerPage() {
  const [managers] = useState([
    { storeId: "ST-101", managerName: "John Doe", status: "Active" },
    { storeId: "ST-102", managerName: "Jane Smith", status: "Inactive" },
    { storeId: "ST-103", managerName: "Robert Brown", status: "Active" },
  ]);

  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  return (
    <div className="p-4 bg-white box-shadow-1 rounded-md">
      {/* Header Row */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <h1 className="text-2xl ">STORE MANAGER</h1>
        <div className="flex flex-wrap gap-3">
          <button className="bg-[#242424] text-sm text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap">
            Find Manager
          </button>
          <button className="bg-[#005AAB] text-sm text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap">
            Allot Manager
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto b box-shadow-2 rounded-lg relative">
        <table className="min-w-full border  text-sm">
          <thead className="">
            <tr>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Manager Name</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager, index) => (
              <tr
                key={index}
                className={`text-center hover:bg-gray-50 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <td className="p-3 border">{manager.storeId}</td>
                <td className="p-3 border">{manager.managerName}</td>
                <td className="p-3 border">{manager.status}</td>
                <td className="p-3 border relative">
                  {/* Three dots button */}
                  <button
                    onClick={() => toggleMenu(index)}
                    className="p-1 rounded hover:bg-gray-200"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* Dropdown Menu */}
                  {menuOpen === index && (
                    <div className="absolute right-4 mt-2 w-28 bg-white border rounded shadow-md z-10">
                      <button
                        onClick={() => alert("Edit clicked")}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert("Delete clicked")}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
