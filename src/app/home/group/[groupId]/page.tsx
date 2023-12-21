"use client";

import DeleteGroupBtn from "@/components/group/DeleteGroupBtn";
import GroupCardHeader from "@/components/group/GroupCardHeader";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Group,
  Post,
  useGetGroupByPkQuery,
  useGetGroupByUserPkQuery,
  useGetPostInGroupQuery,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import {
  Avatar,
  Card,
  Col,
  ConfigProvider,
  Empty,
  Flex,
  Row,
  Skeleton,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useParams } from "next/navigation";
import "./styles.scss";
import XImage from "@/components/core/XImage";
import GroupImageHeader from "@/components/group/GroupImageHeader";

const GroupDetailPage = () => {
  const param = useParams();
  const user = useGlobalStore();
  const { data, fetchMore } = useGetGroupByPkQuery({
    variables: {
      groupid: parseInt(param?.groupId as string),
    },
  });

  const { data: post, loading } = useGetPostInGroupQuery({
    variables: {
      groupid: data?.get_group_by_groupid?.groupid,
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
        }}
      >
        <GroupImageHeader image={data?.get_group_by_groupid?.image || ""} />
        <GroupCardHeader
          bordered={false}
          style={{ borderRadius: 0 }}
          group={data?.get_group_by_groupid as Group}
          onReload={() =>
            fetchMore({
              variables: {
                userid: user?.userid,
              },
            })
          }
        />
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
                  
                </div>
              </Col>
              <Col span={20}>
                <div
                  className={`w-full flex-col flex ${
                    post?.find_post_in_group?.length
                      ? "items-end  justify-end"
                      : "items-center  justify-center"
                  }`}
                >
                  {!loading ? (
                    post?.find_post_in_group?.length ? (
                      post?.find_post_in_group
                        ?.filter((e) => !e?.isdelete)
                        .map((p) => (
                          <PostCard key={p?.postid} post={p as Post} />
                        ))
                    ) : (
                      <Empty
                        style={{ marginTop: 20 }}
                        description={"Bạn chưa có bài viết nào"}
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

export default GroupDetailPage;
