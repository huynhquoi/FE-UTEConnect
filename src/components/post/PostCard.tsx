"use client";

import { Avatar, Button, Card, CardProps, Flex, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import {
  Post,
  useCreateFollowMutation,
  useDeleteFollowMutation,
  useDeletePostByPkMutation,
  useGetAllFollowPostQuery,
  useGetPostByKeyWordsQuery,
  useGetPostByUserIdQuery,
} from "@/graphql/controller-types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useGlobalStore } from "@/hook/useUser";
import XImage from "../core/XImage";

type PostCardProps = {
  src?: string;
  post: Post;
  isFollow?: Boolean;
};

const PostCard = ({
  src,
  post,
  isFollow,
  ...props
}: PostCardProps & CardProps) => {
  const router = useRouter();
  const user = useGlobalStore();
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [followStatus, setFollowStatus] = useState("");

  const [DeletePost] = useDeletePostByPkMutation();

  const [CreateFollow] = useCreateFollowMutation();
  const [DeleteFollow] = useDeleteFollowMutation();

  const { fetchMore: fetchPost } = useGetPostByUserIdQuery({
    variables: { userId: post?.user_post?.userid as string },
  });

  const { fetchMore: fetchKeywordPost } = useGetPostByKeyWordsQuery({
    variables: { keyword: "" },
  });

  const { fetchMore: getFollowPost } = useGetAllFollowPostQuery({
    variables: {
      userid: user?.userid,
    },
  });

  useEffect(() => {
    if (!isDeleted) {
      return;
    }

    DeletePost({
      variables: {
        postid: post?.postid,
      },
    }).then(() => {
      fetchPost({
        variables: {
          userid: user?.userid,
        },
      });
      fetchKeywordPost({
        variables: { keyword: "" },
      });
    });
    setIsDeleted(false);
    setDeleteVisible(false);
  }, [
    DeletePost,
    fetchKeywordPost,
    fetchPost,
    isDeleted,
    post?.postid,
    user?.userid,
  ]);

  useEffect(() => {
    if (!followStatus) {
      return;
    }
    if (followStatus === "follow") {
      CreateFollow({
        variables: {
          postid: post?.postid,
          userid: user?.userid,
        },
      }).then(() => {
        getFollowPost({
          variables: {
            userid: user?.userid,
          },
        });
      });
    } else if (followStatus === "unFollow") {
      DeleteFollow({
        variables: {
          postid: post?.postid,
          userid: user?.userid,
        },
      }).then(() => {
        getFollowPost({
          variables: {
            userid: user?.userid,
          },
        });
      });
    }
    setFollowStatus("");
  }, [
    CreateFollow,
    DeleteFollow,
    followStatus,
    getFollowPost,
    post?.postid,
    user?.userid,
  ]);
  return (
    <>
      <Card
        style={{ width: "94%", marginTop: 20 }}
        {...props}
        className="job_card"
      >
        <Meta
          avatar={
            <Avatar
              size={52}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
              onClick={() =>
                router.push(`/home/account_manager/${post?.user_post?.userid}`)
              }
              style={{ cursor: "pointer" }}
            />
          }
          title={
            <Flex align="center" justify="space-between">
              <div
                onClick={() =>
                  router.push(
                    `/home/account_manager/${post?.user_post?.userid}`
                  )
                }
                style={{ cursor: "pointer", fontSize: "16px" }}
              >
                {post.user_post?.fullname}
              </div>
              {user?.userid === post?.user_post?.userid && (
                <Button onClick={() => setDeleteVisible(true)}>Xóa</Button>
              )}
            </Flex>
          }
          description={
            <>{dayjs(post?.createday).format("DD/MM/YYYY, HH:mm")}</>
          }
        />
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/home/post/${post.postid}`);
          }}
        >
          <div
            style={{ borderBottom: "1px solid #f4f4f4" }}
            className="my-2 mx-[-16px]"
          ></div>
          <p className="font-bold text-xl mb-2">{post.title}</p>
          <XImage preview={false} src={post?.image as string} />
          <div
            style={{ borderBottom: "1px solid #f4f4f4" }}
            className="my-2 mx-[-16px]"
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => {
              router.push(`/home/post/${post.postid}`);
            }}
          >
            Xem chi tiết
          </Button>
          {user?.userid !== post?.user_post?.userid &&
            (!isFollow ? (
              <Button
                onClick={() => {
                  setFollowStatus("follow");
                }}
              >
                Theo dõi
              </Button>
            ) : (
              <Button
                style={{
                  background: "#000",
                  color: "#fff",
                }}
                onClick={() => {
                  setFollowStatus("unFollow");
                }}
              >
                Bỏ theo dõi
              </Button>
            ))}
        </div>
      </Card>
      <Modal
        centered
        title={"Thông báo"}
        open={deleteVisible}
        width={400}
        onCancel={() => setDeleteVisible(false)}
        onOk={() => setIsDeleted(true)}
      >
        <p>Bạn có chắc chắn muốn xóa bài viết này không?</p>
      </Modal>
    </>
  );
};

export default PostCard;
