"use client";

import {
  Post,
  User,
  useGetAccountQuery,
  useGetPostQuery,
} from "@/graphql/controller-types";
import { Avatar, Card, Flex, Space, Table } from "antd";
import Link from "next/link";
import { EyeOutlined } from "@ant-design/icons";
import BanBtn from "@/components/admin/user/BanBtn";

const AdminPostPage = () => {
  const { data, loading, fetchMore } = useGetPostQuery({
    variables: {
      limit: 100,
      pacing: 1,
    },
  });
  const columns = [
    {
      title: "",
      dataIndex: "index",
      render: (_: any, record: Post, index: number) => (
        <>
          <div className="">{index + 1}</div>
        </>
      ),
    },
    {
      title: "Người đăng",
      dataIndex: "user",
      render: (_: any, record: Post) => (
        <>
          <Flex align="center">
            <Avatar src={record?.user_post?.image} size={48} />
            <div className="ml-2">{record?.user_post?.fullname}</div>
          </Flex>
        </>
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Reputation",
      dataIndex: "requiredreputation",
      key: "requiredreputation",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: Post) => (
        <>
          <Space>
            <Link href={`/home/post/${record?.postid}`} target="__blank">
              <Flex align="center">
                <EyeOutlined style={{ fontSize: "20px", color: "#000" }} />
              </Flex>
            </Link>
          </Space>
        </>
      ),
    },
  ];
  return (
    <>
      <Flex justify="center" style={{ width: "100%" }}>
        <Card style={{ width: "94%" }}>
          <Table
            dataSource={data?.post as Post[]}
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
    </>
  );
};

export default AdminPostPage;
