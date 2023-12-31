"use client";

import XInput from "@/components/core/XInput";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import { Avatar, Card, Col, ConfigProvider, Empty, Row, Skeleton } from "antd";
import { Post, useGetAllFollowPostQuery } from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import Meta from "antd/es/card/Meta";
import "./style.scss";

const FollowPostPage = () => {
  const user = useGlobalStore();

  const { data, loading } = useGetAllFollowPostQuery({
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
                data?.find_all_bookmark_by_userid?.length ? (
                  data?.find_all_bookmark_by_userid?.map((p) => (
                    <PostCard
                      className="post_card"
                      isFollow={true}
                      key={p?.post_bookmark?.postid}
                      post={p?.post_bookmark as Post}
                    />
                  ))
                ) : (
                  <Empty
                    style={{ marginTop: 20 }}
                    description={"Bạn chưa follow bài viết nào"}
                  />
                )
              ) : (
                <Card style={{ width: "94%", marginTop: 20 }}>
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

export default FollowPostPage;
