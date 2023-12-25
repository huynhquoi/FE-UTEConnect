"use client";

import {
  Comment,
  useCreateCommentMutation,
  useGetPostCommentQuery,
} from "@/graphql/controller-types";
import { Button, Card, Flex, Form, Space } from "antd";
import PostCommentItem from "./PostCommentItem";
import XEditComment from "../core/XEditComment";

import { SendOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/hook/useUser";

type PostCommentProps = {
  postId: number;
};

const PostComment = ({ postId }: PostCommentProps) => {
  const [form] = Form.useForm();
  const user = useGlobalStore();
  const [content, setContent] = useState("");

  const { data, fetchMore } = useGetPostCommentQuery({
    variables: {
      postid: postId,
    },
  });

  const [createComment] = useCreateCommentMutation();
  console.log(user?.userid);

  useEffect(() => {
    if (!content) {
      return;
    }

    createComment({
      variables: {
        comment: {
          content: content,
        },
        userid: user?.userid,
        postid: postId,
      },
    }).then(() => {
      fetchMore({
        variables: {
          postid: postId,
        },
      });
    });
    form.setFieldValue("comment", null);
    setContent("");
  }, [content, createComment, fetchMore, form, postId, user?.userid]);

  const onFinish = (e: any) => {
    setContent(e?.comment);
  };

  return (
    <>
      <div className="text-xl font-bold">Bình luận</div>
      {data?.find_all_comment_by_postid?.length ? (
        data?.find_all_comment_by_postid?.map((c) => (
          <PostCommentItem
            key={c?.commentid}
            comment={c as Comment}
          ></PostCommentItem>
        ))
      ) : (
        <Card>Chưa có bình luận</Card>
      )}
      <Form form={form} onFinish={onFinish} id="comment_form" className="mt-4">
        <Form.Item
          name="comment"
          rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
        >
          <XEditComment
            style={{ marginTop: 12 }}
            value={form.getFieldValue("comment")}
            onChange={(e: any) => form.setFieldValue("comment", e)}
            placeholder="Nhập bình luận"
          />
        </Form.Item>
        <Form.Item name="comment">
          <Flex justify="end">
            <Button
              htmlType="submit"
              style={{
                background: "#000",
                color: "#fff",
                padding: "0 16px",
                paddingBottom: "2px",
              }}
            >
              <SendOutlined className="text-lg" />
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
};

export default PostComment;
