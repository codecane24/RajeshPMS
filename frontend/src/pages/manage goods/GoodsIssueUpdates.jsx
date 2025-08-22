import React, { useState } from "react";
import { MoreVertical,PackageMinus } from "lucide-react";
import GenerateChallan from "../../popups/GenerateChallan";

export default function GoodsIssueUpdates() {
  const [store, setStore] = useState("");
  const [challanNo, setChallanNo] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const goodsIssueData = [
    {
      itemName:"wires",
     itemQyt:"2300",
      issueQty:"200",
      AddedQty:"20",
      
      
    },
    {
     itemName:"wires",
     itemQyt:"2300",
      issueQty:"200",
      AddedQty:"20",
    },
    {
   itemName:"wires",
     itemQyt:"2300",
      issueQty:"200",
      AddedQty:"20",
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
        <PackageMinus className="w-6 h-6 text-red-600" />
        GOODS ISSUE
      </h1>

  {/* Search bar and button all in one line */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
  {/* Left side - inputs and search btn */}
  <div className="flex flex-wrap items-center gap-4">
    <input
      type="text"
      placeholder="Item Name"
      value={store}
      onChange={(e) => setStore(e.target.value)}
      className="border p-1 rounded-xl w-48 sm:w-56 text-start pl-3"
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
    Create Challan
  </button>
</div>


      {/* Table */}
      <div className="overflow-x-auto bg-white box-shadow-2 rounded-xl">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr>
              <th className="p-3 border">Item Name</th>
              <th className="p-3 border">Item Qyt</th>
              <th className="p-3 border">Issue Quntity</th>
          <th className="p-3 border">Added Quntity</th>
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
                <td className="p-3 border">{row.itemName}</td>
                <td className="p-3 border">{row.itemQyt}</td>
                <td className="p-3 border">{row.issueQty}</td>


                <td className="p-3 border"> {row.AddedQty}</td>
 
                
            
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
                       Add
                      </button>
                  
                      <button
                        onClick={() => alert(`Delete ${row.challanNo}`)}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
                      >
                      Remove
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
