"use client";

import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Post,
  useGetAllTopicQuery,
  useGetPostByTopicQuery,
} from "@/graphql/controller-types";
import {
  Avatar,
  Card,
  Col,
  ConfigProvider,
  Empty,
  Row,
  Skeleton,
  Space,
  Flex,
  Affix,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.scss";

const TagPage = () => {
  const params = useParams();
  const [select, setSelect] = useState(parseInt(params?.topicid as string));
  const { data, loading, fetchMore } = useGetPostByTopicQuery({
    variables: {
      topicid: [select],
    },
  });
  const { data: topic } = useGetAllTopicQuery();
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
            colorPrimary: "#000000",
          },
        }}
      >
        <Row style={{ width: "full-width" }}>
          <Col span={7}>
            <ActionMenu className="w-full ml-4" />
          </Col>
          <Col span={10}>
            <div
              className={`w-full flex-col flex ${
                data?.find_post_by_topicid?.length
                  ? "items-center  justify-center"
                  : "items-center  justify-center"
              }`}
            >
              {!loading ? (
                data?.find_post_by_topicid?.length ? (
                  data?.find_post_by_topicid
                    ?.filter((e) => !e?.isdelete)
                    .map((p) => <PostCard key={p?.postid} post={p as Post} />)
                ) : (
                  <Empty
                    style={{}}
                    description={"Chủ đề này chưa có bài viết nào"}
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
          <Col span={7}>
            <Flex justify="end" className="mr-4">
              <Affix offsetTop={80}>
                <div
                  style={{ overflow: "auto", height: "92vh", width: "280px" }}
                >
                  <Space direction="vertical" className="">
                    {topic?.topic?.map((t) => (
                      <Card
                        key={t?.topicid}
                        style={{
                          width: "280px",
                          cursor: "pointer",
                          border: `${
                            select === t?.topicid ? "1px solid #000" : ""
                          }`,
                        }}
                        onClick={() => {
                          setSelect(t?.topicid as number);
                        }}
                      >
                        <Flex align="center" justify="center">
                          {t?.topicname}
                        </Flex>
                      </Card>
                    ))}
                  </Space>
                </div>
              </Affix>
            </Flex>
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default TagPage;
