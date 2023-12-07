"use client";

import {
  Comment,
  User,
  useCreateCommentChildMutation,
  useGetPostCommentQuery,
} from "@/graphql/controller-types";
import { Avatar, Button, Card, Flex, Form, Space, Timeline } from "antd";
import { UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "./style.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import XEditComment from "../core/XEditComment";
import { SendOutlined } from "@ant-design/icons";
import { useGlobalStore } from "@/hook/useUser";

type PostCommentItemProps = {
  comment: Comment;
};

const PostCommentItem = ({ comment }: PostCommentItemProps) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const user = useGlobalStore();
  const [content, setContent] = useState("");
  const [reply, setReply] = useState(false);

  const [createComment] = useCreateCommentChildMutation();
  const { data, fetchMore } = useGetPostCommentQuery({
    variables: {
      postid: comment?.post_comment?.postid,
    },
  });

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
        comment_parentid: comment?.commentid,
      },
    }).then(() => {
      fetchMore({
        variables: {
          postid: comment?.post_comment?.postid,
        },
      });
    });
    form.setFieldValue("comment", null);
    setContent("");
  }, [
    comment?.commentid,
    comment?.post_comment?.postid,
    content,
    createComment,
    fetchMore,
    form,
    user?.userid,
  ]);

  const onFinish = (e: any) => {
    setContent(e?.comment);
  };

  return (
    <>
      <Card className="card_comment-item" style={{ background: "#f4f4f5" }}>
        <Timeline
          items={[
            {
              dot: (
                <Avatar
                  src={comment?.user_comment?.image || null}
                  icon={comment?.user_comment?.image ? null : <UserOutlined />}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                ></Avatar>
              ),
              children: (
                <>
                  <Space direction="vertical">
                    <Space>
                      <div
                        className="font-bold"
                        onClick={() =>
                          router.push(
                            `/home/account_manager/${comment?.user_comment?.userid}`
                          )
                        }
                      >
                        {comment?.user_comment?.fullname}
                      </div>
                      <div>
                        {dayjs(comment?.createday).format("DD/MM/YYYY, HH:mm")}
                      </div>
                    </Space>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: comment?.content as string,
                      }}
                    ></div>
                  </Space>
                </>
              ),
            },
            ...(comment?.comment_comment?.length
              ? [
                  {
                    dot: <div className=""></div>,
                    children: comment?.comment_comment?.map((c) => (
                      <PostCommentItem
                        key={c?.commentid}
                        comment={c as Comment}
                      />
                    )),
                  },
                ]
              : []),
          ]}
        ></Timeline>
      </Card>
      {!reply ? (
        <Space className="mt-2">
          <Button
            type="text"
            style={{ fontSize: "12px" }}
            onClick={() => setReply(true)}
          >
            Phản hồi
          </Button>
        </Space>
      ) : (
        <Form
          form={form}
          onFinish={onFinish}
          id="comment_form"
          className="mt-4"
        >
          <Form.Item
            name="comment"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XEditComment
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
      )}
    </>
  );
};

export default PostCommentItem;