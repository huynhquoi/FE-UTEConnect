"use client";

import { User, useGetAccountQuery } from "@/graphql/controller-types";
import { Avatar, Card, Flex, Table } from "antd";
import Link from "next/link";
import { EyeOutlined } from "@ant-design/icons";

const AdminUserPage = () => {
  const { data, loading } = useGetAccountQuery({
    variables: {
      limit: 100,
      pacing: 1,
    },
  });
  const columns = [
    {
      title: "",
      dataIndex: "index",
      render: (_: any, record: User, index: number) => (
        <>
          <div className="">{index + 1}</div>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "avatar",
      render: (_: any, record: User) => (
        <>
          <Avatar src={record?.image} size={48} />
        </>
      ),
    },
    {
      title: "Tên",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: User) => (
        <Link href={`/home/account_manager/${record?.userid}`} target="__blank">
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
          <Table
            dataSource={data?.account as User[]}
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
    </>
  );
};

export default AdminUserPage;
