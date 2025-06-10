// src/components/RatingTrendChart.jsx
import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RatingTrendChart({ ratings }) {
  /*
  ratings: array of rating objects like
    [{ rating: 5, date: "2025-06-01T12:34:56Z", ... }, ...]
  */

  // Group ratings by day and compute average rating per day
  const data = useMemo(() => {
    if (!ratings || ratings.length === 0) return [];

    // Helper: format date to 'YYYY-MM-DD'
    const formatDate = (d) => new Date(d).toISOString().slice(0, 10);

    // Group ratings by date string
    const groups = ratings.reduce((acc, cur) => {
      const day = formatDate(cur.date);
      if (!acc[day]) acc[day] = [];
      acc[day].push(cur.rating);
      return acc;
    }, {});

    // Map groups to average rating data
    const result = Object.entries(groups).map(([date, ratings]) => {
      const avg = (
        ratings.reduce((sum, r) => sum + r, 0) / ratings.length
      ).toFixed(2);
      return { date, averageRating: Number(avg) };
    });

    // Sort by date ascending
    result.sort((a, b) => new Date(a.date) - new Date(b.date));

    return result;
  }, [ratings]);

  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500">No rating data to display.</p>
    );
  }

  return (
    <div className="p-4 border border-gray-200 rounded-md bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Rating Trends Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={[1, 5]} tickCount={5} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="averageRating"
            stroke="#db2777" // Tailwind blue-500
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
