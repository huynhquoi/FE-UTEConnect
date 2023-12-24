"use client";

import ActionMenu from "@/components/home/ActionMenu";
import { Avatar, Card, Col, ConfigProvider, Empty, Row, Skeleton } from "antd";
import {
  User,
  useGetAllUserFollowAccountQuery,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import AccountCard from "@/components/account/AccountCard";

const FollowUserPage = () => {
  const user = useGlobalStore();

  const { data, loading } = useGetAllUserFollowAccountQuery({
    variables: {
      userid: user?.userid,
    },
  });

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
            colorPrimary: "#000000",
          },
          components: {
            Select: {
              optionSelectedBg: "rgba(0, 0, 0, 0.04)",
            },
          },
        }}
      >
        <Row style={{ width: "full-width" }}>
          <Col span={7}>
            <ActionMenu className="w-full ml-4" />
          </Col>
          <Col span={10}>
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              {!loading ? (
                data?.get_all_follower_by_user?.length ? (
                  data?.get_all_follower_by_user?.map((p) => (
                    <AccountCard key={p?.userid} user={p as User} />
                  ))
                ) : (
                  <Empty
                    style={{ marginTop: 20 }}
                    description={"Chưa có user nào follow bạn"}
                  />
                )
              ) : (
                <Card style={{ width: "94%" }}>
                  <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton>
                </Card>
              )}
            </div>
          </Col>
          <Col span={7}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default FollowUserPage;
