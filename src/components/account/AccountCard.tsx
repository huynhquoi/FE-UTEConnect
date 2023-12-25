"use client";

import {
  User,
  useCreateNotificationMutation,
  useLeaveGroupMutation,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import { Avatar, Button, Card, Flex, Space } from "antd";
import FollowButton from "../shared/FollowButon";
import ReportButton from "../shared/ReportButton";
import { useEffect, useState } from "react";

type AccountCardProps = {
  user: User;
  inGroup?: boolean;
  groupId?: number;
  groupName?: string;
  onReload?: () => void;
};

const AccountCard = ({
  user,
  inGroup,
  groupId,
  groupName,
  onReload,
}: AccountCardProps) => {
  const accountUser = useGlobalStore();
  const [removeUser] = useLeaveGroupMutation();
  const [submit, setSubmit] = useState(false);
  const [createNoti] = useCreateNotificationMutation();

  useEffect(() => {
    if (!submit) {
      return;
    }
    removeUser({
      variables: {
        groupid: groupId,
        userid: user?.userid,
      },
    })
      .then(() => {
        createNoti({
          variables: {
            content: `Bạn đã bị mời khỏi nhóm <p className="font-bold">${groupName}</p>`,
            subject: 0,
            type: 10,
            userid: user?.userid,
          },
        });
      })
      .then(() => {
        setSubmit(false);
        if (typeof onReload === "function") {
          void onReload();
        }
      });
  }, [
    createNoti,
    groupId,
    groupName,
    onReload,
    removeUser,
    submit,
    user?.userid,
  ]);
  return (
    <>
      <Card style={{ width: "94%", marginTop: "20px" }}>
        <Flex justify="space-between">
          <Flex>
            <Avatar src={user?.image} size={64} />
            <Space direction="vertical" className="ml-4">
              <div className="text-xl mb-1 font-bold">{user?.fullname}</div>
              <div className="">{user?.email}</div>
              <div className="">Reputation: {user?.reputation}</div>
            </Space>
          </Flex>
          <Space direction="vertical">
            <FollowButton
              userId={user?.userid as string}
              followerId={accountUser?.userid}
            />
            <ReportButton userReportId={user?.userid} />
            {inGroup && (
              <Button onClick={() => setSubmit(true)}>Xóa khỏi nhóm</Button>
            )}
          </Space>
        </Flex>
      </Card>
    </>
  );
};

export default AccountCard;
