"use client";

import {
  User,
  useFindUserByKeywordQuery,
  useGetAccountQuery,
} from "@/graphql/controller-types";
import { Avatar, Card, Flex, Select, Space, Table } from "antd";
import Link from "next/link";
import { EyeOutlined } from "@ant-design/icons";
import BanBtn from "@/components/admin/user/BanBtn";
import UpdateReputation from "@/components/admin/user/UpdateReputation";
import { useState } from "react";
import XInput from "@/components/core/XInput";

const { Option } = Select;

const AdminUserPage = () => {
  const [keywords, setKeywords] = useState("");
  const { data, loading, fetchMore } = useFindUserByKeywordQuery({
    variables: {
      keyword: keywords,
    },
  });
  const [filterRole, setFilterRole] = useState(2);
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
      title: "Quyền",
      dataIndex: "role",
      render: (_: any, record: User, index: number) => (
        <>
          <div className="">{record?.role?.rolename}</div>
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
      title: "Reputation",
      dataIndex: "reputation",
      key: "reputation",
      sorter: (a: User, b: User) => (a?.reputation || 0) - (b?.reputation || 0),
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: User) => (
        <>
          <Space size={"middle"}>
            <Link
              href={`/home/account_manager/${record?.userid}`}
              target="__blank"
            >
              <Flex align="center">
                <EyeOutlined style={{ fontSize: "20px", color: "#000" }} />
              </Flex>
            </Link>
            <BanBtn
              userId={record?.userid as string}
              onReload={() =>
                fetchMore({
                  variables: {
                    limit: 100,
                    pacing: 1,
                  },
                })
              }
            />
            <UpdateReputation
              userId={record?.userid as string}
              onReload={() =>
                fetchMore({
                  variables: {
                    limit: 100,
                    pacing: 1,
                  },
                })
              }
            />
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
              placeholder="Tìm kiếm người dùng theo tên"
              onChange={(e) => setKeywords(e?.target?.value)}
            />
            <Select
              onChange={(value: any) => setFilterRole(value)}
              defaultValue={filterRole}
              style={{ width: "160px", height: "40px", marginBottom: "24px", marginLeft: "12px" }}
            >
              <Option key={1} value={1}>
                Admin
              </Option>
              <Option key={2} value={2}>
                User
              </Option>
            </Select>
          </Flex>
          <Table
            dataSource={
              data?.get_user_by_keyword?.filter(
                (e) => e?.role?.roleid === filterRole
              ) as User[]
            }
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
    </>
  );
};

export default AdminUserPage;
