"use client";

import { Group, useGetGroupQuery } from "@/graphql/controller-types";
import { Button, Card, Flex, Table } from "antd";
import { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      key: "createday",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: Group) => (
        <Link href={`/home/group/${record?.groupid}`} target="__blank">
          <Flex align="center">
            <EyeOutlined style={{fontSize: "20px", color: "#000"}} />
          </Flex>
        </Link>
      ),
    },
  ];
  return (
    <>
      <Flex justify="center" style={{ width: "100%" }}>
        <Card style={{ width: "94%" }}>
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
