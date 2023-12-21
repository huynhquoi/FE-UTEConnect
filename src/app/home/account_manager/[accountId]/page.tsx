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

  const { data: adminGroup } = useGetGroupByAdminQuery({
    variables: {
      admin: accountUser?.userid,
    },
  });

  const { data: userGroup } = useGetGroupByUserPkQuery({
    variables: {
      userid: accountUser?.userid,
    },
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
              <AccountCardHeader
                user={user?.find_account_by_id as User}
                style={{ width: "100%" }}
                post={data?.find_post_by_userid?.length as number}
                onReload={loadMore}
              />
            </div>
            <Row>
              <Col span={7}>
                <div className="mt-5">
                  <ActionMenu
                    inAccount={true}
                    className="w-full flex items-center justify-start"
                  />
                  {accountUser?.userid === user?.find_account_by_id?.userid && (
                    <>
                      <div className="mt-4">
                        <Card>
                          <div className="text base">Nhóm bạn đang quản lý</div>
                        </Card>
                        {adminGroup?.get_group_by_admin?.length ? (
                          adminGroup?.get_group_by_admin?.map((e) => (
                            <div className="mt-2" key={e?.groupid}>
                              <Card
                                onClick={() =>
                                  router?.push(`/home/group/${e?.groupid}`)
                                }
                                className="cursor-pointer"
                              >
                                <Flex>
                                  <Avatar src={e?.image} size={48} />
                                  <Space direction="vertical" className="ml-3">
                                    <div className="font-bold text-base">
                                      {e?.groupname}
                                    </div>
                                    <div className="">
                                      {dayjs(e?.createday as string)?.format(
                                        "DD/MM/YYYY, HH:mm"
                                      )}
                                    </div>
                                    <div className="">{e?.reputaion}</div>
                                    <div
                                      className=""
                                      dangerouslySetInnerHTML={{
                                        __html: e?.description || "",
                                      }}
                                    ></div>
                                  </Space>
                                </Flex>
                              </Card>
                            </div>
                          ))
                        ) : (
                          <Empty
                            className="mt-2"
                            description={"Bạn chưa quản lý nhóm nào"}
                          />
                        )}
                      </div>
                      <div className="mt-4">
                        <Card>
                          <div className="text base">
                            Nhóm bạn đang tham gia
                          </div>
                        </Card>
                        {userGroup?.get_group_by_userid?.length ? (
                          userGroup?.get_group_by_userid?.map((e) => (
                            <div className="mt-2" key={e?.groupid}>
                              <Card
                                onClick={() =>
                                  router.push(`/home/group/${e?.groupid}`)
                                }
                                className="cursor-pointer"
                              >
                                <Flex>
                                  <Avatar src={e?.image} size={48} />
                                  <Space direction="vertical" className="ml-3">
                                    <div className="font-bold text-base">
                                      {e?.groupname}
                                    </div>
                                    <div className="">
                                      {dayjs(e?.createday as string)?.format(
                                        "DD/MM/YYYY, HH:mm"
                                      )}
                                    </div>
                                    <div className="">{e?.reputaion}</div>
                                    <div
                                      className=""
                                      dangerouslySetInnerHTML={{
                                        __html: e?.description || "",
                                      }}
                                    ></div>
                                  </Space>
                                </Flex>
                              </Card>
                            </div>
                          ))
                        ) : (
                          <Empty
                            className="mt-2"
                            description={
                              "Bạn chưa tham gia nhóm nào với vài trò thành viên"
                            }
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
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
