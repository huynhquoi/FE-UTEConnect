"use client";

import { useGlobalStore } from "@/hook/useUser";
import { Button, Flex, Form, Modal, Select, Space } from "antd";
import XInput from "../core/XInput";
import XUpload from "../core/XUpload";
import XEditor from "../core/XEditor";
import { useEffect, useState } from "react";
import {
  useCreatePostMutation,
  useGetAllTopicQuery,
  useGetPostByUserIdQuery,
} from "@/graphql/controller-types";
import { useImageStore } from "@/hook/useImage";
const { Option } = Select;

const PostForm = () => {
  const user = useGlobalStore();
  const [formPost] = Form.useForm();
  const [createVisible, setCreateVisible] = useState(false);
  const [selectTopic, setSelectTopic] = useState(0);
  const [createPost] = useCreatePostMutation();
  const { fetchMore: fetchPost } = useGetPostByUserIdQuery({});
  const { data: topic } = useGetAllTopicQuery();
  const image = useImageStore();

  useEffect(() => {
    if (!formPost.getFieldValue("image")) {
      return;
    }
    formPost.setFieldValue("image", image);
  }, [formPost, image]);

  const onFinishCreate = (e: any) => {
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
  };

  return (
    <>
      <Button onClick={() => setCreateVisible(true)}>Đăng bài viết</Button>
      <Modal
        open={createVisible}
        title={<div className="font-bold text-xl">Đăng bài viết</div>}
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
        <Form id="account_form" form={formPost} onFinish={onFinishCreate}>
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
                <XUpload />
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
                  Tạo
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
