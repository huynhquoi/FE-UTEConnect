"use client";

import { RootState } from "@/store";
import { Affix, Button, ConfigProvider, Dropdown, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const items: MenuProps["items"] = [
    {
      label: "Việc làm IT",
      key: "job",
      children: [
        {
          label: "Kỹ năng",
          key: "job_skill",
        },
        {
          label: "Cấp bậc",
          key: "job_level",
        },
        {
          label: "Thành phố",
          key: "job_city",
        },
      ],
    },
    {
      label: "Công ty IT",
      key: "IT_company",
      children: [
        {
          label: "Công ty IT tốt nhất",
          key: "company",
        },
        {
          label: "Review công ty IT",
          key: "review_company",
        },
      ],
    },
    {
      label: "Blog IT",
      key: "blog",
    },
  ];

  const router = useRouter();
  const onHandleClick = (e: any) => {
    router.push(`/home/${e.key}`);
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
                <div className="font-bold text-lg mb-[2px]">IT Recruitment</div>
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
