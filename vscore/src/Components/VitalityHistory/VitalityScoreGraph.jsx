import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 45, fill: "#A3C2C4" },
  { name: "Group B", value: 55, fill: "transparent" },
];
const data02 = [
  { name: "A1", value: 51, fill: "#545A88" },
  { name: "A2", value: 49, fill: "transparent" },
];

export default class VitalityScoreGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="h-[300px] sm:h-[400px]"
      >
        <PieChart width={200} height="100%" className="h-[300px] sm:h-[400px]">
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            startAngle={90}
            endAngle={-500}
            paddingAngle={0}
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>

          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={-500}
            label
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
