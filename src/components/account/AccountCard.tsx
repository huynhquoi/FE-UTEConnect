"use client";

import { User } from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import { Avatar, Card, Flex, Space } from "antd";
import FollowButton from "../shared/FollowButon";
import ReportButton from "../shared/ReportButton";

type AccountCardProps = {
  user: User;
};

const AccountCard = ({ user }: AccountCardProps) => {
  const accountUser = useGlobalStore();
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
          </Space>
        </Flex>
      </Card>
    </>
  );
};

export default AccountCard;
