"use client";

import LineChart from "@/components/admin/chart/LineChart";
import {
  useGetStatisticPostQuery,
  useGetStatisticUserQuery,
} from "@/graphql/controller-types";
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
  const { data: user } = useGetStatisticUserQuery({
    variables: {
      year: 2023,
    },
  });

  const { data: post } = useGetStatisticPostQuery({
    variables: {
      year: 2023,
    },
  });
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
              "Apr",
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
                data: user?.statistic_user as Array<number>,
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
              "Apr",
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
                data: post?.statistic_post as Array<number>,
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
