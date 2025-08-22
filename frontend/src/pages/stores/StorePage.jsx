import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function StorePage() {
  const [projectCode, setProjectCode] = useState("");
  const [storeId, setStoreId] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);

  const storesData = [
    {
      storeId: "ST-001",
      projectCode: "PR-101",
      company: "ABC Constructions",
      locations: "Ahmedabad, Surat",
      status: "Active",
    },
    {
      storeId: "ST-002",
      projectCode: "PR-102",
      company: "XYZ Infra",
      locations: "Vadodara, Rajkot",
      status: "Inactive",
    },
    {
      storeId: "ST-003",
      projectCode: "PR-103",
      company: "LMN Developers",
      locations: "Gandhinagar",
      status: "Active",
    },
  ];

  const handleSearch = () => {
    console.log("Searching for:", { projectCode, storeId });
  };

  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded-lg box-shadow-1">
      {/* Heading */}
      <h1 className="text-2xl mb-6">STORE</h1>

      {/* Search + Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-4 flex-grow">
          <input
            type="text"
            placeholder="Project Code"
            value={projectCode}
            onChange={(e) => setProjectCode(e.target.value)}
            className="border p-2 rounded w-48 sm:w-56"
          />
          <input
            type="text"
            placeholder="Store ID"
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
            className="border p-2 rounded w-48 sm:w-56"
          />
          <button
            onClick={handleSearch}
            className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
          >
            Search
          </button>

          <button className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap ml-auto">
            Create New Store
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap">
            Manage Store
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white box-shadow-2 rounded-xl">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Associated Company</th>
              <th className="p-3 border">Working Locations</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {storesData.map((store, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border">{store.storeId}</td>
                <td className="p-3 border">{store.projectCode}</td>
                <td className="p-3 border">{store.company}</td>
                <td className="p-3 border">{store.locations}</td>
                <td
                  className={`p-3 border font-semibold ${
                    store.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {store.status}
                </td>
                <td className="p-3 border relative">
                  {/* Three Dots Menu Button */}
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
                        onClick={() => alert(`Edit ${store.storeId}`)}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert(`Delete ${store.storeId}`)}
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
