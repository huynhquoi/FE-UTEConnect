"use client";

import {
  Post,
  User,
  useGetAccountQuery,
  useGetPostByKeyWordsQuery,
  useGetPostQuery,
} from "@/graphql/controller-types";
import { Avatar, Card, Flex, Space, Table } from "antd";
import Link from "next/link";
import { EyeOutlined } from "@ant-design/icons";
import BanBtn from "@/components/admin/user/BanBtn";
import { useEffect, useState } from "react";
import XInput from "@/components/core/XInput";

const AdminPostPage = () => {
  const [keyword, setKeyword] = useState("");
  const { data, loading, fetchMore } = useGetPostByKeyWordsQuery({
    variables: {
      keyword: keyword,
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
      title: "Chủ đề",
      dataIndex: "topic",
      key: "topic",
      render: (_: any, record: Post) => (
        <>
          <Link
            href={`/home/post/topic/${record?.topic_post?.topicid}`}
            style={{ color: "black", cursor: "pointer" }}
            target="__blank"
          >
            {record?.topic_post?.topicname}
          </Link>
        </>
      ),
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
          <Flex align="center" justify="start">
            <XInput
              style={{
                width: "500px",
                height: "40px",
                marginBottom: "24px",
                border: "1px solid #000",
              }}
              placeholder="Tìm kiếm bài viết theo tiêu đề"
              onChange={(e) => setKeyword(e?.target?.value)}
            />
          </Flex>
          <Table
            dataSource={data?.find_post_by_keyword as Post[]}
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
    </>
  );
};

export default AdminPostPage;
