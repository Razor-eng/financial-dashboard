"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { name: "Jul", value: 150 },
  { name: "", value: 300 },
  { name: "Aug", value: 220 },
  { name: "", value: 200 },
  { name: "Sep", value: 500 },
  { name: "", value: 400 },
  { name: "Oct", value: 800 },
  { name: "", value: 400 },
  { name: "Nov", value: 200 },
  { name: "", value: 400 },
  { name: "Dec", value: 600 },
  { name: "", value: 400 },
  { name: "Jan", value: 200 },
];

export function BalanceHistory() {
  return (
    <Card className="p-4 rounded-3xl">
      <div className="h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Grid Lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

            {/* X-Axis */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#6B7280" }} // Tailwind gray-500 for better visibility
              axisLine={{ stroke: "#D1D5DB" }} // Tailwind gray-300 for the axis line
              tickLine={false} // Remove tick lines
              interval={0} // Show only specific ticks
              ticks={["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]} // Filter for main ticks
            />

            {/* Y-Axis */}
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={{ stroke: "#D1D5DB" }}
              tickLine={false}
              domain={[0, 800]} // Set Y-axis range from 0 to 800
              ticks={[0, 200, 400, 600, 800]} // Custom tick values
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "4px",
              }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4461F2" // Line color
              fill="rgba(68, 97, 242, 0.3)" // Area fill color with opacity
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
