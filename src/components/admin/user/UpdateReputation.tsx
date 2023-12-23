import {
  useBanUserMutation,
  useUpdateReputationMutation,
} from "@/graphql/controller-types";
import { Button, Flex, Modal, Select } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import XInput from "@/components/core/XInput";

type UpdateReputationProps = {
  userId: string;
  onReload: () => void;
};

const UpdateReputation = ({ userId, onReload }: UpdateReputationProps) => {
  const [open, setOpen] = useState(false);
  const [isBan, setIsBan] = useState(false);
  const [reputation, setReputation] = useState(0);
  const [UpdateReputation] = useUpdateReputationMutation();

  useEffect(() => {
    if (!isBan) {
      return;
    }
    UpdateReputation({
      variables: {
        reputation: reputation,
        userid: userId,
      },
    }).then(() => {
      setIsBan(false);
      setReputation(0);
      setOpen(false);
      void onReload();
    });
  }, [UpdateReputation, isBan, onReload, reputation, userId]);
  return (
    <>
      <Button style={{ padding: 0 }} type="text" onClick={() => setOpen(true)}>
        <Flex align="center">
          <UserAddOutlined style={{ color: "green" }} />
        </Flex>
      </Button>
      <Modal
        styles={{ footer: { color: "#000" } }}
        open={open}
        title={
          <>
            <div className="text-base font-semibold">
              Cộng/Trừ reputation người dùng
            </div>
          </>
        }
        onOk={() => {
          setIsBan(true);
        }}
        onCancel={() => {
          setReputation(0);
          setOpen(false);
        }}
        width={400}
      >
        <XInput
          label="Nhập số điểm reputation cần trừ hoặc cộng"
          useLabel={true}
          placeholder="Nhập điểm reputation"
          onChange={(e) => setReputation(parseInt(e?.target?.value))}
        />
      </Modal>
    </>
  );
};

export default UpdateReputation;
