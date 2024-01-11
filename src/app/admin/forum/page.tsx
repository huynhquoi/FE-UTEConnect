"use client";

import { Group, useGetGroupQuery } from "@/graphql/controller-types";
import { Button, Card, Flex, Table } from "antd";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import XInput from "@/components/core/XInput";
import dayjs from "dayjs";

const ForumPage = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, loading, fetchMore } = useGetGroupQuery({
    variables: {
      keyword: keyword,
    },
  });
  const columns = [
    {
      title: "",
      dataIndex: "index",
      render: (_: any, record: Group, index: number) => (
        <>
          <div className="">{index + 1}</div>
        </>
      ),
    },
    {
      title: "Tên",
      dataIndex: "groupname",
      key: "groupname",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createday",
      render: (_: any, record: Group) => (
        <>
          <div className="">
            {dayjs(record?.createday).format("DD/MM/YYYY, HH:mm")}
          </div>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: Group) => (
        <Link href={`/home/group/${record?.groupid}`} target="__blank">
          <Flex align="center">
            <EyeOutlined style={{ fontSize: "20px", color: "#000" }} />
          </Flex>
        </Link>
      ),
    },
  ];
  return (
    <>
      <Flex justify="center" style={{ width: "100%" }}>
        <Card style={{ width: "94%" }}>
          <Flex align="center" justify="start">
            <XInput
              style={{
                width: "500px",
                height: "40px",
                marginBottom: "24px",
                border: "1px solid #000",
              }}
              placeholder="Tìm kiếm nhóm theo tên"
              onChange={(e) => setKeyword(e?.target?.value)}
            />
          </Flex>
          <Table
            dataSource={data?.find_group_by_keyword as Group[]}
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
    </>
  );
};

export default ForumPage;
