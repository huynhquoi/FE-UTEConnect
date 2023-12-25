"use client";

import { useGlobalStore } from "@/hook/useUser";
import {
  Affix,
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Flex,
  Menu,
  MenuProps,
  Space,
} from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HeartOutlined,
  UserAddOutlined,
  FileDoneOutlined,
  CloudOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import AccountShortcuts from "../account/AccountShortcuts";
import "./styles.scss";

type ActionMenuProps = {
  className: string;
  inAccount?: boolean;
};

const ActionMenu = ({ className, inAccount }: ActionMenuProps) => {
  const [id, setId] = useState("");
  const user = useGlobalStore();

  const MenuItems = [
    {
      label: <p style={{ marginLeft: "-8px" }}>{user?.fullname}</p>,
      icon: (
        <>
          <Avatar src={user?.image} size={34} />
        </>
      ),
      href: `/home/account_manager/${user?.userid}`,
    },
    {
      label: "Đang theo dõi",
      icon: (
        <>
          <HeartOutlined style={{ color: "red" }} />
        </>
      ),
      href: `/home/follow_user`,
    },
    {
      label: "Người theo dõi",
      icon: (
        <>
          <UserAddOutlined style={{ color: "green" }} />
        </>
      ),
      href: `/home/user_follow`,
    },
    {
      label: "Đã lưu",
      icon: (
        <>
          <FileDoneOutlined style={{ color: "purple" }} />
        </>
      ),
      href: `/home/follow_post`,
    },
    {
      label: "Bài đăng của tôi",
      icon: (
        <>
          <CloudOutlined />
        </>
      ),
      href: `/home/my_post`,
    },
    {
      label: <p style={{ color: "red" }}>Đăng xuất</p>,
      icon: (
        <>
          <LogoutOutlined style={{ color: "red" }} />
        </>
      ),
      href: `/auth/logout`,
    },
  ];

  useEffect(() => {
    setId(user?.userid);
  }, [user?.userid]);

  const router = useRouter();
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "rgba(0,0,0,0.04)",
            },
          },
        }}
      >
        <Affix offsetTop={80}>
          <div
            className={className}
            style={{ overflow: "auto", height: "92vh", width: 400 }}
          >
            <Flex vertical className="" align="start" justify="start">
              {MenuItems?.map((e) => (
                <Button
                  type="text"
                  key={e?.href}
                  style={{ width: 348, height: 56 }}
                  onClick={() => router.push(e?.href)}
                >
                  <Flex align="center" justify="start">
                    <Space>
                      <Flex align="center" style={{ fontSize: "26px" }}>
                        {e?.icon}
                      </Flex>
                      <div className="text-black font-semibold text-base ml-2">
                        {" "}
                        {e?.label}
                      </div>
                    </Space>
                  </Flex>
                </Button>
              ))}
              <div className="ml-4 w-[348px] border-b-gray-300 border-b-[1px] mt-2 mb-2" />
              <AccountShortcuts />
            </Flex>
          </div>
        </Affix>
      </ConfigProvider>
    </>
  );
};

export default ActionMenu;
