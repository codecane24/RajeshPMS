import React, { forwardRef } from "react";
import logo from "../public/logo.png";

const DeliveryChallanDownload = forwardRef((props, ref) => {
    
  return (
    <div ref={ref} className="bg-white p-6 w-full max-w-5xl">
      <div className="min-w-[900px] border border-black rounded">
        {/* Header */}
        <div className="flex border-b border-black">
          <div className="w-[80%] flex gap-2 p-2 border-r border-black">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <div>
              <p className="font-bold text-sm">GSTIN NO: 24AAECR6294G1Z7</p>
              <p className="text-sm">
                Siddhi House, B/h Kamaldeep Apartment Lal Bungalow,
                Off CG Road, Navarangpura, Ahmedabad 380006
              </p>
            </div>
          </div>
          <div className="w-[20%] text-center">
            <div className="bg-[#ED1C24] text-white font-bold">DELIVERY CHALLAN</div>
            <p className="font-semibold">Challan No</p>
            <p>Shilal 306</p>
          </div>
        </div>

        {/* To Section */}
        <div className="flex border-b border-black">
          <div className="w-[80%] p-2 border-r border-black">
            <p className="font-bold text-sm">To:</p>
            <p className="text-sm">Mr. Rajesh Power Services LTD</p>
            <p className="text-sm">AC/OFF- Uttar Gujarat Vij Company (UGVCL)</p>
            <p className="text-sm">Nirma Feeder Nirma University, Ahmedabad</p>
          </div>
          <div className="w-[20%] p-2">
            <p className="font-semibold">Store Id</p>
            <p>Shilal</p>
          </div>
        </div>

        {/* Table */}
        <div className="p-4">
          <table className="w-full border-collapse border border-black text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black px-3 py-2">Item No.</th>
                <th className="border border-black px-3 py-2">Description</th>
                <th className="border border-black px-3 py-2">Qty</th>
                <th className="border border-black px-3 py-2">Units</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2">1</td>
                <td className="border border-black px-3 py-2">Example Item</td>
                <td className="border border-black px-3 py-2 text-center">10</td>
                <td className="border border-black px-3 py-2 text-center">Kg</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2">2</td>
                <td className="border border-black px-3 py-2">Another Item</td>
                <td className="border border-black px-3 py-2 text-center">5</td>
                <td className="border border-black px-3 py-2 text-center">Nos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default DeliveryChallanDownload;

