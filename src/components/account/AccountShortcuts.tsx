"use client";

import {
  useGetGroupByAdminQuery,
  useGetGroupByUserPkQuery,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import { Avatar, Card, Empty, Flex, Space } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import "./styles.scss";

const AccountShortcuts = () => {
  const router = useRouter();
  const accountUser = useGlobalStore();
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
  return (
    <>
      <div className="ml-4">
        <div className="font-semibold" style={{ fontSize: "18px" }}>
          Nhóm bạn đang quản lý
        </div>
        {adminGroup?.get_group_by_admin?.length
          ? adminGroup?.get_group_by_admin?.map((e) => (
              <div className="mt-4" key={e?.groupid}>
                <Card
                  onClick={() => router?.push(`/home/group/${e?.groupid}`)}
                  className="cursor-pointer card_short"
                  style={{ background: "none" }}
                >
                  <Flex>
                    <Avatar src={e?.image} size={48} />
                    <Space direction="vertical" className="ml-3">
                      <div className="font-bold text-base">{e?.groupname}</div>
                      <div className="">
                        {dayjs(e?.createday as string)?.format(
                          "DD/MM/YYYY, HH:mm"
                        )}
                      </div>
                      <div className="">{e?.reputaion}</div>
                    </Space>
                  </Flex>
                </Card>
              </div>
            ))
          : //   <Empty className="mt-2" description={"Bạn chưa quản lý nhóm nào"} />
            null}
      </div>
      <div className="mt-4 ml-4">
        <div className="font-semibold" style={{ fontSize: "18px" }}>
          Nhóm bạn đang tham gia
        </div>
        {userGroup?.get_group_by_userid?.length
          ? userGroup?.get_group_by_userid?.map((e) => (
              <div className="mt-4" key={e?.groupid}>
                <Card
                  onClick={() => router.push(`/home/group/${e?.groupid}`)}
                  className="cursor-pointer card_short"
                  style={{ background: "none" }}
                >
                  <Flex>
                    <Avatar src={e?.image} size={48} />
                    <Space direction="vertical" className="ml-3">
                      <div className="font-bold text-base">{e?.groupname}</div>
                      <div className="">
                        {dayjs(e?.createday as string)?.format(
                          "DD/MM/YYYY, HH:mm"
                        )}
                      </div>
                      <div className="">{e?.reputaion}</div>
                    </Space>
                  </Flex>
                </Card>
              </div>
            ))
          : //   <Empty
            //     className="mt-2"
            //     description={"Bạn chưa tham gia nhóm nào với vài trò thành viên"}
            //   />
            null}
      </div>
    </>
  );
};

export default AccountShortcuts;
