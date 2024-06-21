"use client";

import React from "react";
import groupedData from "@/data/groupedData.json";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type AxisTickArgs = {
  x: number;
  y: number;
  stroke: string;
  payload: {
    value: string;
  };
};

const CustomizedAxisTick = (...args: AxisTickArgs[]) => {
  const { x, y, stroke, payload } = args[0];
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        textAnchor="end"
        fill="#666"
        transform="rotate(-60)"
        fontSize={10}
      >
        {payload.value}
      </text>
    </g>
  );
};

type TooltipProps = {
  payload: { name: string; color: string; value: string }[];
  label: string;
  active: boolean;
};

const CustomTooltip: React.FC<TooltipProps> = ({ payload, label, active }) => {
  if (active) {
    return (
      <div className="rounded-md bg-white p-2 shadow-md dark:bg-black">
        <p className="font-bold">{label}</p>
        <ul className="list-inside list-disc">
          {payload.map((entry) => (
            <li key={entry.name} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const ChartCallSummary = () => {
  // Convert the data to an array of objects where each object has a 'date' property
  let dataForChart = Object.keys(groupedData).map((date) => ({
    date,
    ...groupedData[date].totals,
  }));

  return (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={dataForChart}
        margin={{ bottom: 40 }}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        {/* <XAxis dataKey="date" fontSize={12} angle={-45} textAnchor="end" /> */}
        <XAxis dataKey="date" tick={<CustomizedAxisTick />} interval={1} />
        <YAxis stroke="#888888" fontSize={12} />

        <Tooltip
          // separator=": "
          // formatter={(value, name) => {
          //   if (name === "1") {
          //     return [value, "Poor"];
          //   } else if (name === "2") {
          //     return [value, "Average"];
          //   } else if (name === "3") {
          //     return [value, "Good"];
          //   }
          // }}
          content={<CustomTooltip />}
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />

        <Legend
          content={({ payload }) => (
            <>
              <ul
                className="flex flex-row-reverse justify-center gap-4 text-xs"
                // style={{
                //   display: "flex",
                //   gap: "1rem",
                //   justifyContent: "center",
                //   flexDirection: "row-reverse",
                // }}
              >
                {payload?.reverse().map((entry, index) => {
                  const getValue = () => {
                    if (entry.value === "3") return "Good";
                    if (entry.value === "2") return "Average";
                    if (entry.value === "1") return "Poor";
                    return entry.value;
                  };

                  return (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                      {getValue()}
                    </li>
                  );
                })}

                <li>Call Quality:</li>
              </ul>
            </>
          )}
          wrapperStyle={{ bottom: 0 }}
        />

        <Bar
          dataKey="1"
          stackId={1}
          fill="hsl(11, 84%, 53%)"
          fillOpacity={0.25}
          radius={[4, 4, 0, 0]}
          stroke="hsl(11, 84%, 53%)"
        />
        <Bar
          dataKey="2"
          stackId={1}
          fill="hsl(24, 100%, 50%)"
          fillOpacity={0.25}
          stroke="hsl(24, 100%, 50%)"
          radius={[4, 4, 4, 4]}
          transform="translate(0, -2)"
        />
        <Bar
          dataKey="3"
          stackId={1}
          fill="hsl(227, 99%, 49%)"
          fillOpacity={0.25}
          stroke="hsl(227, 99%, 49%)"
          radius={[4, 4, 4, 4]}
          transform="translate(0, -4)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartCallSummary;
