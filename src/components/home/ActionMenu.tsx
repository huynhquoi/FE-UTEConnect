"use client";

import { useGlobalStore } from "@/hook/useUser";
import { Affix, Card, ConfigProvider, Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Tài khoản của bạn", "account", null, [
    getItem("Quản lý tài khoản", "/home/account_manager"),
    getItem("Đăng xuất", "/auth/logout"),
  ]),

  getItem("Bài đăng", "post", null, [
    getItem("Đang theo dõi", "/home/follow_post"),
    getItem("Bài đăng của tôi", "/home/my_post"),
  ]),

  getItem("Diễn đàn", "forum", null, [
    getItem("Đang tham gia", "/home/participate_forum"),
  ]),
];

type ActionMenuProps = {
  className: string;
};

const ActionMenu = ({ className }: ActionMenuProps) => {
  const [id, setId] = useState("");
  const user = useGlobalStore();

  useEffect(() => {
    setId(user?.userid);
  }, [user?.userid]);

  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "/home/account_manager") {
      router.push(`${e.key}/${id}`);
    } else {
      router.push(`${e.key}`);
    }
    console.log("click", e);
  };
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
        <Affix offsetTop={60}>
          <div className={className}>
            <Menu
              onClick={onClick}
              style={{ width: 256, maxHeight: 256 }}
              mode="vertical"
              items={items}
              className="rounded-lg"
            />
          </div>
        </Affix>
      </ConfigProvider>
    </>
  );
};

export default ActionMenu;
