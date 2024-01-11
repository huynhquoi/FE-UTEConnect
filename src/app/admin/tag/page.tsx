"use client";

import {
  Topic,
  useCreateTagMutation,
  useDeleteTopicMutation,
  useGetAllTopicQuery,
} from "@/graphql/controller-types";
import { Button, Card, Flex, Form, Modal, Space, Table, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useGlobalStore } from "@/hook/useUser";
import { useEffect, useState } from "react";
import XInput from "@/components/core/XInput";
import Link from "next/link";
import dayjs from "dayjs";

const AdminTagPage = () => {
  const user = useGlobalStore();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [newTopic, setNewTopic] = useState("");
  const [deleteId, setDeleteId] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [submitDelete, setSubmitDelete] = useState(false);
  const { data, loading, fetchMore } = useGetAllTopicQuery();
  const [createTag] = useCreateTagMutation({});
  const [deleteTag] = useDeleteTopicMutation({});
  const columns = [
    {
      title: "Tên",
      dataIndex: "topicname",
      key: "topicname",
      render: (_: any, record: Topic) => (
        <Link
          href={`/home/post/topic/${record?.topicid}`}
          style={{ color: "black", cursor: "pointer" }}
          target="__blank"
        >
          {record?.topicname}
        </Link>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createday",
      render: (_: any, record: Topic) => (
        <div className="">{dayjs(record?.createday).format("DD/MM/YYYY, HH:mm")}</div>
      )
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: Topic) => (
        <Button
          onClick={() => {
            setOpenDelete(true);
            setDeleteId(record?.topicid);
          }}
        >
          <Flex align="center">
            <DeleteOutlined className="text-red" />
          </Flex>
        </Button>
      ),
    },
  ];

  useEffect(() => {
    if (!submit) {
      return;
    }
    createTag({
      variables: { topicname: newTopic, userid: user?.userid },
    }).then(() => {
      void fetchMore({});
      setSubmit(false);
      message.success("Created", 5);
    });
  }, [createTag, fetchMore, newTopic, submit, user?.userid]);

  useEffect(() => {
    if (!submitDelete) {
      return;
    }
    deleteTag({
      variables: {
        topicid: deleteId,
      },
    }).then(() => {
      void fetchMore({});
      setSubmitDelete(false);
      setDeleteId(0);
      message.success("Deleted", 5);
    });
  }, [deleteId, deleteTag, fetchMore, submitDelete]);

  const onFinish = (e: any) => {
    setNewTopic(e?.name);
    setSubmit(true);
    setOpen(false);
  };

  return (
    <>
      <Flex justify="center" style={{ width: "100%" }}>
        <Card style={{ width: "94%" }}>
          <Flex justify="end">
            <Button
              style={{
                height: "46px",
                background: "#000",
                color: "#fff",
                marginBottom: "4px",
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Create
            </Button>
          </Flex>
          <Table
            dataSource={data?.topic as Topic[]}
            columns={columns}
            loading={loading}
          />
        </Card>
      </Flex>
      <Modal
        title="Tạo chủ đề mới"
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
      >
        <Form id="topic_form" onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Tên topic"
              placeholder="Nhập tên "
              useLabel={true}
            ></XInput>
          </Form.Item>
          <Flex justify="end">
            <Space>
              <Form.Item style={{ margin: 0 }}>
                <Button
                  onClick={() => setOpen(false)}
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
      <Modal
        title="Xóa chủ đề"
        open={openDelete}
        footer={false}
        onCancel={() => {
          setOpenDelete(false);
          setDeleteId(0);
        }}
      >
        <div className="text-base mb-4">
          Bạn có thực sự muốn xóa chủ đề này?
        </div>
        <Flex justify="end">
          <Space>
            <Button
              onClick={() => {
                setOpenDelete(false);
                setDeleteId(0);
              }}
              style={{ width: "112px" }}
            >
              Hủy
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(false);
                setSubmitDelete(true);
              }}
              style={{
                width: "112px",
                background: "red",
                color: "#fff",
              }}
            >
              Xóa
            </Button>
          </Space>
        </Flex>
      </Modal>
    </>
  );
};

export default AdminTagPage;
