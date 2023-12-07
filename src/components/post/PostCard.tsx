"use client";

import { Avatar, Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import { Post, useCreateFollowMutation } from "@/graphql/controller-types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

type PostCardProps = {
  src?: string;
  post: Post;
};

const PostCard = ({ src, post }: PostCardProps) => {
  const router = useRouter();
  const [followId, setFollowId] = useState(0);
  const [followUserId, setUserFollowId] = useState("");

  const [CreateFollow] = useCreateFollowMutation();

  useEffect(() => {
    if (!followId) {
      return;
    }
    CreateFollow({
      variables: {
        postid: followId,
        userid: followUserId,
      },
    });
    setFollowId(0);
  }, [CreateFollow, followId, followUserId]);
  return (
    <>
      <Card style={{ width: "94%", marginTop: 20 }} className="job_card">
        <Meta
          avatar={
            <Avatar
              size={52}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            />
          }
          title={post.user_post?.fullname}
          description={
            <>{dayjs(post?.createday).format("DD/MM/YYYY, HH:mm")}</>
          }
        />
        <div
          style={{ borderBottom: "1px solid #f4f4f4" }}
          className="my-2 mx-[-16px]"
        ></div>
        <p className="font-bold text-xl mb-2">{post.title}</p>
        <div
          style={{ borderBottom: "1px solid #f4f4f4" }}
          className="my-2 mx-[-16px]"
        ></div>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => {
              router.push(`/home/post/${post.postid}`);
            }}
          >
            Xem chi tiết
          </Button>
          {localStorage.getItem("response") !== post?.user_post?.userid && (
            <Button
              onClick={() => {
                setFollowId(post?.postid);
                setUserFollowId(localStorage.getItem("response") as string);
              }}
            >
              Theo dõi
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};

export default PostCard;
