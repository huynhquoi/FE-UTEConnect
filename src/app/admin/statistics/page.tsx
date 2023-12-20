"use client";

import LineChart from "@/components/admin/chart/LineChart";
import { Col, Row } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsPage = () => {
  return (
    <>
      <Row>
        <Col span={1}></Col>
        <Col span={11} className="mr-2">
          <LineChart
            title="Số lượng người dùng qua từng tháng"
            label={[
              "Jan",
              "Feb",
              "Marc",
              "Apr",
              "May",
              "Jul",
              "Jun",
              "Aprl",
              "Sep",
              "Otc",
              "Nov",
              "Dec",
            ]}
            data={[
              {
                id: 1,
                label: "User",
                color: "#000",
                data: [10, 30, 40, 60],
              },
            ]}
          />
        </Col>
        <Col span={11} className="ml-2">
          <LineChart
            title="Số lượng bài đăng qua từng tháng"
            label={[
              "Jan",
              "Feb",
              "Marc",
              "Apr",
              "May",
              "Jul",
              "Jun",
              "Aprl",
              "Sep",
              "Otc",
              "Nov",
              "Dec",
            ]}
            data={[
              {
                id: 1,
                label: "Post",
                color: "#000",
                data: [10, 15, 40, 100],
              },
            ]}
          />
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
};

export default StatisticsPage;
