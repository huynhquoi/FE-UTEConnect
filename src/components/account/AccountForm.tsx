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
import { useUpdateAccountMutation } from "@/graphql/controller-types";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/hook/useUser";
import dayjs from "dayjs";
import XUploadAvatar from "../core/XUploadAvartar";
import { useImageStore } from "@/hook/useImage";
import XImage from "../core/XImage";
import { ReloadOutlined, CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

type AccountFormType = {
  onReload: () => void;
};

const AccountForm = ({ onReload }: AccountFormType) => {
  const user = useGlobalStore();
  const [form] = Form.useForm();
  const [editImage, setEditImage] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [updateAccount] = useUpdateAccountMutation();

  const image = useImageStore();

  useEffect(() => {
    if (!form.getFieldValue("image")) {
      return;
    }
    form.setFieldValue("image", image);
    setEditImage(false);
  }, [form, image]);

  const onGenderChange = (value: string) => {
    form.setFieldValue("gender", value);
  };
  const onBirthdayChange: DatePickerProps["onChange"] = (date, dateString) => {
    form.setFieldValue("birthday", dateString);
  };

  const onFinish = (e: any) => {
    updateAccount({
      variables: {
        user: {
          ...e,
          userid: user?.userid,
        },
      },
    }).then(() => setEditVisible(false))
      .then(() => onReload())
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    form.setFieldValue("gender", user?.gender);
    form.setFieldValue("birthday", user?.birthday);
    form.setFieldValue("image", user?.image);
  }, [form, user]);
  return (
    <>
      <Button className="ml-2" onClick={() => setEditVisible(true)}>
        Chỉnh sửa tài khoản
      </Button>
      <Modal
        open={editVisible}
        title={
          <div className="font-bold text-xl">Chỉnh sửa thông tin cá nhân</div>
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
          id="account_form"
          form={form}
          onFinish={onFinish}
          initialValues={{
            ["username"]: user?.username as string,
            ["fullname"]: user?.fullname as string,
            ["email"]: user?.email as string,
            ["phone"]: (user?.phone as string) || "",
            ["address"]: (user?.address as string) || "",
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
                    <XUploadAvatar />
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
            name="username"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Tên đăng nhập"
              placeholder="Nhập tên đăng nhập hoặc email"
              useLabel={true}
            ></XInput>
          </Form.Item>
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Tên của bạn"
              placeholder="Nhập tên của bạn"
              useLabel={true}
            ></XInput>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              label="Email"
              placeholder="Nhập email của bạn"
              useLabel={true}
            ></XInput>
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <div>
              <div className="font-bold flex mb-1">Giới tính</div>
              <Select
                placeholder={"Chọn giới tính "}
                allowClear
                onChange={onGenderChange}
                defaultValue={user?.gender}
              >
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
                <Option value="other">Khác</Option>
              </Select>
            </div>
          </Form.Item>
          <Form.Item name="birthday">
            <div>
              <div className="font-bold flex mb-1">Ngày sinh</div>
              <DatePicker
                defaultValue={dayjs(user?.birthday || new Date())}
                onChange={onBirthdayChange}
                placeholder="Chọn ngày sinh của bạn"
                style={{ width: "100%" }}
              />
            </div>
          </Form.Item>
          <Form.Item name="phone">
            <XInput
              label="Số điện thoại"
              placeholder="Nhập số điện thoại"
              useLabel={true}
            ></XInput>
          </Form.Item>
          <Form.Item name="address">
            <XInput
              label="Địa chỉ"
              placeholder="Nhập địa chỉ"
              useLabel={true}
            ></XInput>
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
                  Chỉnh sửa
                </Button>
              </Form.Item>
            </Space>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default AccountForm;
