import React, { useState } from "react";
import AddDispatchClearancePopup from "../popups/AddDispatchClearancePopup";
import ManageDCPopup from "../popups/ManageDCPopup";
import { MoreVertical } from "lucide-react"; // 3 dots icon
export default function DispatchPage() {
    const [openModal, setOpenModal] = useState(null);
      const [openMenuId, setOpenMenuId] = useState(null); // track which row is open
            const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id); // toggle only that row
      };
  const dispatchData = [
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
    {
      projectCode: "PRJ-004",
      storeId: "ST-104",
      poNumber: "PO-1004",
      dcStatus: "Pending",
      expectedArrival: "2025-08-20",
      arrivalStatus: "Arrived",
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

  return (
    <div className="p-4 bg-white rounded-md box-shadow-1 w-full">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h1 className="text-lg sm:text-2xl  ">DISPATCH CLEARANCE</h1>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setOpenModal("add")}
          className="bg-[#005AAB] text-xs sm:text-sm text-white px-3 sm:px-4 py-2 rounded-md"
        >
          Add Dispatch Clearance
        </button>

        <button
          onClick={() => setOpenModal("manage")}
          className="bg-[#242424] text-xs sm:text-sm text-white px-3 sm:px-4 py-2 rounded-md"
        >
          Manage DC by Store/Project
        </button>
      </div>

  
 
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md box-shadow-2 min-w-[700px]">
        <table className="min-w-full text-xs sm:text-sm">
          <thead className="sticky top-0 z-10">
            <tr>
              <th className="p-2 border">Project Code</th>
              <th className="p-2 border">Store ID</th>
              <th className="p-2 border">PO Number</th>
              <th className="p-2 border">DC Status</th>
              <th className="p-2 border">Expected Arrival</th>
              <th className="p-2 border">Arrival Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dispatchData.map((dc, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gray-50 transition-colors"
              >
                <td className="p-2 border">{dc.projectCode}</td>
                <td className="p-2 border">{dc.storeId}</td>
                <td className="p-2 border">{dc.poNumber}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-md text-[10px] sm:text-xs font-medium ${getDCStatusClass(
                      dc.dcStatus
                    )}`}
                  >
                    {dc.dcStatus}
                  </span>
                </td>
                <td className="p-2 border">{dc.expectedArrival}</td>
                <td className="p-2 border">{dc.arrivalStatus}</td>
                   {/* Actions cell */}
              <td className="p-3 border relative">
                <button
                  className="p-2 rounded hover:bg-gray-100"
                  onClick={() => toggleMenu(index)}
                >
                  <MoreVertical className="w-5 h-5" />
                </button>

                {openMenuId === index && (
                  <div className="absolute right-0 mt-0 rounded-xl  w-28 bg-white border  shadow-lg z-10">
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
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
      {openModal === "add" && (
        <AddDispatchClearancePopup onClose={() => setOpenModal(null)} />
      )}
      {openModal === "manage" && (
        <ManageDCPopup onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
