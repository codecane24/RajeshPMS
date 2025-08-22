import React, { useState } from "react";
import { MoreVertical,FileText } from "lucide-react";
import GenerateChallan from "../../popups/GenerateChallan";

export default function Challan() {
  const [store, setStore] = useState("");
  const [challanNo, setChallanNo] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const goodsIssueData = [
    {
      challanNo: "CH-1001",
      deliveredTo: "Warehouse 1",
      status: "Approved",
      projectCode: "PRJ-001",
      storeId: "ST-101",
    },
    {
      challanNo: "CH-1002",
      deliveredTo: "Warehouse 2",
      status: "Pending",
      projectCode: "PRJ-002",
      storeId: "ST-102",
    },
    {
      challanNo: "CH-1003",
      deliveredTo: "Warehouse 3",
      status: "Approved",
      projectCode: "PRJ-003",
      storeId: "ST-103",
    },
  ];

  const handleSearch = () => {
    console.log("Search with:", { store, challanNo });
  };

  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded-md box-shadow-1">
   {/* Heading with Icon */}
      <h1 className="text-2xl mb-6 flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600" />
Challan
      </h1>
  {/* Search bar and button all in one line */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
  {/* Left side - inputs and search btn */}
  <div className="flex flex-wrap items-center gap-4">
    <input
      type="text"
      placeholder="Store"
      value={store}
      onChange={(e) => setStore(e.target.value)}
      className="border p-1 rounded-xl w-48 sm:w-56 text-start pl-3"
    />
    <input
      type="text"
      placeholder="Challan No."
      value={challanNo}
      onChange={(e) => setChallanNo(e.target.value)}
      className="border p-1 rounded-xl w-48 sm:w-56"
    />
    <button
      onClick={handleSearch}
      className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
    >
      Search
    </button>
  </div>

  {/* Right side - Create New Goods btn */}
  <button
    
    className="bg-[#005AAB] text-white px-4 py-2 rounded hover:bg-[#005AAB] whitespace-nowrap"
  >
    Create New 
  </button>
</div>

      {/* Table */}
      <div className="overflow-x-auto bg-white box-shadow-2 rounded-xl">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr>
              <th className="p-3 border">Challan No.</th>
              <th className="p-3 border">Delivered To</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {goodsIssueData.map((row, i) => (
              <tr
                key={i}
                className={`text-center hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="p-3 border">{row.challanNo}</td>
                <td className="p-3 border">{row.deliveredTo}</td>
        {/* ✅ Status column */}
      <td className="p-3 border">
        <span
          className={`px-3 py-1 rounded-full text-sm  ${
            row.status === "Pending"
              ? "bg-[#FFDA8B] text-black"
              : row.status === "Approved"
              ? "bg-[#C7F4B2] text-black"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {row.status}
        </span>
      </td>
                <td className="p-3 border">{row.projectCode}</td>
                <td className="p-3 border">{row.storeId}</td>
                <td className="p-3 border relative">
                  {/* Three Dots Button */}
                  <button
                    onClick={() => toggleMenu(i)}
                    className="p-1 rounded hover:bg-gray-200"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* Dropdown */}
                  {menuOpen === i && (
                    <div className="absolute right-4 mt-2 w-28 bg-white border rounded shadow-md z-10">
                            <button
                        onClick={() => setOpenModal("open")}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        Aproove
                      </button>
                      <button
                        onClick={() => alert(`Edit ${row.challanNo}`)}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert(`Delete ${row.challanNo}`)}
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
          {/* Conditionally render the different popups */}
                    {openModal === "open" && (
                      <GenerateChallan onClose={() => setOpenModal(null)} />
                    )}
    </div>
  );
}
