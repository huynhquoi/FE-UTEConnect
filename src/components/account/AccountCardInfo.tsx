import { User } from "@/graphql/controller-types";
import { Affix, Card, CardProps, Flex, Space, Tooltip } from "antd";
import dayjs from "dayjs";

type AccountCardInfoProps = {
  user: User;
};

const AccountCardInfo = ({
  user,
  ...props
}: AccountCardInfoProps & CardProps) => {
  return (
    <div className="mt-5">
      <Affix offsetTop={80}>
        <Card {...props}>
          <Flex justify="space-between">
            <Space direction="vertical">
              <div className="font-bold">Ngày sinh</div>
              <div className="font-bold">Email</div>
              <div className="font-bold">Địa chỉ</div>
              <div className="font-bold">Giới tính</div>
            </Space>
            <Space direction="vertical">
              <div className="">
                {dayjs(user?.birthday).format("DD/MM/YYYY")}
              </div>
              <Tooltip title={user?.address}>
                <div className="whitespace-nowrap overflow-hidden w-40">
                  {user?.email}
                </div>
              </Tooltip>

              <Tooltip title={user?.email}>
                <div className="whitespace-nowrap overflow-hidden w-44">
                  {user?.address}
                </div>
              </Tooltip>

              <div className="">{user?.gender}</div>
            </Space>
          </Flex>
        </Card>
      </Affix>
    </div>
  );
};

export default AccountCardInfo;
