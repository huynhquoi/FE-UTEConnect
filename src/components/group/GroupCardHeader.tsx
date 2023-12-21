"use client";

import {
  Avatar,
  Card,
  CardProps,
  Col,
  ConfigProvider,
  Flex,
  Row,
  Space,
} from "antd";
import {
  Group,
  User,
  useFindUserInGroupQuery,
} from "@/graphql/controller-types";
import FollowButton from "../shared/FollowButon";
import { useGlobalStore } from "@/hook/useUser";
import PostForm from "../post/PostForm";
import ReportButton from "../shared/ReportButton";
import { useEffect, useState } from "react";
import GroupForm from "../group/GroupForm";
import JoinGroupForm from "./JoinGroupForm";
import DeleteGroupBtn from "./DeleteGroupBtn";

type GroupCardHeaderProps = {
  group?: Group;
  onReload: () => void;
};

const GroupCardHeader = ({
  group,
  onReload,
  ...props
}: CardProps & GroupCardHeaderProps) => {
  const user = useGlobalStore();
  const [reload, setReload] = useState(false);
  const { data, fetchMore } = useFindUserInGroupQuery({
    variables: {
      groupid: group?.groupid,
    },
  });
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
          <Row>
            <Col span={4}>
              <div className="ml-5">
                <Avatar size={172} src={group?.image} />
              </div>
            </Col>
            <Col span={20}>
              <div
                className="flex items-center justify-between"
                style={{ height: "100%" }}
              >
                <div className="flex flex-col items-start">
                  <div className="font-bold text-4xl ml-4">
                    {group?.groupname}
                  </div>
                </div>
                <Space direction="vertical">
                  <PostForm groupId={group?.groupid as number} />
                  <JoinGroupForm
                    groupId={group?.groupid as number}
                    onReload={() => onReload()}
                    typeSend={
                      data?.get_user_in_group?.some(
                        (e) => e?.user_usergroup?.userid === user?.userid
                      )
                        ? "leave"
                        : "join"
                    }
                  />
                  <DeleteGroupBtn groupId={group?.groupid as number} />
                </Space>
              </div>
            </Col>
          </Row>
        </Card>
      </ConfigProvider>
    </>
  );
};

export default GroupCardHeader;
