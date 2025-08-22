import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
export default function StoreHoldingsPage() {
  const [project, setProject] = useState("");
  const [store, setStore] = useState("");
  const [item, setItem] = useState("");
const [menuOpen, setMenuOpen] = useState(null);

const toggleMenu = (index) => {
  setMenuOpen(menuOpen === index ? null : index);
}
  const holdingsData = [
    {
      itemNo: "IT-001",
      description: "Cement Bag 50kg",
      quantity: 120,
      units: "Bags",
      projectCode: "PRJ-001",
      storeId: "ST-101",
    },
    {
      itemNo: "IT-002",
      description: "Steel Rod 12mm",
      quantity: 500,
      units: "Pieces",
      projectCode: "PRJ-002",
      storeId: "ST-102",
    },
    {
      itemNo: "IT-003",
      description: "Wood Plank",
      quantity: 50,
      units: "Pieces",
      projectCode: "PRJ-003",
      storeId: "ST-103",
    },
  ];

  const handleSearch = () => {
    console.log("Searching holdings:", { project, store, item });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      {/* Page Heading */}
      <h1 className="text-2xl  mb-6">STORE HOLDINGS</h1>

      {/* Search Bar Section */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <input
          type="text"
          placeholder="Store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <button
          onClick={handleSearch}
          className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto  box-shadow-2  rounded-lg">
        <table className="min-w-full border  text-sm">
          <thead className="">
            <tr>
              <th className="p-3 border">Item No.</th>
              <th className="p-3 border">Item Description</th>
              <th className="p-3 border">Quantity</th>
              <th className="p-3 border">Units</th>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

<tbody>
  {holdingsData.map((item, i) => (
    <tr
      key={i}
      className={`text-center hover:bg-gray-50 ${
        i % 2 === 0 ? "bg-gray-50" : ""
      }`}
    >
      <td className="p-3 border">{item.itemNo}</td>
      <td className="p-3 border">{item.description}</td>
      <td className="p-3 border">{item.quantity}</td>
      <td className="p-3 border">{item.units}</td>
      <td className="p-3 border">{item.projectCode}</td>
      <td className="p-3 border">{item.storeId}</td>
      <td className="p-3 border relative">
        {/* Three Dots Button */}
        <button
          onClick={() => toggleMenu(i)}
          className="p-1 rounded hover:bg-gray-200"
        >
          <MoreVertical size={18} />
        </button>

        {/* Dropdown Menu */}
        {menuOpen === i && (
          <div className="absolute right-4 mt-2 w-28 bg-white border rounded shadow-md z-10">
            <button
              onClick={() => alert(`Edit ${item.itemNo}`)}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => alert(`Delete ${item.itemNo}`)}
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
