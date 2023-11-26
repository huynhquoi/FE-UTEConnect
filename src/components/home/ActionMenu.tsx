"use client";

import { Affix, Card, ConfigProvider, Menu, MenuProps } from "antd";

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
    getItem("Quản lý tài khoản", "manager"),
    getItem("Đăng xuất", "logout"),
  ]),

  getItem("Công ty của bạn", "your_company", null, [
    getItem("Công ty hiện tại", "current_company"),
    getItem("Công ty bạn đang theo dõi", "follow_company"),
  ]),

  getItem("Công việc của bạn", "your job", null, [
    getItem("Oông việc bạn đang theo dõi", "follow_job"),
  ]),
];

const ActionMenu = () => {
  const onClick: MenuProps["onClick"] = (e) => {
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
          <Menu
            onClick={onClick}
            style={{ width: 256, maxHeight: 256 }}
            mode="vertical"
            items={items}
            className="rounded-lg"
          />
        </Affix>
      </ConfigProvider>
    </>
  );
};

export default ActionMenu;
