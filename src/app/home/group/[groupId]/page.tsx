"use client";

import DeleteGroupBtn from "@/components/group/DeleteGroupBtn";
import GroupCardHeader from "@/components/group/GroupCardHeader";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Group,
  Post,
  User,
  useFindUserInGroupQuery,
  useGetGroupByPkQuery,
  useGetGroupByUserPkQuery,
  useGetPostInGroupQuery,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import {
  Affix,
  Avatar,
  Button,
  Card,
  Col,
  ConfigProvider,
  Empty,
  Flex,
  Row,
  Skeleton,
  Space,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useParams } from "next/navigation";
import "./styles.scss";
import XImage from "@/components/core/XImage";
import GroupImageHeader from "@/components/group/GroupImageHeader";
import XDescription from "@/components/core/XDescription";
import dayjs from "dayjs";
import UserDisplay from "@/components/shared/UserDisplay";
import { useState } from "react";
import AccountCard from "@/components/account/AccountCard";

const GroupDetailPage = () => {
  const param = useParams();
  const user = useGlobalStore();
  const [tab, setTab] = useState("main");
  const { data, fetchMore } = useGetGroupByPkQuery({
    variables: {
      groupid: parseInt(param?.groupId as string),
    },
  });

  const {
    data: groupUser,
    loading: loadUser,
    fetchMore: fetUser,
  } = useFindUserInGroupQuery({
    variables: {
      groupid: parseInt(param?.groupId as string),
      pacing: 1,
      limit: 100,
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
                groupid: parseInt(param?.groupId as string),
              },
            })
          }
        />
        <Card bordered={false} style={{ borderRadius: 0 }}>
          <Flex justify="center">
            <div style={{ width: "70%" }}>
              <Space>
                <Button type="text" onClick={() => setTab("main")}>
                  Bài viết
                </Button>
                <Button type="text" onClick={() => setTab("member")}>
                  Thành viên
                </Button>
              </Space>
            </div>
          </Flex>
        </Card>
        <Row style={{ width: "full-width" }}>
          <Col span={4}></Col>
          <Col
            span={6}
            style={{ display: "flex !important" }}
            className="justify-end"
          >
            <Affix offsetTop={180} style={{ width: "100%" }}>
              <div className="mt-5" style={{ width: "100%" }}>
                <Card style={{ width: "100%" }}>
                  <div className="text-xl font-bold">Thông tin nhóm</div>
                  <div className="text-base font-semibold mt-2">
                    Thành lập ngày
                  </div>
                  <div className="text-base mt-2 ml-4">
                    {dayjs(
                      data?.get_group_by_groupid?.createday as string
                    ).format("DD/MM/YYYY, HH:mm")}
                  </div>
                  <div className="text-base font-semibold mt-2">
                    Quản lý của nhóm
                  </div>
                  <div className="text-base mt-2 ml-4">
                    <UserDisplay
                      user={data?.get_group_by_groupid?.user_group as User}
                    />
                  </div>
                  <div className="text-base font-semibold mt-2">Giới thiệu</div>
                  <div className="text-base">
                    <XDescription
                      value={data?.get_group_by_groupid?.description as string}
                    />
                  </div>
                </Card>
              </div>
            </Affix>
          </Col>
          <Col span={10}>
            {tab === "main" ? (
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
                      .map((p) => <PostCard key={p?.postid} post={p as Post} />)
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
            ) : (
              <div
                className={`w-full flex-col flex ${
                  post?.find_post_in_group?.length
                    ? "items-end  justify-end"
                    : "items-center  justify-center"
                }`}
              >
                {!loadUser ? (
                  groupUser?.get_user_in_group?.length ? (
                    groupUser?.get_user_in_group?.map((u) => (
                      <AccountCard
                        key={u?.user_groupid}
                        user={u?.user_usergroup as User}
                        groupId={parseInt(param?.groupId as string)}
                        inGroup={true}
                        onReload={() =>
                          fetUser({
                            variables: {
                              groupid: parseInt(param?.groupId as string),
                              pacing: 1,
                              limit: 100,
                            },
                          })
                        }
                        groupName={
                          data?.get_group_by_groupid?.groupname as string
                        }
                      />
                    ))
                  ) : (
                    <Empty
                      style={{ marginTop: 20 }}
                      description={"Chưa có thành viên nào"}
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
            )}
          </Col>
          <Col span={4}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default GroupDetailPage;
