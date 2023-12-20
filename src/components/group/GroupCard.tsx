import { Group, useFindUserInGroupQuery } from "@/graphql/controller-types";
import { Avatar, Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import dayjs from "dayjs";
import JoinGroupForm from "./JoinGroupForm";

type GroupCardProps = {
  group: Group;
};

const GroupCard = ({ group }: GroupCardProps) => {
  const { data } = useFindUserInGroupQuery({
    variables: {
      groupid: group?.groupid,
    },
  });
  return (
    <>
      <Card style={{ width: "94%", marginTop: "20px" }}>
        <Meta
          avatar={<Avatar src={group?.image} size={56} />}
          title={
            <>
              <Flex align="center" justify="space-between">
                <div className="text-base font-bold">{group?.groupname}</div>
                <JoinGroupForm groupId={group?.groupid as number} />
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
