import {
  User,
  useGetNotificationQuery,
  useUpdateSeenNotificationMutation,
} from "@/graphql/controller-types";
import { Badge, Drawer, DrawerProps, List, Space } from "antd";
import dayjs from "dayjs";
import UserDisplay from "../shared/UserDisplay";

import "./style.scss";
import { useEffect, useState } from "react";
import { AlertFilled } from "@ant-design/icons";

const XNotification = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();
  const [notiIsSeen, setNotiIsSeen] = useState(0);
  const { data, fetchMore } = useGetNotificationQuery({
    variables: { userid: localStorage.getItem("response") },
  });

  const [UpdateSeen] = useUpdateSeenNotificationMutation();

  useEffect(() => {
    if (!notiIsSeen) {
      return;
    }
    UpdateSeen({
      variables: { noticeid: notiIsSeen },
    });
    setNotiIsSeen(0);
    fetchMore({ variables: { userid: localStorage.getItem("response") } });
  }, [UpdateSeen, fetchMore, notiIsSeen]);

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Badge
        size="small"
        count={
          data?.find_all_notice_by_userid?.filter((e) => !e?.isseen)?.length
        }
      >
        <AlertFilled
          style={{ fontSize: "20px", paddingTop: "0px" }}
          onClick={showDefaultDrawer}
        />
      </Badge>
      <Drawer
        title={`Thông báo`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
      >
        {data?.find_all_notice_by_userid?.length ? (
          <List
            size="large"
            dataSource={data?.find_all_notice_by_userid}
            renderItem={(item) => (
              <List.Item
                style={{ background: `${item?.isseen ? "" : "#e0f2fe"}` }}
                onClick={() => {
                  if (item?.isseen) {
                    return;
                  }
                  setNotiIsSeen(item?.noiticeid as number);
                }}
              >
                <Space direction="vertical">
                  <Space>
                    <UserDisplay user={item?.user_notice as User}></UserDisplay>
                    <div className="">
                      {dayjs(item?.createday).format("DD/MM/YYYY, HH:mm")}
                    </div>
                  </Space>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: item?.content as string,
                    }}
                  ></div>
                </Space>
              </List.Item>
            )}
          />
        ) : null}
      </Drawer>
    </>
  );
};

export default XNotification;
