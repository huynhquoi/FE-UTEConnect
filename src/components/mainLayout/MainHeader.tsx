"use client";

import { RootState } from "@/store";
import {
  Affix,
  Badge,
  Button,
  ConfigProvider,
  DrawerProps,
  Dropdown,
  Image,
  Menu,
  MenuProps,
  Space,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import XImage from "../core/XImage";
import { User, useGetAccountByPkQuery } from "@/graphql/controller-types";
import { getProfileUser } from "@/store/slice";
import UserDisplay from "../shared/UserDisplay";
import { useEffect, useState } from "react";
import XNotification from "../core/XNotification";

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

const MainHeader = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const router = useRouter();
  const onHandleClick = (e: any) => {
    router.push(`/${e.key}`);
  };

  const {
    data,
    loading,
    fetchMore: getMe,
  } = useGetAccountByPkQuery({
    variables: { userId: id },
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setId(localStorage?.getItem("response") as string);
  }, []);

  useEffect(() => {
    if (!id) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    getMe({ variables: { userId: id } });
    dispatch(getProfileUser(data?.find_account_by_id as User));
  }, [loading, id]);

  const profileUser = useSelector(
    (state: RootState) => state.sliceReducer.profileUser
  ) as User;

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
                <XImage
                  preview={false}
                  onClick={() => router.push("/")}
                  width={28}
                  src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Su-Pham-Ky-Thuat-TP-Ho-Chi-Minh-HCMUTE.png"
                />
                <div className="font-bold text-lg mb-[2px] ml-2">
                  UTE Connect
                </div>
                <Menu
                  onClick={onHandleClick}
                  style={{ width: "600px" }}
                  mode="horizontal"
                  items={items}
                ></Menu>
              </div>
              {profileUser?.email && (
                <Space size={"large"}>
                  <XNotification />

                  <UserDisplay user={profileUser} />
                </Space>
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
