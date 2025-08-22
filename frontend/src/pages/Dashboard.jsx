import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRefresh } from "../context/RefreshContext";


export default function Dashboard() {
   const { refreshKey } = useRefresh();
  const cards = [
    { title: "TODAY’S DISPATCH CLEARANCE", value: 19, link: "/clearance1" },
    { title: "TODAY’S DISPATCH CLEARANCE", value: 25, link: "/clearance1" },
    { title: "TODAY’S DISPATCH CLEARANCE", value: 12, link: "/clearance1" },
    { title: "TODAY’S DISPATCH CLEARANCE", value: 8, link: "/clearance1" },
  ];

  const returnStockData = [
    { product: "Item A", qty: 10, place: "Warehouse 1" },
    { product: "Item B", qty: 5, place: "Warehouse 2" },
  ];

  const projectWiseData = [
    { code: "P001", store: "S001", dc: "Pending", in: 100, out: 50, return: 5 },
    { code: "P002", store: "S002", dc: "Approved", in: 80, out: 30, return: 2 },
    { code: "P003", store: "S003", dc: "Not Added", in: 60, out: 20, return: 8 },
  ];

  const statusColors = {
    Pending: "bg-[#FFDA8B] text-black",
    Approved: "bg-[#C7F4B2] text-black",
    "Not Added": "bg-[#FF978B] text-black",
  };

  return (
    <div className="p-6 space-y-8 bg-white rounded-lg box-shadow-1" key={refreshKey}>
      {/* --- FIRST SECTION: 4 Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-black rounded-lg p-5 bg-white shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-sm font-medium text-gray-700">{card.title}</h2>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-3xl  font-bold">{card.value}</h2>
          <Link
  to={card.link}
  className="group bg-black text-white rounded-full p-2 
             hover:bg-gray-800 hover:shadow-lg 
             transform hover:scale-110 transition-all duration-300 ease-in-out"
>
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

            </div>
          </div>
        ))}
      </div>

      {/* --- SECOND SECTION: Two Tables --- */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT TABLE: 30% */}
        <div className="lg:w-[30%] border border-black rounded-lg bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">RETURN STOCK</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-center border-b">
                  <th className="pb-3 min-w-[120px]">Product Name</th>
                  <th className="pb-3 min-w-[80px]">Quantity</th>
                  <th className="pb-3 min-w-[120px]">Place</th>
                </tr>
              </thead>
              <tbody className="">
                {returnStockData.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-100 hover:shadow-md hover:font-medium transition text-center "
                  >
                    <td className="py-2">{row.product}</td>
                    <td className="py-2">{row.qty}</td>
                    <td className="py-2">{row.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT TABLE: 70% */}
        <div className="lg:w-[70%] border border-black rounded-lg bg-white p-5 shadow-sm overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">PROJECT WISE UPDATE</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left  border-b ">
                  <th className="pb-3 min-w-[120px]">Project Code</th>
                  <th className="pb-3 min-w-[100px]">Store ID</th>
                  <th className="pb-3 min-w-[120px]">DC Status</th>
                  <th className="pb-3 min-w-[80px]">Stock In</th>
                  <th className="pb-3 min-w-[80px]">Stock Out</th>
                  <th className="pb-3 min-w-[120px]">Return Stock</th>
                </tr>
              </thead>
              <tbody>
                {projectWiseData.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-100 hover:shadow-md hover:font-medium transition text-center "
                  >
                    <td className="py-2">{row.code}</td>
                    <td className="py-2">{row.store}</td>
                    <td className="py-2">
                      <span
                        className={`px-3 py-1 rounded-md text-[0.7rem] font-medium ${statusColors[row.dc]}`}
                      >
                        {row.dc}
                      </span>
                    </td>
                    <td className="py-2">{row.in}</td>
                    <td className="py-2">{row.out}</td>
                    <td className="py-2">{row.return}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
