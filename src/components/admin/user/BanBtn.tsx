import { useBanUserMutation } from "@/graphql/controller-types";
import { Button, Flex, Modal, Select } from "antd";
import { UserDeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type BanBtnProps = {
  userId: string;
  onReload: () => void;
};

const { Option } = Select;

const BanList = [
  {
    id: 0,
    title: "Tài khoản bình thường / Gỡ bỏ lệnh cấm",
  },
  {
    id: 1,
    title: "Cấm bình luận trong 3 ngày",
  },
  {
    id: 2,
    title: "Cấm bình luận trong 5 ngày",
  },
  {
    id: 3,
    title: "Cấm hoạt động của tài khoản trong 3 ngày",
  },
  {
    id: 4,
    title: "Cấm hoạt động của tài khoản trong 5 ngày",
  },
  {
    id: 5,
    title: "Cấm hoạt động của tài khoản trong 10 ngày",
  },
  {
    id: 6,
    title: "Cấm hoạt động của tài khoản vĩnh viễn",
  },
];

const BanBtn = ({ userId, onReload }: BanBtnProps) => {
  const [open, setOpen] = useState(false);
  const [isBan, setIsBan] = useState(false);
  const [banLevel, setBanLevel] = useState(0);
  const [ban] = useBanUserMutation();

  useEffect(() => {
    if (!isBan) {
      return;
    }
    ban({
      variables: {
        isbanid: banLevel,
        userid: userId,
      },
    }).then(() => {
      setIsBan(false);
      setBanLevel(0);
      setOpen(false);
      void onReload();
    });
  }, [ban, banLevel, isBan, onReload, userId]);
  return (
    <>
      <Button style={{ padding: 0 }} type="text" onClick={() => setOpen(true)}>
        <Flex align="center">
          <UserDeleteOutlined style={{ color: "red" }} />
        </Flex>
      </Button>
      <Modal
        styles={{ footer: { color: "#000" } }}
        open={open}
        title={
          <>
            <div className="text-base font-semibold">Chọn mức độ</div>
          </>
        }
        onOk={() => {
          setIsBan(true);
        }}
        onCancel={() => {
          setBanLevel(0);
          setOpen(false);
        }}
        width={800}
      >
        <Select
          style={{ width: "100%" }}
          onChange={(e) => setBanLevel(e)}
          placeholder="Chọn mức độ cấm"
        >
          {BanList.map((e, index) => (
            <Option value={e?.id} key={e?.id}>
              {e?.title}
            </Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};

export default BanBtn;
