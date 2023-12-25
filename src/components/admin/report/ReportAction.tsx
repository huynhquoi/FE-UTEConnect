"use client";

import { Button, Flex, Form, Input, Modal, Space } from "antd";
import { DeleteOutlined, EyeOutlined, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  Report,
  useCreateNotificationMutation,
  useDeleteCommentByPkMutation,
  useDeleteCommentReportMutation,
  useDeletePostByPkMutation,
  useDeletePostReportMutation,
  useDeleteUserReportMutation,
  useUpdateReputationMutation,
} from "@/graphql/controller-types";
import XInput from "@/components/core/XInput";
import TextArea from "antd/es/input/TextArea";

type ReportActionProps = {
  report: Report;
  userId?: string;
  commentReportId?: number;
  userReportId?: string;
  postReportId?: number;
  onReload: () => void;
};

const ReportAction = ({
  report,
  userId,
  commentReportId,
  postReportId,
  userReportId,
  onReload,
}: ReportActionProps) => {
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [reputation, setReputation] = useState(0);
  const [openCheck, setOpenCheck] = useState(false);
  const [checkDone, setCheckDone] = useState(false);
  const [checkDeleteDone, setCheckDeleteDone] = useState(false);

  const [deleteReportUser] = useDeleteUserReportMutation();
  const [deleteReportPost] = useDeletePostReportMutation();
  const [deleteReportComment] = useDeleteCommentReportMutation();

  const [DeletePost] = useDeletePostByPkMutation();
  const [DeleteComment] = useDeleteCommentByPkMutation();
  const [UpdateReputation] = useUpdateReputationMutation();
  const [CreateNotification] = useCreateNotificationMutation();

  useEffect(() => {
    if (!checkDeleteDone) {
      return;
    }
    if (userReportId) {
      UpdateReputation({
        variables: { userid: userReportId!, reputation: -reputation },
      })
        .catch((error) => console.log(error))
        .then(() => {
          setCheckDeleteDone(false);
          void onReload();
        });
    } else if (commentReportId) {
      UpdateReputation({
        variables: { userid: userReportId!, reputation: -reputation },
      })
        .catch((error) => console.log(error))
        .then(() => {
          DeleteComment({
            variables: {
              commentid: commentReportId,
            },
          });
          CreateNotification({
            variables: {
              type: 10,
              subject: postReportId,
              userid: userId,
              content: `Binhf luận của bạn đã bị xóa vì vi phạm nội quy. Bạn sẽ bị trừ ${reputation} điểm reputation `,
            },
          });
        })
        .catch((error) => console.log(error))
        .then(() => {
          setCheckDeleteDone(false);
          void onReload();
        });
    } else if (postReportId) {
      UpdateReputation({
        variables: { userid: userId, reputation: -reputation },
      })
        .then(() => {
          DeletePost({
            variables: {
              postid: postReportId,
            },
          });
          CreateNotification({
            variables: {
              type: 10,
              subject: postReportId,
              userid: userId,
              content: `Bài viết của bạn đã bị xóa vì vi phạm bản quyền. Bạn sẽ bị trừ ${reputation} điểm reputation `,
            },
          });
        })
        .catch((error) => console.log(error))
        .then(() => {
          setCheckDeleteDone(false);
          void onReload();
        });
    }
  }, [
    CreateNotification,
    DeleteComment,
    DeletePost,
    UpdateReputation,
    checkDeleteDone,
    commentReportId,
    onReload,
    postReportId,
    reputation,
    userId,
    userReportId,
  ]);

  useEffect(() => {
    if (!checkDone) {
      return;
    }
    if (userReportId) {
      deleteReportUser({ variables: { userid: userReportId! } })
        .catch((error) => console.log(error))
        .then(() => {
          setCheckDone(false);
          void onReload();
        });
    } else if (commentReportId) {
      deleteReportComment({ variables: { commentid: commentReportId! } })
        .catch((error) => console.log(error))
        .then(() => {
          setCheckDone(false);
          void onReload();
        });
    } else if (postReportId) {
      deleteReportPost({ variables: { postid: postReportId! } })
        .catch((error) => console.log(error))
        .then(() => {
          setCheckDone(false);
          void onReload();
        });
    }
  }, [
    checkDone,
    commentReportId,
    deleteReportComment,
    deleteReportPost,
    deleteReportUser,
    onReload,
    openCheck,
    postReportId,
    userReportId,
  ]);
  return (
    <>
      <Space>
        <Button onClick={() => setOpen(true)} style={{ color: "red" }}>
          <Flex align="center">
            <DeleteOutlined className="text-red" />
          </Flex>
        </Button>
        <Button onClick={() => setOpenView(true)}>
          <Flex align="center">
            <EyeOutlined />
          </Flex>
        </Button>
        <Button onClick={() => setOpenCheck(true)} style={{ color: "green" }}>
          <Flex align="center">
            <CheckOutlined />
          </Flex>
        </Button>
      </Space>
      <Modal
        title={"Thông báo"}
        open={openCheck}
        onCancel={() => setOpenCheck(false)}
        footer={false}
      >
        Bạn có chắc đã xem xong report này?
        <Flex justify="end">
          <Space>
            <Button
              onClick={() => {
                setOpenCheck(false);
              }}
              style={{ width: "112px" }}
            >
              Hủy
            </Button>
            <Button
              onClick={() => {
                setCheckDone(true);
                setOpenCheck(false);
              }}
              style={{
                width: "112px",
                background: "#000",
                color: "#fff",
              }}
            >
              OK
            </Button>
          </Space>
        </Flex>
      </Modal>
      <Modal
        title={"Thông báo"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
      >
        <div className="text-base mb-3">Bạn có chắc muốn phạt user này?</div>
        <XInput
          useLabel={true}
          label="Trừ reputation người dùng"
          placeholder="Nhập số điểm phải trừ"
          onChange={(e) => setReputation(parseInt(e?.target?.value))}
        />
        <Flex justify="end">
          <Space>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              style={{ width: "112px" }}
            >
              Hủy
            </Button>
            <Button
              onClick={() => {
                setCheckDeleteDone(true);
                setOpen(false);
              }}
              style={{
                width: "112px",
                background: "#000",
                color: "#fff",
              }}
            >
              OK
            </Button>
          </Space>
        </Flex>
      </Modal>
      <Modal
        title={"Report"}
        open={openView}
        onCancel={() => setOpenView(false)}
        footer={false}
      >
        <div className="text-base font-semibold">Lý do</div>
        <Input
          className="mt-2"
          value={report?.reason as string}
          disabled={true}
        ></Input>
        <div className="text-base font-semibold mt-2">Chi tiết</div>
        <TextArea
          className="mt-2"
          value={report?.reason as string}
          disabled={true}
        ></TextArea>
      </Modal>
    </>
  );
};

export default ReportAction;
