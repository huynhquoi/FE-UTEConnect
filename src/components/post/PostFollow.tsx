"use client";

import {
  Bookmark,
  Post,
  User,
  useCreateFollowMutation,
  useDeleteFollowMutation,
  useGetAllFollowPostQuery,
} from "@/graphql/controller-types";
import { Button, Flex } from "antd";
import { useEffect, useState } from "react";
import { FileOutlined, FileFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setPostFollow } from "@/store/slice";

type PostFollowProps = {
  isFollow: boolean;
  post: Post;
  user: User;
};

const PostFollow = ({ isFollow, post, user }: PostFollowProps) => {
  const dispatch = useDispatch();
  const [followStatus, setFollowStatus] = useState("");

  const [CreateFollow, { loading: loadCreate }] = useCreateFollowMutation();
  const [DeleteFollow, { loading: loadDelete }] = useDeleteFollowMutation();

  const {
    data: followPost,
    loading,
    fetchMore: getFollowPost,
  } = useGetAllFollowPostQuery({
    variables: {
      userid: user?.userid,
    },
  });

  useEffect(() => {
    dispatch(
      setPostFollow(followPost?.find_all_bookmark_by_userid as Bookmark[])
    );
  }, [dispatch, followPost?.find_all_bookmark_by_userid]);

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

  return !isFollow ? (
    <Button
      type="text"
      onClick={() => {
        setFollowStatus("follow");
      }}
      disabled={loading || loadCreate || loadDelete}
    >
      <Flex align="center">
        <FileOutlined />
      </Flex>
    </Button>
  ) : (
    <Button
      type="text"
      onClick={() => {
        setFollowStatus("unFollow");
      }}
      disabled={loading || loadCreate || loadDelete}
    >
      <Flex align="center">
        <FileFilled />
      </Flex>
    </Button>
  );
};

export default PostFollow;
