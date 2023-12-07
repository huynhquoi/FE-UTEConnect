"use client";

import { User } from "@/graphql/controller-types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type UserDisplayProps = {
  user: User;
};

const UserDisplay = ({ user }: UserDisplayProps) => {
  const router = useRouter();
  return (
    <>
      <div className=" flex items-center">
        <Avatar
          src={user?.image || null}
          icon={user?.image ? null : <UserOutlined />}
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
        />
        {user?.fullname && (
          <div
            className="ml-2"
            onClick={() => router.push(`/home/account_manager/${user?.userid}`)}
          >
            {user?.fullname}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDisplay;
