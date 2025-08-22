
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeliveryChallan from "./DeliveryChallan";
import DeliveryChallanTwo from "./DeliveryChallanTwo";

export default function GenerateChallan({ onClose }) {
      const [openModal, setOpenModal] = useState(null);
  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Backdrop with fade */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Popup with scale + fade */}
        <motion.div
          className="relative bg-white rounded-lg box-shadow-2 w-[95%] max-w-5xl p-6 z-10"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-3 font-semibold text-gray-900 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>

      

          {/* Row 1: Dropdown + Button */}
          <div className="flex flex-wrap gap-4 mb-4 justify-between">
            <select className="border rounded px-3 py-2 w-60">
              <option>Select item </option>
              <option>PO123</option>
              <option>PO456</option>
            </select>
     
          </div>

          {/* Row 2: Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Item No.</th>
                  <th className="border p-2">Item Description</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Units</th>
                  <th className="border p-2">Project Code</th>
                  
                  <th className="border p-2">Partial / Full</th>
                  <th className="border p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Sample Item</td>
                  <td className="border p-2">10</td>
                  <td className="border p-2">pcs</td>
                  <td className="border p-2">PR001</td>
                  <td className="border p-2">ST123</td>
                  <td className="border p-2">
                    <input
                      type="text"
                      placeholder="Partial/Full"
                      className="border px-2 py-1 rounded w-24"
                    />
                           <input 
  type="checkbox" 
  className="ml-2 w-5 h-5  cursor-pointer"
/>
                  </td>
                  <td className="border p-2">100</td>
                </tr>
                    <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Sample Item</td>
                  <td className="border p-2">10</td>
                  <td className="border p-2">pcs</td>
                  <td className="border p-2">PR001</td>
                  <td className="border p-2">ST123</td>
                  <td className="border p-2">
                    <input
                      type="text"
                      placeholder="Partial/Full"
                      className="border px-2 py-1 rounded w-24"
                    />
                             <input 
  type="checkbox" 
  className="ml-2 w-5 h-5  cursor-pointer"
/>
                  </td>
                  <td className="border p-2">100</td>
                </tr>
                    <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Sample Item</td>
                  <td className="border p-2">10</td>
                  <td className="border p-2">pcs</td>
                  <td className="border p-2">PR001</td>
                  <td className="border p-2">ST123</td>
                  <td className="border p-2">
                    <input
                      type="text"
                      placeholder="Partial/Full"
                      className="border px-2 py-1 rounded w-24"
                    />
            <input 
  type="checkbox" 
  className="ml-2 w-5 h-5  cursor-pointer"
/>

                  </td>
                  <td className="border p-2">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Row 3: Buttons aligned right */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="px-4 py-2 border text-sm bg-gray-800 text-white rounded hover:scale-95"
              onClick={onClose}
            >
              Cancel
            </button>
            <button onClick={() => setOpenModal("open")} className="bg-[#005AAB] text-sm text-white px-4 py-2 rounded hover:bg-[#004080] hover:scale-95">
           Generate Challan
            </button>
          </div>
        </motion.div>
          {/* Conditionally render the different popups */}
                            {openModal === "open" && (
                              <DeliveryChallanTwo onClose={() => setOpenModal(null)} />
                            )}
      </div>
    </AnimatePresence>
  );
}
