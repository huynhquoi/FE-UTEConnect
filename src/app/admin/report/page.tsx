"use client";

import { Report, useGetReportByTypeQuery } from "@/graphql/controller-types";
import {
  REPORT_COMMENT,
  REPORT_POST,
  REPORT_USER,
} from "@/graphql/default-types";
import { Avatar, Button, Card, Flex, Select, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EyeOutlined, CheckOutlined } from "@ant-design/icons";
import Link from "next/link";
import ReportAction from "@/components/admin/report/ReportAction";

const { Option } = Select;

const ReportPage = () => {
  const [reportType, setReportType] = useState(REPORT_USER);

  const { data, loading, fetchMore } = useGetReportByTypeQuery({
    variables: { type: reportType },
  });

  const columns = [
    {
      title: "",
      dataIndex: "index",
      render: (_: any, record: Report, index: number) => (
        <>
          <div className="">{index + 1}</div>
        </>
      ),
    },
    {
      title: "Lý do",
      dataIndex: "reason",
      key: "reason",
    },

    {
      title: "Người report",
      dataIndex: "reporter",
      key: "reporter",
      render: (_: any, record: Report) => (
        <Flex align="center">
          <Avatar src={record?.user_reporter?.image} />
          <div className="ml-2">{record?.user_reporter?.fullname}</div>
        </Flex>
      ),
    },
    {
      title:
        reportType === REPORT_USER
          ? "Người bị report"
          : reportType === REPORT_POST
          ? "Tiêu đề bài viết"
          : "Comment",
      dataIndex: "",
      key: "",
      render: (_: any, record: Report) =>
        reportType === REPORT_USER ? (
          <Flex align="center">
            <Avatar src={record?.user_report?.image} />
            <div className="ml-2">{record?.user_report?.fullname}</div>
          </Flex>
        ) : reportType === REPORT_POST ? (
          <Link
            href={`/home/post/${record?.post_report?.postid}`}
            target="__blank"
          >
            {record?.post_report?.title}
          </Link>
        ) : (
          <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[200px]">
            {record?.comment_report?.content}
          </div>
        ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createday",
      key: "createday",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: Report) => (
        <ReportAction
          report={record}
          onReload={() =>
            fetchMore({
              variables: { type: reportType },
            })
          }
          commentReportId={
            reportType === REPORT_COMMENT
              ? record?.comment_report?.commentid
              : 0
          }
          userReportId={
            reportType === REPORT_USER ? record?.user_report?.userid : ""
          }
          postReportId={
            reportType === REPORT_POST ? record?.post_report?.postid : 0
          }
          userId={record?.post_report?.user_post?.userid}
        />
      ),
    },
  ];

  useEffect(() => {
    fetchMore({
      variables: {
        type: reportType,
      },
    });
  }, [fetchMore, reportType]);
  return (
    <>
      <Flex justify="center" style={{ width: "100%" }}>
        <Card style={{ width: "94%" }}>
          <Flex align="center" justify="start" className="mb-5">
            <Select
              onChange={(e: any) => setReportType(e)}
              value={reportType}
              style={{ width: "200px" }}
            >
              <Option value={REPORT_USER}>Người dùng</Option>
              <Option value={REPORT_POST}>Bài viết</Option>
              <Option value={REPORT_COMMENT}>Comment</Option>
            </Select>
          </Flex>
          <Table
            dataSource={data?.get_report_by_type as Report[]}
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
    </>
  );
};

export default ReportPage;
