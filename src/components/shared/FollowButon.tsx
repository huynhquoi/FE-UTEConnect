"use client";

import {
  useCreateFollowUserMutation,
  useDeleteFollowUserMutation,
  useGetAllFollowUserQuery,
  useGetAllUserFollowAccountQuery,
} from "@/graphql/controller-types";
import { Button, ButtonProps } from "antd";
import { useEffect, useState } from "react";

type FollowButtonProps = {
  userId: String;
  followerId: String;
};

const FollowButton = ({
  userId,
  followerId,
  ...props
}: ButtonProps & FollowButtonProps) => {
  const [follower, setFollower] = useState("");

  const [createFollowUser] = useCreateFollowUserMutation();
  const [deleteFollowUser] = useDeleteFollowUserMutation();
  const { data, loading, fetchMore } = useGetAllFollowUserQuery({
    variables: {
      followerid: followerId as string,
    },
  });

  const { data: userF, fetchMore: loadUserF } = useGetAllUserFollowAccountQuery(
    {
      variables: {
        userid: userId as string,
      },
    }
  );

  useEffect(() => {
    if (!follower) {
      return;
    }

    if (follower === "follow") {
      createFollowUser({
        variables: {
          userid: userId as string,
          followerid: followerId as string,
        },
      }).then(() => {
        fetchMore({
          variables: {
            followerid: followerId as string,
          },
        });
        loadUserF({
          variables: {
            userid: userId as string,
          },
        });
      });
    } else {
      deleteFollowUser({
        variables: {
          userid: userId as string,
          followerid: followerId as string,
        },
      }).then(() => {
        fetchMore({
          variables: {
            followerid: followerId as string,
          },
        });
        loadUserF({
          variables: {
            userid: userId as string,
          },
        });
      });
    }
    setFollower("");
  }, [
    createFollowUser,
    deleteFollowUser,
    fetchMore,
    follower,
    followerId,
    loadUserF,
    userId,
  ]);

  return (
    <>
      {!data?.get_all_user_by_follower
        ?.map((e) => e?.userid)
        ?.some((e) => e === userId) ? (
        <Button
          loading={loading}
          {...props}
          onClick={() => setFollower("follow")}
        >
          Theo dõi
        </Button>
      ) : (
        <Button
          {...props}
          loading={loading}
          style={{ background: "#000", color: "#fff" }}
          onClick={() => setFollower("unFollow")}
        >
          Bỏ theo dõi
        </Button>
      )}
    </>
  );
};

export default FollowButton;
