import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
//import { useMediaQuery } from "react-responsive";
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
    const width = window ? (window.innerWidth < 500 ? 250 : 300) : 300;
    const height = window ? (window.innerWidth < 500 ? 250 : 300) : 300;
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
      <ResponsiveContainer className="min-h-[300px] w-[200px] sm:min-h-[300px] sm:w-[300px]">
        <PieChart width="100%" height="100%">
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={width / 2 - 60}
            outerRadius={width / 2 - 60}
            startAngle={90}
            endAngle={-500}
            stroke="#000000"
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-center-0`} fill={entry.fill} />
            ))}
          </Pie>

          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={width / 2 - 70}
            outerRadius={width / 2 - 50}
            startAngle={90}
            endAngle={-500}
            paddingAngle={0}
            stroke="0"
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
            innerRadius={width / 2 - 20}
            outerRadius={width / 2 - 20}
            startAngle={90}
            endAngle={-500}
            stroke="#000000"
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-center-1`} fill={entry.fill} />
            ))}
          </Pie>

          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={width / 2 - 30}
            outerRadius={width / 2 - 10}
            startAngle={90}
            endAngle={-500}
            stroke="0"
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index + 1}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
