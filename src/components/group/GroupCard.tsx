"use client";

import { Group, useFindUserInGroupQuery } from "@/graphql/controller-types";
import { Avatar, Button, Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import dayjs from "dayjs";
import JoinGroupForm from "./JoinGroupForm";
import { useGlobalStore } from "@/hook/useUser";
import { EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type GroupCardProps = {
  group: Group;
};

const GroupCard = ({ group }: GroupCardProps) => {
  const router = useRouter();
  const user = useGlobalStore();
  const { data, fetchMore } = useFindUserInGroupQuery({
    variables: {
      groupid: group?.groupid,
      limit: 100,
      pacing: 1,
    },
  });
  return (
    <>
      <Card style={{ width: "94%", marginTop: "20px" }}>
        <Meta
          avatar={
            <Avatar
              src={group?.image}
              size={56}
              onClick={() => router?.push(`./group/${group?.groupid}`)}
              className="cursor-pointer"
            />
          }
          title={
            <>
              <Flex align="center" justify="space-between">
                <div
                  className="text-base font-bold cursor-pointer"
                  onClick={() => router?.push(`./group/${group?.groupid}`)}
                >
                  {group?.groupname}
                </div>
                <Flex vertical>
                  <JoinGroupForm
                    onReload={() =>
                      fetchMore({
                        variables: {
                          groupid: group?.groupid,
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
                    groupId={group?.groupid as number}
                  />
                </Flex>
              </Flex>
            </>
          }
          description={
            <>
              <div className="">
                {dayjs(group?.createday as string)?.format("DD/MM/YYYY, HH:mm")}
              </div>
            </>
          }
        />
        <div
          className="mt-5 ml-2"
          dangerouslySetInnerHTML={{ __html: group?.description || "" }}
        ></div>
      </Card>
    </>
  );
};

export default GroupCard;
