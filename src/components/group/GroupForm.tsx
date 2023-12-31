"use client";

import {
  Button,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Modal,
  Select,
  Space,
  Tooltip,
} from "antd";
import XInput from "../core/XInput";
import {
  Group,
  useCreateGroupMutation,
  useUpdateGroupMutation,
} from "@/graphql/controller-types";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/hook/useUser";
import XUploadAvatar from "../core/XUploadAvartar";
import { useImageStore } from "@/hook/useImage";
import XImage from "../core/XImage";
import { ReloadOutlined, CloseOutlined } from "@ant-design/icons";
import XEditor from "../core/XEditor";
import XUploadGroup from "../core/XUploadGroup";

const { Option } = Select;

type GroupFormType = {
  onReload: () => void;
  groupId?: number;
  group?: Group;
};

const GroupForm = ({ groupId, group, onReload }: GroupFormType) => {
  const user = useGlobalStore();
  const [form] = Form.useForm();
  const [editImage, setEditImage] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [CreateGroup] = useCreateGroupMutation();
  const [UpdateGroup] = useUpdateGroupMutation();

  const image = useImageStore();

  useEffect(() => {
    if (!groupId) {
      return;
    }
    form.setFieldValue("image", group?.image);
    form.setFieldValue("description", group?.description);
  }, [form, group?.description, group?.image, groupId]);

  useEffect(() => {
    if (!image) {
      return;
    }
    form.setFieldValue("image", image);
    setEditImage(false);
  }, [form, image]);

  const onFinish = (e: any) => {
    if (!groupId) {
      CreateGroup({
        variables: {
          group: {
            description: e?.description,
            groupname: e?.groupname,
            reputaion: e?.reputaion,
            image: e?.image,
          },
          admin: user?.userid,
        },
      })
        .then(() => {
          setEditVisible(false);
          void onReload();
        })
        //   .then(() => onReload())
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      UpdateGroup({
        variables: {
          group: {
            groupid: groupId,
            description: e?.description,
            groupname: e?.groupname,
            reputaion: e?.reputaion,
            image: e?.image,
          },
        },
      })
        .then(() => {
          setEditVisible(false);
          void onReload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <>
      <Button className="ml-2" onClick={() => setEditVisible(true)}>
        {!groupId ? "Tạo group" : "Chỉnh sửa Group"}
      </Button>
      <Modal
        open={editVisible}
        title={
          <div className="font-bold text-xl">
            {!groupId ? "Tạo group" : "Chỉnh sửa Group"}
          </div>
        }
        maskClosable={false}
        width={800}
        centered
        onCancel={() => setEditVisible(false)}
        okButtonProps={{
          style: {
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "none",
          },
        }}
        footer={false}
      >
        <Form
          id="group_form"
          form={form}
          onFinish={onFinish}
          initialValues={{
            ["image"]: group?.image || "",
            ["groupname"]: group?.groupname || "",
            ["reputaion"]: group?.reputaion || 0,
            ["description"]: group?.description || "",
          }}
        >
          <Form.Item
            name="image"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <div style={{ width: "100%" }}>
              <div className="font-bold flex mb-1">Ảnh</div>
              <Flex align="center" justify="center">
                {!!form?.getFieldValue("image") && !editImage ? (
                  <>
                    <XImage width={200} src={form.getFieldValue("image")} />
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
                    <XUploadGroup />
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
            name="groupname"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Tên nhóm"
              placeholder="Nhập tên nhóm"
              useLabel={true}
            ></XInput>
          </Form.Item>
          <Form.Item
            name="reputaion"
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
            name="description"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <div className="">
              <div className="font-bold flex mb-1">
                Chi tiết
                <p className="text-red-600"> *</p>
              </div>
              <XEditor
                onChange={(e: any) => form.setFieldValue("description", e)}
                value={form.getFieldValue("description")}
                placeholder="Nhập chi tiết"
              />
            </div>
          </Form.Item>
          <Flex justify="end">
            <Space>
              <Form.Item style={{ margin: 0 }}>
                <Button
                  onClick={() => setEditVisible(false)}
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
                  {!groupId ? "Tạo" : "Chỉnh sửa"}
                </Button>
              </Form.Item>
            </Space>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default GroupForm;
