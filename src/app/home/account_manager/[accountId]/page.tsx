"use client";

import AccountCardHeader from "@/components/account/AccountCardHeader";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Post,
  User,
  useGetAccountByPkQuery,
  useGetPostByUserIdQuery,
  useGetPostQuery,
} from "@/graphql/controller-types";
import { Col, ConfigProvider, Row } from "antd";
import { useParams } from "next/navigation";

const AccountDetailPage = () => {
  const params = useParams();
  const { data } = useGetPostByUserIdQuery({
    variables: { userId: params.accountId as string },
  });

  const { data: user } = useGetAccountByPkQuery({
    variables: { userId: params.accountId as string },
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
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              <AccountCardHeader
                user={user?.find_account_by_id as User}
                style={{ width: "100%" }}
                post={data?.find_post_by_userid?.length as number}
              />
            </div>
            <Row>
              <Col span={4}>
                <div className="mt-5">
                  <ActionMenu className="w-full flex items-center justify-start" />
                </div>
              </Col>
              <Col span={20}>
                <div className="w-full flex-col flex items-end justify-end">
                  {data?.find_post_by_userid?.map((p) => (
                    <PostCard key={p?.postid} post={p as Post} />
                  ))}
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
