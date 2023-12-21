"use client";

import { Button, Flex, Modal, Space } from "antd";
import { DeleteOutlined, EyeOutlined, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  useDeleteCommentReportMutation,
  useDeletePostReportMutation,
  useDeleteUserReportMutation,
} from "@/graphql/controller-types";

type ReportActionProps = {
  commentReportId?: number;
  userReportId?: string;
  postReportId?: number;
  onReload: () => void;
};

const ReportAction = ({
  commentReportId,
  postReportId,
  userReportId,
  onReload,
}: ReportActionProps) => {
  const [open, setOpen] = useState(false);
  const [openCheck, setOpenCheck] = useState(false);
  const [checkDone, setCheckDone] = useState(false);

  const [deleteReportUser] = useDeleteUserReportMutation();
  const [deleteReportPost] = useDeletePostReportMutation();
  const [deleteReportComment] = useDeleteCommentReportMutation();

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
        <Button onClick={() => setOpenCheck(true)} style={{ color: "red" }}>
          <Flex align="center">
            <DeleteOutlined className="text-red" />
          </Flex>
        </Button>
        <Button>
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
    </>
  );
};

export default ReportAction;
