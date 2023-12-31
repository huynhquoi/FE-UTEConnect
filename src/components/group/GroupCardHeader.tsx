"use client";

import { Affix, Card, CardProps, ConfigProvider, Flex, Space } from "antd";
import {
  Group,
  User_Group,
  useFindUserInGroupQuery,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import PostForm from "../post/PostForm";
import { useEffect, useState } from "react";
import JoinGroupForm from "./JoinGroupForm";
import DeleteGroupBtn from "./DeleteGroupBtn";
import { GlobalOutlined } from "@ant-design/icons";
import GroupCheckUser from "./GroupCheckUser";
import GroupForm from "./GroupForm";

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
  const { data, loading, fetchMore } = useFindUserInGroupQuery({
    variables: {
      groupid: group?.groupid,
      limit: 100,
      pacing: 1,
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
        <Affix offsetTop={70}>
          <Card {...props}>
            <Flex justify="center">
              <div
                className="flex items-center justify-between"
                style={{ height: "100%", width: "70%" }}
              >
                <div className="flex flex-col items-start">
                  <div className="font-bold text-2xl ml-4">
                    {group?.groupname}
                  </div>
                  <div className="text-base ml-4 mt-2">
                    <GlobalOutlined /> Diễn đàn có{" "}
                    {data?.get_user_in_group?.filter((e) => e?.checked)?.length}{" "}
                    thành viên
                  </div>
                </div>
                <Space>
                  <PostForm groupId={group?.groupid as number} />
                  {group?.user_group?.userid !== user?.userid ? (
                    <>
                      <JoinGroupForm
                        loading={loading}
                        groupId={group?.groupid as number}
                        onReload={() =>
                          fetchMore({
                            variables: {
                              groupid: group?.groupid,
                              limit: 100,
                              pacing: 1,
                            },
                          })
                        }
                        typeSend={
                          data?.get_user_in_group?.some(
                            (e) => e?.user_usergroup?.userid === user?.userid
                          )
                            ? "leave"
                            : "join"
                        }
                      />
                    </>
                  ) : (
                    <>
                      <GroupCheckUser
                        groupUser={
                          data?.get_user_in_group?.filter(
                            (e) => !e?.checked
                          ) as User_Group[]
                        }
                        onCheck={() =>
                          fetchMore({
                            variables: {
                              groupid: group?.groupid,
                            },
                          })
                        }
                      />
                      <GroupForm
                        groupId={group?.groupid as number}
                        group={group}
                        onReload={() => onReload()}
                      />
                      <DeleteGroupBtn groupId={group?.groupid as number} />
                    </>
                  )}
                </Space>
              </div>
            </Flex>
          </Card>
        </Affix>
      </ConfigProvider>
    </>
  );
};

export default GroupCardHeader;
