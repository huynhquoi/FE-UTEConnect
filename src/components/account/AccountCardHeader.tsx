"use client";

import { Avatar, Card, CardProps, Col, ConfigProvider, Flex, Row } from "antd";
import { User } from "@/graphql/controller-types";
import FollowButton from "../shared/FollowButon";
import { useGlobalStore } from "@/hook/useUser";
import PostForm from "../post/PostForm";
import AccountForm from "./AccountForm";
import ReportButton from "../shared/ReportButton";
import { useEffect, useState } from "react";
import GroupForm from "../group/GroupForm";

type AccountCardHeaderProps = {
  user?: User;
  post: Number;
  onReload: () => void;
};

const AccountCardHeader = ({
  user,
  post,
  onReload,
  ...props
}: CardProps & AccountCardHeaderProps) => {
  const accountUser = useGlobalStore();
  const [reload, setReload] = useState(false);
  useEffect(() => {
    if (!reload) {
      return;
    }
    void onReload();
    setReload(false);
  }, [onReload, reload]);
  return (
    <>
      <ConfigProvider>
        <Card {...props}>
          <Flex justify="center">
            <div style={{ width: "70%" }}>
              <Row>
                <Col span={4}>
                  <div className="ml-5">
                    <Avatar size={172} src={user?.image} />
                  </div>
                </Col>
                <Col span={20}>
                  <div
                    className="flex items-center justify-between"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-start">
                      <div className="font-bold text-4xl ml-4">
                        {user?.fullname}
                      </div>
                      <div className=" text-lg ml-4 mt-2">
                        {post?.toString() || "0"} bài viết
                      </div>
                      <div className=" text-lg ml-4 mt-2">
                        {user?.reputation || "0"} reputations
                      </div>
                    </div>
                    {accountUser?.userid === user?.userid ? (
                      <>
                        <div className="flex items-start">
                          <PostForm />
                          <AccountForm onReload={() => setReload(true)} />
                          <GroupForm onReload={() => onReload()} />
                        </div>
                      </>
                    ) : (
                      <>
                        <FollowButton
                          userId={user?.userid as string}
                          followerId={accountUser?.userid}
                        />
                        <ReportButton userReportId={user?.userid} />
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </Flex>
        </Card>
      </ConfigProvider>
    </>
  );
};

export default AccountCardHeader;
