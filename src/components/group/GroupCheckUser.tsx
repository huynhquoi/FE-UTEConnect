"use client";

import { Avatar, Button, Flex, List, Modal } from "antd";
import {
  UsergroupAddOutlined,
  CheckOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  User_Group,
  useAcceptUserMutation,
  useLeaveGroupMutation,
} from "@/graphql/controller-types";
import Link from "next/link";

type GroupCheckUserProps = {
  groupUser: User_Group[];
  onCheck: () => void;
};

const GroupCheckUser = ({ groupUser, onCheck }: GroupCheckUserProps) => {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [userAccept, setUserAccept] = useState<User_Group>();
  const [userReject, setUserReject] = useState<User_Group>();
  const [checkUser] = useAcceptUserMutation();
  const [leaveGroup] = useLeaveGroupMutation();

  useEffect(() => {
    if (!submit) {
      return;
    }
    if (userAccept?.user_groupid) {
      checkUser({
        variables: {
          userid: userAccept?.user_usergroup?.userid,
          groupid: userAccept?.group_usergroup?.groupid,
          check: 1,
        },
      }).then(() => {
        setSubmit(false);
        setUserAccept(undefined);
        void onCheck();
      });
    }
    if (userReject?.user_groupid) {
      leaveGroup({
        variables: {
          groupid: userReject?.group_usergroup?.groupid,
          userid: userReject?.user_usergroup?.userid,
        },
      }).then(() => {
        setSubmit(false);
        setUserReject(undefined);
        void onCheck();
      });
    }
  }, [
    checkUser,
    leaveGroup,
    onCheck,
    submit,
    userAccept?.group_usergroup?.groupid,
    userAccept?.user_groupid,
    userAccept?.user_usergroup?.userid,
    userReject?.group_usergroup?.groupid,
    userReject?.user_groupid,
    userReject?.user_usergroup?.userid,
  ]);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Flex align="center">
          <UsergroupAddOutlined />
        </Flex>
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title={"Yêu cầu tham gia"}
        footer={false}
      >
        <List
          itemLayout="horizontal"
          dataSource={groupUser as User_Group[]}
          renderItem={(item: User_Group) => (
            <List.Item
              actions={[
                <Button
                  onClick={() => {
                    setUserAccept(item);
                    setSubmit(true);
                  }}
                  key={1}
                >
                  <Flex>
                    <CheckOutlined />
                  </Flex>
                </Button>,
                <Button
                  onClick={() => {
                    setUserReject(item);
                    setSubmit(true);
                  }}
                  key={2}
                >
                  <Flex>
                    <DeleteOutlined />
                  </Flex>
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.user_usergroup?.image} />}
                title={
                  <Link
                    href={`/home/account_manager/${item?.user_usergroup?.userid}`}
                    target="__blank"
                  >
                    {item.user_usergroup?.fullname}
                  </Link>
                }
                description={`${item?.user_usergroup?.reputation} reputation`}
              />
            </List.Item>
          )}
        ></List>
      </Modal>
    </>
  );
};

export default GroupCheckUser;
