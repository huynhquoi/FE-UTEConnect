import { useBanUserMutation } from "@/graphql/controller-types";
import { Button, Flex, Modal, Select } from "antd";
import { UserDeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type BanBtnProps = {
  userId: string;
  onReload: () => void;
};

const { Option } = Select;

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
        width={400}
      >
        <Select
          style={{ width: "100%" }}
          onChange={(e) => setBanLevel(e)}
          placeholder="Chọn mức độ cấm"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((e, index) => (
            <Option value={e} key={index}>
              {e}
            </Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};

export default BanBtn;
