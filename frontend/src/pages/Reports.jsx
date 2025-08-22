import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Reports() {
  // Sample summary data (can come from props or API)
  const summaryCards = [
    { title: "Total Dispatches", value: 128, link: "/dispatch" },
    { title: "Pending POs", value: 34, link: "/po" },
    { title: "Active Stores", value: 56, link: "/store" },
    { title: "Projects Ongoing", value: 20, link: "/projects" },
  ];

  // Sample chart data (for dispatches over last 7 days)
  const dispatchTrend = [
    { day: "Mon", dispatches: 12 },
    { day: "Tue", dispatches: 18 },
    { day: "Wed", dispatches: 14 },
    { day: "Thu", dispatches: 20 },
    { day: "Fri", dispatches: 22 },
    { day: "Sat", dispatches: 17 },
    { day: "Sun", dispatches: 19 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, i) => (
          <a
            key={i}
            href={card.link}
            className="border rounded-lg p-5 shadow hover:shadow-md bg-white transition"
          >
            <h3 className="text-gray-600 font-semibold">{card.title}</h3>
            <p className="text-4xl font-bold mt-3">{card.value}</p>
          </a>
        ))}
      </div>

      {/* Dispatch Trend Chart */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Dispatches in Last 7 Days</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dispatchTrend} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="dispatches" fill="#005AAB" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* More charts or tables can be added below similarly */}
    </div>
  );
}
