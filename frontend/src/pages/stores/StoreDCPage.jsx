import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function StoreDCPage() {
  const [store, setStore] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  const storeDCData = [
    {
      projectCode: "PRJ-001",
      storeId: "ST-101",
      poNumber: "PO-1001",
      dcStatus: "Pending",
      expectedArrival: "2025-08-15",
      arrivalStatus: "Not Arrived",
    },
    {
      projectCode: "PRJ-002",
      storeId: "ST-102",
      poNumber: "PO-1002",
      dcStatus: "Approved",
      expectedArrival: "2025-08-16",
      arrivalStatus: "Arrived",
    },
    {
      projectCode: "PRJ-003",
      storeId: "ST-103",
      poNumber: "PO-1003",
      dcStatus: "Not Added",
      expectedArrival: "2025-08-18",
      arrivalStatus: "Not Arrived",
    },
  ];

  const getDCStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-[#FFDA8B]";
      case "Approved":
        return "bg-[#C7F4B2]";
      case "Not Added":
        return "bg-[#FF978B]";
      default:
        return "";
    }
  };

  const handleSearch = () => {
    console.log("Searching for store:", store);
  };

  return (
    <div className="p-4 bg-white rounded-md box-shaow-1">
      {/* Page Heading */}
      <h1 className="text-2xl  mb-6">STORE DC</h1>

      {/* Search */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="border text-sm p-2 rounded w-48 sm:w-56"
        />
        <button
          onClick={handleSearch}
          className="bg-[#005AAB] text-sm text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto  box-shadow-2 rounded-lg">
        <table className="min-w-full border  text-sm">
          <thead className="">
            <tr>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">PO Number</th>
              <th className="p-3 border">DC Status</th>
              <th className="p-3 border">Expected Arrival</th>
              <th className="p-3 border">Arrival Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {storeDCData.map((dc, index) => (
              <tr
                key={index}
                className={`text-center hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="p-3 border">{dc.projectCode}</td>
                <td className="p-3 border">{dc.storeId}</td>
                <td className="p-3 border">{dc.poNumber}</td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${getDCStatusClass(
                      dc.dcStatus
                    )}`}
                  >
                    {dc.dcStatus}
                  </span>
                </td>
                <td className="p-3 border">{dc.expectedArrival}</td>
                <td className="p-3 border">{dc.arrivalStatus}</td>
                <td className="p-3 border relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === index ? null : index)
                    }
                    className="p-2 rounded hover:bg-gray-200"
                  >
                    <MoreVertical size={18} />
                  </button>
                  {openMenu === index && (
                    <div className="absolute right-0 mt-1 bg-white border rounded shadow w-28 z-10">
                      <button
                        onClick={() => console.log("Edit", dc)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => console.log("Delete", dc)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
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
