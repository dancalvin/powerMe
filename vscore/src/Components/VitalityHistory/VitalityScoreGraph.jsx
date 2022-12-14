import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default class VitalityScoreGraph extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value2: parseInt(this.props.value2),
      value1: parseInt(this.props.value1),
    };
  }

  componentDidMount() {
    this.setState({
      value2: parseInt(this.props.value2),
      value1: parseInt(this.props.value1),
    });
  }
  render() {
    const data01 = [
      { name: "Group A", value: parseInt(this.props.value2), fill: "#A3C2C4" },
      {
        name: "Group B",
        value: 100 - parseInt(this.props.value2),
        fill: "transparent",
      },
    ];
    const data02 = [
      { name: "A1", value: parseInt(this.props.value1), fill: "#545A88" },
      {
        name: "A2",
        value: 100 - parseInt(this.props.value1),
        fill: "transparent",
      },
    ];

    return (
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="h-[300px] w-[300px] sm:h-[400px]"
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
            stroke="#D5D0DA"
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
            stroke="#D5D0DA"
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
