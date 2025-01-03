"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const data = [
  { name: "Sat", deposit: 300, withdraw: 500 },
  { name: "Sun", deposit: 200, withdraw: 400 },
  { name: "Mon", deposit: 100, withdraw: 300 },
  { name: "Tue", deposit: 300, withdraw: 500 },
  { name: "Wed", deposit: 400, withdraw: 100 },
  { name: "Thu", deposit: 200, withdraw: 400 },
  { name: "Fri", deposit: 300, withdraw: 400 },
];

export function WeeklyActivity() {
  return (
    <Card className="p-2 md:p-6 rounded-3xl">
      <ScrollArea className="h-[250px]">
        <div className="h-[200px]">
          {/* Legend */}
          <div className="flex items-center justify-end gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#4461F2]" />
              <span className="text-sm text-gray-600">Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-black" />
              <span className="text-sm text-gray-600">Withdraw</span>
            </div>
          </div>
          {/* Chart */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              {/* Y-Axis */}
              <YAxis
                stroke="#888888"
                fontSize={12}
                axisLine={false}
                tickLine={false}
                ticks={[0, 100, 200, 300, 400, 500]} // Adjust Y-axis ticks
                tickFormatter={(value) => `${value}`}
              />
              {/* X-Axis */}
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              {/* Tooltip */}
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
              {/* Bars */}
              <Bar
                dataKey="withdraw"
                fill="#000000"
                radius={[100, 100, 100, 100]}
                barSize={15}
              />
              <Bar
                dataKey="deposit"
                fill="#4461F2"
                radius={[100, 100, 100, 100]}
                barSize={15}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ScrollArea>
    </Card>
  );
}
