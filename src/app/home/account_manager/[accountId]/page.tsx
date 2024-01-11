"use client";

import AccountCardHeader from "@/components/account/AccountCardHeader";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Post,
  User,
  useGetAccountByPkQuery,
  useGetGroupByAdminQuery,
  useGetGroupByUserPkQuery,
  useGetPostByUserIdQuery,
  useGetPostQuery,
} from "@/graphql/controller-types";
import {
  Avatar,
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
import { useGlobalStore } from "@/hook/useUser";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import AccountShortcuts from "@/components/account/AccountShortcuts";
import GroupImageHeader from "@/components/group/GroupImageHeader";
import AccountCardInfo from "@/components/account/AccountCardInfo";

const AccountDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const accountUser = useGlobalStore();
  const { data, loading } = useGetPostByUserIdQuery({
    variables: { userId: params.accountId as string },
  });

  const { data: user, fetchMore } = useGetAccountByPkQuery({
    variables: { userId: params.accountId as string },
  });

  const loadMore = () => {
    fetchMore({
      variables: { userId: params.accountId as string },
    });
  };

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
        <GroupImageHeader image={user?.find_account_by_id?.image || ""} />
        <AccountCardHeader
          user={user?.find_account_by_id as User}
          style={{ width: "100%", borderRadius: 0 }}
          post={data?.find_post_by_userid?.length as number}
          onReload={loadMore}
          bordered={false}
        />
        <Row style={{ width: "full-width" }}>
          <Col
            span={4}
            style={{ display: "flex !important" }}
            className="justify-end"
          ></Col>
          <Col span={16}>
            <Row>
              <Col span={7}>
                {user?.find_account_by_id?.userid === accountUser?.userid ? (
                  <div className="mt-5">
                    <ActionMenu inAccount={true} className="w-full" />
                  </div>
                ) : (
                  <AccountCardInfo user={user?.find_account_by_id as User} />
                )}
              </Col>
              <Col span={17}>
                <div
                  className={`w-full flex-col flex ${
                    data?.find_post_by_userid?.length
                      ? "items-end  justify-end"
                      : "items-center  justify-center"
                  }`}
                >
                  {!loading ? (
                    data?.find_post_by_userid?.length ? (
                      data?.find_post_by_userid
                        ?.filter((e) => !e?.isdelete && !e?.group_post?.groupid)
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

export default AccountDetailPage;
