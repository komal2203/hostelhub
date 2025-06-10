// src/components/SummaryCard.jsx

import React from "react";

export default function SummaryCard({ icon, value, label, color }) {
  return (
    <div
      className={`
        p-4 rounded-xl bg-white border border-gray-200 text-center 
        relative overflow-hidden shadow-md transition-transform duration-300 ease-in-out
        transform hover:scale-105 hover:-rotate-1
        hover:shadow-lg group
      `}
    >
      <div className={`text-3xl ${color} mb-2`}>{icon}</div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-gray-600 ">{label}</div>
    </div>
  );
}
