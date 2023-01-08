import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  Dot,
} from "recharts";

export default class VitalityHistoryGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lineData: this.props.lineData,
    };
  }

  componentDidMount() {
    this.setState({
      lineData: this.props.lineData,
    });
  }

  render() {
    const lineData = this.props.lineData;
    return lineData ? (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={400}
            data={lineData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: this.props.YLable,
                angle: -90,
                position: "insideLeft",
                offset: 12,
              }}
              minTickGap={5}
              allowDecimals={false}
            />
            <Tooltip />

            {this.props.line1DataKey ? (
              <Line
                type="monotone"
                dataKey={this.props.line1DataKey}
                stroke={this.props.line1Color}
                fill={this.props.line1Color}
                dot={{ stroke: this.props.line1Color, strokeWidth: 8 }}
              />
            ) : null}

            {this.props.line2DataKey ? (
              <Line
                type="monotone"
                dataKey={this.props.line2DataKey}
                stroke={this.props.line2Color}
                fill={this.props.line2Color}
                dot={{ stroke: this.props.line2Color, strokeWidth: 8 }}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    ) : null;
  }
}
