import {
  Avatar,
  Button,
  Card,
  CardProps,
  Col,
  ConfigProvider,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import XInput from "../core/XInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  User,
  useCreateFollowUserMutation,
  useCreatePostMutation,
  useGetPostQuery,
  useUpdateAccountMutation,
} from "@/graphql/controller-types";
import { format } from "date-fns";
import dayjs from "dayjs";
import XEditor from "../core/XEditor";
import XUpload from "../core/XUpload";
import FollowButton from "../shared/FollowButon";

const { Option } = Select;

type AccountCardHeaderProps = {
  user?: User;
  post: Number;
};

const AccountCardHeader = ({
  user,
  post,
  ...props
}: CardProps & AccountCardHeaderProps) => {
  const [form] = Form.useForm();
  const [formPost] = Form.useForm();
  const [editVisible, setEditVisible] = useState(false);
  const [createVisible, setCreateVisible] = useState(false);
  const [updateAccount] = useUpdateAccountMutation();
  const [createPost] = useCreatePostMutation();

  const profileUser = useSelector(
    (state: RootState) => state.sliceReducer.profileUser
  ) as User;

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
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onFinishCreate = (e: any) => {
    createPost({
      variables: {
        post: {
          ...e,
          requiredreputation: 50,
        },
        user: {
          userid: user?.userid,
        },
        topic: {},
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    form.setFieldValue("gender", profileUser?.gender);
    form.setFieldValue("birthday", profileUser?.birthday);
  }, [form, profileUser]);

  
  return (
    <>
      <ConfigProvider>
        <Card {...props}>
          <Row>
            <Col span={4}>
              <div className="ml-5">
                <Avatar
                  size={172}
                  src="https://i.pinimg.com/originals/9d/c0/27/9dc02710eb05461cea04864d2c64daa1.jpg"
                />
              </div>
            </Col>
            <Col span={20}>
              <div
                className="flex items-center justify-between"
                style={{ height: "100%" }}
              >
                <div className="flex flex-col items-start">
                  <div className="font-bold text-4xl ml-4">
                    {user?.fullname}
                  </div>
                  <div className=" text-lg ml-4 mt-2">
                    {post?.toString() || "0"} bài viết
                  </div>
                </div>
                {profileUser?.userid === user?.userid ? (
                  <div className="flex items-start">
                    <Button onClick={() => setCreateVisible(true)}>
                      Đăng bài
                    </Button>
                    <Button
                      className="ml-2"
                      onClick={() => setEditVisible(true)}
                    >
                      Chỉnh sửa tài khoản
                    </Button>
                  </div>
                ) : (
                  <FollowButton
                    userId={user?.userid as string}
                    followerId={profileUser?.userid}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Card>
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
          {...props}
        >
          <Form
            id="account_form"
            form={form}
            onFinish={onFinish}
            initialValues={{
              ["username"]: profileUser?.username as string,
              ["fullname"]: profileUser?.fullname as string,
              ["email"]: profileUser?.email as string,
              ["phone"]: (profileUser?.phone as string) || "",
              ["address"]: (profileUser?.address as string) || "",
            }}
          >
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
                  defaultValue={profileUser?.gender}
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
                  defaultValue={dayjs(profileUser?.birthday, "YYYY-MM-DD")}
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
        <Modal
          open={createVisible}
          title={
            <div className="font-bold text-xl">Chỉnh sửa thông tin cá nhân</div>
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
          {...props}
        >
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
              name="content"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <div className="">
                <div className="font-bold flex mb-1">Ảnh</div>
                <XUpload />
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
      </ConfigProvider>
    </>
  );
};

export default AccountCardHeader;
