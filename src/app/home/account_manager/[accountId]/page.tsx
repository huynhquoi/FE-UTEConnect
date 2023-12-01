"use client";

import AccountCardHeader from "@/components/account/AccountCardHeader";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import { Col, ConfigProvider, Row } from "antd";
import { useParams } from "next/navigation";

const AccountDetailPage = () => {
  const params = useParams();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
            colorPrimary: "#000000",
          },
        }}
      >
        <Row style={{ width: "full-width" }}>
          <Col
            span={4}
            style={{ display: "flex !important" }}
            className="justify-end"
          ></Col>
          <Col span={16}>
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              <AccountCardHeader style={{ width: "100%" }} />
            </div>
            <Row>
              <Col span={4}>
                <div className="mt-5">
                  <ActionMenu className="w-full flex items-center justify-start" />
                </div>
              </Col>
              <Col span={20}>
                <div className="w-full flex-col flex items-end justify-end">
                  <PostCard
                    title="Back-end Development"
                    src="https://img.freepik.com/free-photo/group-of-people-working-out-business-plan-in-an-office_1303-15861.jpg?w=1380&t=st=1700810701~exp=1700811301~hmac=8c50b88f8722c19d4c1a6b21bf043b4d26f9c869be506a9067f57da54eaef25c"
                  />
                  <PostCard
                    title="Back-end Development"
                    src="https://img.freepik.com/free-photo/group-of-people-working-out-business-plan-in-an-office_1303-15861.jpg?w=1380&t=st=1700810701~exp=1700811301~hmac=8c50b88f8722c19d4c1a6b21bf043b4d26f9c869be506a9067f57da54eaef25c"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default AccountDetailPage;
