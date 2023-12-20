"use client";

import { Button, Flex, Form, Modal } from "antd";

import { UsergroupAddOutlined, LogoutOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/hook/useUser";
import {
  useJoinGroupMutation,
  useLeaveGroupMutation,
} from "@/graphql/controller-types";

type JoinGroupFormProps = {
  typeSend: "join" | "leave";
  groupId: number;
};

const JoinGroupForm = ({ groupId, typeSend }: JoinGroupFormProps) => {
  const user = useGlobalStore();
  const [submit, setSubmit] = useState(false);
  const [joinGroup] = useJoinGroupMutation({});
  const [leaveGroup] = useLeaveGroupMutation({});

  useEffect(() => {
    if (!submit) {
      return;
    }
    if (typeSend === "join") {
      joinGroup({
        variables: {
          groupid: groupId,
          userid: user?.userid,
        },
      }).then(() => {
        setSubmit(false);
      });
    } else {
      leaveGroup({
        variables: {
          groupid: groupId,
          userid: user?.userid,
        },
      }).then(() => {
        setSubmit(false);
      });
    }
  }, [groupId, joinGroup, leaveGroup, submit, typeSend, user?.userid]);

  return (
    <>
      <Button onClick={() => setSubmit(true)}>
        <Flex align="center">
          {typeSend === "join" ? <UsergroupAddOutlined /> : <LogoutOutlined />}
        </Flex>
      </Button>
    </>
  );
};

export default JoinGroupForm;
