// src/components/RatingPieChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useMemo } from "react";

const COLORS = ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"];

export default function RatingPieChart({ ratings }) {
  // Transform {1: 5, 2: 2, ...} to [{name: "1 Stars", value: 5}, ...]
  const data = Object.entries(ratings).map(([key, value]) => ({
    name: `${key} Star${key === "1" ? "" : "s"}`,
    value,
  }));
    

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
