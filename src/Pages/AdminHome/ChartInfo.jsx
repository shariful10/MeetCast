import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartInfo = () => {
  const data = [
    {
      name: "January",
      uv: 40,
      pv: 24,
      amt: 24,
      tcusto: "Customer A",
    },
    {
      name: "February",
      uv: 30,
      pv: 13,
      amt: 22,
    },
    {
      name: "March",
      uv: 20,
      pv: 98,
      amt: 22,
    },
    {
      name: "April",
      uv: 27,
      pv: 39,
      amt: 20,
    },
    {
      name: "May",
      uv: 18,
      pv: 48,
      amt: 21,
    },
    {
      name: "June",
      uv: 23,
      pv: 38,
      amt: 25,
    },
    {
      name: "July",
      uv: 34,
      pv: 43,
      amt: 21,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartInfo;
