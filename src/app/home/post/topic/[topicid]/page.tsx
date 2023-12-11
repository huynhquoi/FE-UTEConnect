"use client";

import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import { Post, useGetPostByTopicQuery } from "@/graphql/controller-types";
import { Avatar, Card, Col, ConfigProvider, Empty, Row, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { useParams } from "next/navigation";

const TagPage = () => {
  const params = useParams();
  const { data, loading } = useGetPostByTopicQuery({
    variables: {
      topicid: [parseInt(params?.topicid as string)],
    },
  });

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
            <Row>
              <Col span={4}>
                <div className="mt-5">
                  <ActionMenu className="w-full flex items-center justify-start" />
                </div>
              </Col>
              <Col span={20}>
                <div
                  className={`w-full flex-col flex ${
                    data?.find_post_by_topicid?.length
                      ? "items-end  justify-end"
                      : "items-center  justify-center"
                  }`}
                >
                  {!loading ? (
                    data?.find_post_by_topicid?.length ? (
                      data?.find_post_by_topicid
                        ?.filter((e) => !e?.isdelete)
                        .map((p) => (
                          <PostCard key={p?.postid} post={p as Post} />
                        ))
                    ) : (
                      <Empty
                        style={{ marginTop: 20 }}
                        description={"Chủ đề này chưa có bài viết nào"}
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
            </Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default TagPage;
