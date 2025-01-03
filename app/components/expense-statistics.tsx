"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { name: "Entertainment", value: 30, color: "#374151" }, // Tailwind 'gray-700'
  { name: "Investment", value: 20, color: "#4461F2" }, // Blue
  { name: "Bill Expense", value: 15, color: "#F97316" }, // Tailwind 'orange-500'
  { name: "Others", value: 35, color: "#000000" }, // Black
];

export function ExpenseStatistics() {
  return (
    <Card className="p-2 md:p-6 rounded-3xl">
      <div className="h-[250px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120} // Adjust for overall size
              innerRadius={0} // No inner radius, makes it look like a full pizza
              label={({ name, percent, midAngle, cx, cy, outerRadius }) => {
                // Calculate label position inside each slice
                const RADIAN = Math.PI / 180;
                const radius = outerRadius * 0.7; // Place label slightly inside the slice
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                return (
                  <>
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: "white", // White for better contrast
                        fontSize: "10px", // Smaller font for fitting labels
                        fontWeight: "bold",
                      }}
                    >
                      {name}
                    </text>
                    <text
                      x={x}
                      y={y + 20}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: "white", // White for better contrast
                        fontSize: "10px", // Smaller font for fitting labels
                        fontWeight: "bold",
                      }}
                    >
                      {percent * 100}%
                    </text>
                  </>
                );
              }}
              labelLine={false} // Disable label lines for a cleaner look
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB", // Tailwind gray-200
                borderRadius: "4px",
              }}
              labelStyle={{ color: "#374151" }} // Tailwind gray-700
              itemStyle={{ color: "#374151" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
