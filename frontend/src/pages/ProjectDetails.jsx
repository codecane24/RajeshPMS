import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ProjectDetails() {
  const projectWiseData = [
    { code: "P001", store: "S001", dc: "Pending", in: 100, out: 50, return: 5 },
    { code: "P002", store: "S002", dc: "Approved", in: 80, out: 30, return: 2 },
    { code: "P003", store: "S003", dc: "Not Added", in: 60, out: 20, return: 8 },
  ];

  const WorkingLocation = [
    { no: "01", location: "jodhpur" },
    { no: "02", location: "vejlpur" },
  ];

  const statusColors = {
    Pending: "bg-[#FFDA8B] text-black",
    Approved: "bg-[#C7F4B2] text-black",
    "Not Added": "bg-[#FF978B] text-black",
  };

  return (
    <>
 <div className="bg-white flex flex-col lg:flex-row gap-2 lg:gap-10 justify-center items-start shadow-md rounded-md px-3 sm:px-5 py-4">
  {/* LEFT SIDE: Project Info */}
  <div className="w-full lg:w-[20%] px-3 bg-black rounded-md p-3 text-white mb-4 lg:mb-0">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">PROJECT- 856</h1>
    <h2 className="text-base sm:text-lg font-bold">Company</h2>
    <h2 className="text-base sm:text-xl font-normal mb-4">UGVCl</h2>
    <h2 className="text-base sm:text-lg font-bold">PROJECT <br /> IN-CHARGE</h2>
    <h2 className="text-base sm:text-lg font-normal mb-4">Bansal Patel</h2>
    <h2 className="text-base sm:text-lg font-bold">PROJECT <br /> ENGINEER</h2>
    <h2 className="text-base sm:text-lg font-normal mb-5">Bansal Patel</h2>
    <h2 className="text-base sm:text-lg font-bold">STORE ID</h2>
    <h2 className="text-base sm:text-lg font-normal">S121</h2>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full lg:w-[80%] rounded-md">
    {/* Graph for Project Status */}
    <div className="border-[1.5px] border-black rounded-md p-2 mb-4">
      <p className="text-sm font-semibold mb-2">PROJECT STATUS</p>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={projectWiseData}>
          <XAxis dataKey="code" stroke="#000" />
          <YAxis stroke="#000" />
          <Tooltip />
          <Legend />
          <Bar dataKey="in" fill="#1a1a1a" />
          <Bar dataKey="out" fill="#4d4d4d" />
          <Bar dataKey="return" fill="#b3b3b3" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* SECOND SECTION: Two Tables */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* LEFT TABLE: WORKING LOCATION */}
      <div className="w-full lg:w-[40%] border border-black rounded-lg bg-white p-2 shadow-sm">
        <h2 className="text-base sm:text-lg font-semibold mb-4">WORKING LOCATION</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-start border-b">
                <th className="pb-3 min-w-[80px] sm:min-w-[120px]">No</th>
                <th className="pb-3 min-w-[100px]">Locations</th>
              </tr>
            </thead>
            <tbody>
              {WorkingLocation.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100 hover:shadow-md hover:font-medium transition text-center">
                  <td className="py-2">{row.no}</td>
                  <td className="py-2">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT TABLE: PROJECT TASKS */}
      <div className="w-full lg:w-[60%] border border-black rounded-lg bg-white p-3 sm:p-5 shadow-sm overflow-x-auto">
        <h2 className="text-base sm:text-lg font-semibold mb-4">PROJECT TASKS</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3 min-w-[80px] sm:min-w-[120px]">No</th>
                <th className="pb-3 min-w-[100px]">Task</th>
                <th className="pb-3 min-w-[120px]">FEEDAR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 hover:shadow-md hover:font-medium transition text-center">
                <td className="py-2">01</td>
                <td className="py-2">Civil Work</td>
                <td className="py-2">Agency 01</td>
              </tr>
              <tr className="hover:bg-gray-100 hover:shadow-md hover:font-medium transition text-center">
                <td className="py-2">02</td>
                <td className="py-2">Digging</td>
                <td className="py-2">Agency 02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default ProjectDetails;
