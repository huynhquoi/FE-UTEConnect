"use client";

import DeleteGroupBtn from "@/components/group/DeleteGroupBtn";
import GroupCardHeader from "@/components/group/GroupCardHeader";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Group,
  Post,
  User,
  useGetGroupByPkQuery,
  useGetGroupByUserPkQuery,
  useGetPostInGroupQuery,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import {
  Affix,
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
import XDescription from "@/components/core/XDescription";
import dayjs from "dayjs";
import UserDisplay from "@/components/shared/UserDisplay";

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
                groupid: parseInt(param?.groupId as string),
              },
            })
          }
        />
        <Row style={{ width: "full-width" }}>
          <Col span={4}></Col>
          <Col
            span={6}
            style={{ display: "flex !important" }}
            className="justify-end"
          >
            <Affix offsetTop={180} style={{width: "100%"}}>
              <div className="mt-5" style={{width: "100%"}}>
                <Card style={{width: "100%"}}>
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
          </Col>
          <Col span={4}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default GroupDetailPage;
