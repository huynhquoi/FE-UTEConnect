"use client";

import { Avatar, Button, Card, CardProps, Flex, Modal, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import {
  Post,
  useDeletePostByPkMutation,
  useGetPostByKeyWordsQuery,
  useGetPostByUserIdQuery,
} from "@/graphql/controller-types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAllBookmark, useGlobalStore } from "@/hook/useUser";
import XImage from "../core/XImage";
import PostAction from "./PostAction";
import PostFollow from "./PostFollow";

type PostCardProps = {
  src?: string;
  post: Post;
  isFollow?: Boolean;
};

const PostCard = ({
  src,
  post,
  isFollow,
  className,
  ...props
}: PostCardProps & CardProps) => {
  const router = useRouter();
  const user = useGlobalStore();
  const bookmark = useAllBookmark();
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [DeletePost] = useDeletePostByPkMutation();

  const { fetchMore: fetchPost } = useGetPostByUserIdQuery({
    variables: { userId: post?.user_post?.userid as string },
  });

  const { fetchMore: fetchKeywordPost } = useGetPostByKeyWordsQuery({
    variables: { keyword: "" },
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

  return (
    <>
      <Card
        style={{ width: "94%", marginTop: 20 }}
        {...props}
        className={`post_card ${className}`}
        bordered={false}
      >
        <Meta
          avatar={
            <Avatar
              size={52}
              src={post?.user_post?.image}
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
          {post?.topic_post?.topicid ? (
            <Tag color="#000000" className="mb-2">
              {post?.topic_post?.topicname}
            </Tag>
          ) : null}
          <XImage preview={false} src={post?.image as string} />
          <div
            style={{ borderBottom: "1px solid #f4f4f4" }}
            className="my-2 mx-[-16px]"
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <PostAction
            postId={post?.postid}
            userId={post?.user_post?.userid as string}
            post={post}
            isFollow={bookmark
              ?.map((e) => e?.post_bookmark?.postid)
              .some((e) => e === post?.postid)}
          />
          <Button
            onClick={() => {
              router.push(`/home/post/${post.postid}`);
            }}
          >
            Xem chi tiết
          </Button>
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
