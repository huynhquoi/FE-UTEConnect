"use client";

import { Card, Flex } from "antd";
import { Line } from "react-chartjs-2";

type LineChartProps = {
  title: string;
  label: Array<string | number>;
  data: Array<{
    id: string | number;
    label: string;
    color: string;
    data: Array<string | number>;
  }>;
};

const LineChart = ({ title, data, label }: LineChartProps) => {
  return (
    <>
      <Card>
        <Flex justify="center">
          <Line
            data={{
              labels: label,
              datasets: data?.map((d) => ({
                data: d?.data,
                label: d?.label,
                fill: false,
                borderColor: d?.color,
              })),
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: title,
                },
              },
            }}
          ></Line>
        </Flex>
      </Card>
    </>
  );
};

export default LineChart;
