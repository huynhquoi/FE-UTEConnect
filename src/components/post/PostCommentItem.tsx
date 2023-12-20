"use client";

import {
  Comment,
  User,
  useCreateCommentChildMutation,
  useGetCommentChildQuery,
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
import CommentAction from "./CommentAction";
import ReportButton from "../shared/ReportButton";

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
  const { data, fetchMore } = useGetCommentChildQuery({
    variables: {
      postid: comment?.post_comment?.postid,
      commentparentid: comment?.commentid,
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
    setReply(false);
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
      <Card
        className="card_comment-item"
        style={{
          // background: "#f4f4f5"
          background: "#fff",
        }}
      >
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
                      className="p-2 rounded-md"
                      style={{
                        background: "#f4f4f5",
                      }}
                    >
                      <div
                        className=""
                        dangerouslySetInnerHTML={{
                          __html: comment?.content as string,
                        }}
                      ></div>
                    </div>
                    <Flex vertical>
                      <Flex>
                        <CommentAction
                          userId={user?.userid}
                          commentId={comment?.commentid}
                        />
                        <Button
                          type="text"
                          style={{ fontSize: "12px", padding: 0 }}
                          onClick={() => setReply(!reply)}
                        >
                          Phản hồi
                        </Button>
                        <ReportButton
                          type="text"
                          style={{
                            fontSize: "12px",
                            padding: 0,
                            marginLeft: 4,
                          }}
                          commentReportId={comment?.commentid}
                        />
                      </Flex>
                      {!reply ? null : (
                        <Form
                          form={form}
                          onFinish={onFinish}
                          id="comment_form"
                          className="mt-4"
                        >
                          <Form.Item
                            name="comment"
                            rules={[
                              {
                                required: true,
                                message: "Không được bỏ trống ô này",
                              },
                            ]}
                          >
                            <XEditComment
                              value={form.getFieldValue("comment")}
                              onChange={(e: any) =>
                                form.setFieldValue("comment", e)
                              }
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
                    </Flex>
                  </Space>
                </>
              ),
            },
            ...(data?.find_all_comment_by_commentparentid?.length
              ? data?.find_all_comment_by_commentparentid?.map((c) => ({
                  dot: <div className="dot_comment"></div>,
                  children: (
                    <PostCommentItem
                      key={c?.commentid}
                      comment={c as Comment}
                    />
                  ),
                }))
              : []),
          ]}
        ></Timeline>
      </Card>
    </>
  );
};

export default PostCommentItem;
