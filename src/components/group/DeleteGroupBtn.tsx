"use client";

import { Button, Flex, Modal, Space, message } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDeleteGroupMutation } from "@/graphql/controller-types";
import { useRouter } from "next/navigation";

type DeleteGroupBtnProps = {
  groupId: number;
};

const DeleteGroupBtn = ({ groupId }: DeleteGroupBtnProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [deteleGroup] = useDeleteGroupMutation({});
  useEffect(() => {
    if (!isDelete) {
      return;
    }
    deteleGroup({
      variables: {
        groupid: groupId,
      },
    }).then(() => {
      setIsDelete(false);
      message?.success("Deleted", 10);
      router.push("/");
    });
  }, [deteleGroup, groupId, isDelete, router]);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Flex align="center">
          <DeleteOutlined style={{ color: "red" }} />
        </Flex>
      </Button>
      <Modal
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
        title={"Thông báo"}
      >
        <p>Bạn có chắc muốn xóa nhóm?</p>
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
                setIsDelete(true);
                setOpen(false);
              }}
              style={{
                width: "112px",
                background: "#000",
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

export default DeleteGroupBtn;
