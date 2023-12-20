"use client";

import {
  useCreateCommentReportMutation,
  useCreatePostMutation,
  useCreatePostReportMutation,
  useCreateUserReportMutation,
} from "@/graphql/controller-types";
import { useGlobalStore } from "@/hook/useUser";
import { Button, ButtonProps, Flex, Form, Modal, Space, message } from "antd";
import { useEffect, useState } from "react";
import XInput from "../core/XInput";
import XEditor from "../core/XEditor";
import {
  REPORT_COMMENT,
  REPORT_POST,
  REPORT_USER,
} from "@/graphql/default-types";

type ReportButtonProps = {
  commentReportId?: number;
  userReportId?: string;
  postReportId?: number;
};

const ReportButton = ({
  commentReportId,
  postReportId,
  userReportId,
  ...props
}: ReportButtonProps & ButtonProps) => {
  const [form] = Form.useForm();
  const user = useGlobalStore();
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formValue, setFormValue] = useState({
    reason: "",
    content: "",
  });
  const [createUserReport] = useCreateUserReportMutation({});
  const [createPostReport] = useCreatePostReportMutation({});
  const [createCommentReport] = useCreateCommentReportMutation({});

  const onFinish = (e: any) => {
    setFormValue({
      reason: e?.reason,
      content: e?.content,
    });
    setSubmit(true);
    setOpen(false);
  };

  useEffect(() => {
    if (!submit) {
      return;
    }
    if (!!userReportId) {
      createUserReport({
        variables: {
          report: {
            reason: formValue?.reason,
            content: formValue?.content,
            type: REPORT_USER,
          },
          reporterid: user?.userid,
          userid: userReportId,
        },
      }).then(() => {
        setSubmit(false);
        message.success("Reported", 10);
        setFormValue({
          reason: "",
          content: "",
        });
      });
    } else if (!!postReportId) {
      createPostReport({
        variables: {
          report: {
            reason: formValue?.reason,
            content: formValue?.content,
            type: REPORT_POST,
          },
          reporterid: user?.userid,
          postid: postReportId,
        },
      }).then(() => {
        setSubmit(false);
        message.success("Reported", 10);
        setFormValue({
          reason: "",
          content: "",
        });
      });
    } else if (!!commentReportId) {
      createCommentReport({
        variables: {
          report: {
            reason: formValue?.reason,
            content: formValue?.content,
            type: REPORT_COMMENT,
          },
          reporterid: user?.userid,
          commentid: commentReportId,
        },
      }).then(() => {
        setSubmit(false);
        message.success("Reported", 10);
        setFormValue({
          reason: "",
          content: "",
        });
      });
    }
  }, [
    commentReportId,
    createCommentReport,
    createPostReport,
    createUserReport,
    formValue?.content,
    formValue?.reason,
    postReportId,
    submit,
    user?.userid,
    userReportId,
  ]);
  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>Report</Button>
      <Modal
        title={
          commentReportId
            ? "Report Comment"
            : userReportId
            ? "Report người dùng"
            : "Report bài viết"
        }
        footer={false}
        onCancel={() => {
          setFormValue({
            reason: "",
            content: "",
          });
          setOpen(false);
        }}
        maskClosable={false}
        width={600}
        open={open}
      >
        <Form form={form} id="report_form" onFinish={onFinish}>
          <Form.Item
            name={"reason"}
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <XInput
              placeholder="Nhập lý do"
              label="Lý do"
              useLabel={true}
              required={true}
            />
          </Form.Item>
          <Form.Item
            name={"content"}
            rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
          >
            <div className="">
              <div className="font-bold flex mb-1">
                Nội dung
                <p className="text-red-600"> *</p>
              </div>
              <XEditor
                onChange={(e: any) => form.setFieldValue("content", e)}
                value={form.getFieldValue("content")}
                placeholder="Nhập nội dung bài viết"
              />
            </div>
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
                  Report
                </Button>
              </Form.Item>
            </Space>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default ReportButton;
