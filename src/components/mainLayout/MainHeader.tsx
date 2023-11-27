"use client";

import { RootState } from "@/store";
import {
  Affix,
  Button,
  ConfigProvider,
  Dropdown,
  Image,
  Menu,
  MenuProps,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import XImage from "../core/XImage";

const MainHeader = () => {
  const items: MenuProps["items"] = [
    {
      label: "Trang chủ",
      key: "home",
    },
    {
      label: "Chủ đề",
      key: "home/tag",
    },
    {
      label: "Diễn đàn",
      key: "home/forum",
    },
  ];

  const router = useRouter();
  const onHandleClick = (e: any) => {
    router.push(`/${e.key}`);
  };

  const profileUser = useSelector(
    (state: RootState) => state.sliceReducer.profileUser
  ) as any;
  console.log(profileUser);

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedColor: "#000000",
              horizontalItemSelectedColor: "#000000",
              horizontalItemHoverColor: "#000000",
              activeBarBorderWidth: 0,
            },
            Layout: {
              headerHeight: 46,
              headerBg: "#ffffff",
            },
          },
        }}
      >
        <Affix offsetTop={0}>
          <div style={{ width: "99vw" }}>
            <Header className="flex items-center justify-between">
              <div className="flex items-center">
                <XImage preview={false} onClick={() => router.push("/")}  width={28} src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Su-Pham-Ky-Thuat-TP-Ho-Chi-Minh-HCMUTE.png" />
                <div className="font-bold text-lg mb-[2px] ml-2">UTE Connect</div>
                <Menu
                  onClick={onHandleClick}
                  style={{ width: "600px" }}
                  mode="horizontal"
                  items={items}
                ></Menu>
              </div>
              {profileUser.email ? (
                <>Hello A</>
              ) : (
                <div className="">
                  <Button
                    href="/auth/login"
                    className="mr-4"
                    style={{
                      background: "#000000",
                      color: "#ffffff",
                      borderColor: "#000000",
                    }}
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    href="/auth/login"
                    style={{
                      background: "#ffffff",
                      color: "#000000",
                      borderColor: "#000000",
                    }}
                  >
                    Đăng ký
                  </Button>
                </div>
              )}
            </Header>
            <div className="border-b-black border-b-2"></div>
          </div>
        </Affix>
      </ConfigProvider>
    </>
  );
};

export default MainHeader;
