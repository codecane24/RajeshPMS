

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/logo.png";




export default function DeliveryChallan({ onClose }) {
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

  {/* Popup */}
  <motion.div
    className="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 z-10 overflow-x-auto"
    initial={{ opacity: 0, scale: 0.95, y: -20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: -20 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    {/* Wrap fixed-width content so UI never breaks */}
    <div className="min-w-[900px]"> 
      {/* first row */}
      <div className="flex justify-center items-center border-black border-2 rounded-t-lg">
        <div className="w-[80%] flex gap-2 justify-center px-2 items-center border-black border-r-2 box-border">
          <div>
            <img src={logo} className="p-2" />
          </div>
          <div>
            <p className="text-sm font-bold">GSTIN NO: 24AAECR6294G1Z7</p>
            <p className="text-sm">
              Siddhi House, B/h Kamaldeep Apartment Lal Bungalow, Off CG Road,
              Navarangpura, Ahmedabad 380006
            </p>
          </div>
        </div>

        <div className="w-[20%] box-border">
          <div className="w-auto p-[1px] text-center border-black font-bold border-b-2 border-t-2  bg-[#ED1C24] text-white">
            DELIVERY CHALLAN
          </div>
          <p className="font-semibold px-2">Challan No</p>
          <p className="px-2">Shilal 306</p>
        </div>
      </div>

      {/* second row */}
      <div className="flex justify-center items-center border-black border-b-2 border-l-2 border-r-2 rounded-b-lg">
        <div className="w-[80%] py-2 px-2 border-black border-r-2 box-border">
          <p className="text-sm font-bold">To:</p>
          <p className="text-sm">Mr. Rajesh Power Services LTD</p>
          <p className="text-sm">AC/OFF- Uttar Gujarat Vij Company (UGVCL)</p>
          <p className="text-sm">Nirma Feeder Nirma Univercity, Ahmedabad</p>
        </div>

        <div className="w-[20%]">
          <div className="w-full border-black border-b-2 px-2">
            <p className="font-semibold">Store Id</p>
            <p>Shilal</p>
          </div>
          <p className="font-semibold px-2">Challan No</p>
          <p className="px-2">Shilal 306</p>
        </div>
      </div>
      {/* ✅ Table Section */}
<div className="px-20 oerflow-x-auto mt-4">
  <table className="w-full   text-sm md:text-lg">
    <thead>
      <tr className="">
        <th className="  px-3 py-2 text-left">Item No.</th>
        <th className="  px-3 py-2 text-left">Item Description</th>
        <th className="  px-3 py-2 text-center">Quantity</th>
        <th className="  px-3 py-2 text-center">Units</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="  px-3 py-2">1</td>
        <td className="  px-3 py-2">Example Item</td>
        <td className="  px-3 py-2 text-center">10</td>
        <td className="  px-3 py-2 text-center">Kg</td>
      </tr>
      <tr>
        <td className="  px-3 py-2">2</td>
        <td className="  px-3 py-2">Another Item</td>
        <td className="  px-3 py-2 text-center">5</td>
        <td className="  px-3 py-2 text-center">Nos</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
   {/* Row 3: Buttons aligned right */}
          <div className="flex justify-start sm:justify-end gap-3 mt-6">
            <button
              className="px-4 py-2 border rounded-md text-sm bg-gray-800 text-white  hover:scale-95"
              onClick={onClose}
            >
              Cancel
            </button>
            <button onClick={() => setOpenModal("open")} className="bg-[#005AAB] rounded-md text-sm text-white px-4 py-2  hover:bg-[#004080] hover:scale-95">
           Send for Approval
            </button>
          </div>
  </motion.div>
</div>

    </AnimatePresence>
  );
}
