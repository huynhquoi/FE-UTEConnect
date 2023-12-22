"use client";

import { useGlobalStore } from "@/hook/useUser";
import { Button, Flex, Form, Modal, Select, Space, Tooltip } from "antd";
import XInput from "../core/XInput";
import XUpload from "../core/XUpload";
import XEditor from "../core/XEditor";
import { useEffect, useState } from "react";
import {
  Group,
  Post,
  useCreatePostInGroupMutation,
  useCreatePostMutation,
  useGetAllTopicQuery,
  useGetPostByUserIdQuery,
} from "@/graphql/controller-types";
import { useImageStore } from "@/hook/useImage";
import XImage from "../core/XImage";
const { Option } = Select;
import { ReloadOutlined, CloseOutlined } from "@ant-design/icons";

type PostFormProps = {
  groupId?: number;
  post?: Post;
};

const PostForm = ({ groupId, post }: PostFormProps) => {
  const user = useGlobalStore();
  const [formPost] = Form.useForm();
  const [createVisible, setCreateVisible] = useState(false);
  const [editImage, setEditImage] = useState(!!!post?.postid);
  const [selectTopic, setSelectTopic] = useState(0);
  const [createPost] = useCreatePostMutation();
  const [createPostInGroup] = useCreatePostInGroupMutation();
  const { fetchMore: fetchPost } = useGetPostByUserIdQuery({});
  const { data: topic } = useGetAllTopicQuery();
  const image = useImageStore();

  useEffect(() => {
    if (!post?.postid) {
      return;
    }
    formPost.setFieldValue("content", post?.content);
    formPost.setFieldValue("image", post?.image);
    setSelectTopic(post?.topic_post?.topicid as number);
  }, [
    formPost,
    post?.content,
    post?.image,
    post?.postid,
    post?.topic_post?.topicid,
  ]);

  useEffect(() => {
    if (!formPost.getFieldValue("image") || !editImage) {
      return;
    }
    formPost.setFieldValue("image", image);
  }, [editImage, formPost, image]);

  const onFinishCreate = (e: any) => {
    if (!groupId) {
      createPost({
        variables: {
          post: {
            ...e,
          },
          user: {
            userid: user?.userid,
          },
          topic: {
            topicid: selectTopic,
          },
        },
      })
        .then(() => {
          setCreateVisible(false);
          fetchPost({
            variables: {
              userId: user?.userid,
            },
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      createPostInGroup({
        variables: {
          post: {
            ...e,
          },
          user: {
            userid: user?.userid,
          },
          topic: {
            topicid: selectTopic,
          },
          groupid: groupId,
        },
      })
        .then(() => {
          setCreateVisible(false);
          fetchPost({
            variables: {
              userId: user?.userid,
            },
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      <Button onClick={() => setCreateVisible(true)}>
        {post?.postid ? "Chỉnh sửa" : "Đăng bài viết"}
      </Button>
      <Modal
        open={createVisible}
        title={
          <div className="font-bold text-xl">
            {post?.postid ? "Sửa bài viết" : "Đăng bài viết"}
          </div>
        }
        maskClosable={false}
        width={800}
        centered
        onCancel={() => setCreateVisible(false)}
        okButtonProps={{
          style: {
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "none",
          },
        }}
        footer={false}
      >
        <div style={{ width: "100%", marginBottom: "24px" }}>
          <div className="font-bold flex mb-1">Chủ đề</div>
          <Select
            placeholder={"Chọn chủ đề cho bài viết"}
            defaultValue={post?.topic_post?.topicid || 0}
            allowClear
            onChange={(e) => {
              setSelectTopic(e as number);
            }}
            style={{ width: "100%" }}
          >
            {topic?.topic?.map((t) => (
              <Option value={t?.topicid} key={t?.topicid}>
                {t?.topicname}
              </Option>
            ))}
          </Select>
        </div>
        <Form
          id="post_form"
          form={formPost}
          onFinish={onFinishCreate}
          initialValues={{
            ["title"]: post?.title || "",
            ["requiredreputation"]: post?.requiredreputation || 0,
            ["image"]: post?.image || "",
            ["content"]: post?.content || "",
          }}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Tiêu đề bài viết"
              placeholder="Nhập tiêu đề bài viết"
              useLabel={true}
              required={true}
            ></XInput>
          </Form.Item>
          <Form.Item
            name="requiredreputation"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Reputation"
              placeholder="Nhập số điểm cần thiết"
              useLabel={true}
              required={true}
            ></XInput>
          </Form.Item>
          <Form.Item
            name="image"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <div style={{ width: "100%" }}>
              <div className="font-bold flex mb-1">Ảnh</div>
              <Flex align="center" justify="center">
                {!!formPost?.getFieldValue("image") && !editImage ? (
                  <>
                    <XImage width={200} src={formPost.getFieldValue("image")} />
                    <Flex style={{ height: 200, marginLeft: 4 }} align="start">
                      <Tooltip title={"Đăng lại"}>
                        <Button
                          onClick={() => {
                            setEditImage(true);
                          }}
                        >
                          <Flex align="center">
                            <ReloadOutlined />
                          </Flex>
                        </Button>
                      </Tooltip>
                    </Flex>
                  </>
                ) : (
                  <>
                    <XUpload />
                    <Flex style={{ height: 200, marginLeft: 4 }} align="start">
                      <Tooltip title={"Hủy"}>
                        <Button
                          onClick={() => {
                            setEditImage(false);
                          }}
                        >
                          <Flex align="center">
                            <CloseOutlined className="text-red" />
                          </Flex>
                        </Button>
                      </Tooltip>
                    </Flex>
                  </>
                )}
              </Flex>
            </div>
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <div className="">
              <div className="font-bold flex mb-1">
                Nội dung
                <p className="text-red-600"> *</p>
              </div>
              <XEditor
                onChange={(e: any) => formPost.setFieldValue("content", e)}
                value={formPost.getFieldValue("content")}
                placeholder="Nhập nội dung bài viết"
              />
            </div>
          </Form.Item>
          <Flex justify="end">
            <Space>
              <Form.Item style={{ margin: 0 }}>
                <Button
                  onClick={() => {
                    setCreateVisible(false);
                    formPost.setFieldValue("title", null);
                    formPost.setFieldValue("content", null);
                  }}
                  style={{ width: "112px" }}
                >
                  Hủy
                </Button>
              </Form.Item>
              <Form.Item style={{ margin: 0 }}>
                <Button
                  htmlType="submit"
                  style={{
                    width: "112px",
                    background: "#000",
                    color: "#fff",
                  }}
                >
                  Ok
                </Button>
              </Form.Item>
            </Space>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default PostForm;
