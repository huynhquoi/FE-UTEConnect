"use client";

import { Modal, ModalProps } from "antd";
import React from "react";

type AccountFormProps = {
  editVisible: boolean;
  onOK: () => void;
  onCancel: () => void;
  children: React.ReactNode;
  title: string;
};

const AccountForm = ({
  editVisible,
  onOK,
  onCancel,
  children,
  title,
  ...props
}: AccountFormProps & ModalProps) => {
  return (
    <>
      <Modal
        open={editVisible}
        title={title}
        onOk={onOK}
        onCancel={onCancel}
        maskClosable={false}
        width={800}
        centered
        okButtonProps={{
          style: {
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "none",
          },
        }}
        {...props}
      >
        {children}
      </Modal>
    </>
  );
};

export default AccountForm;
