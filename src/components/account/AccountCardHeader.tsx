import {
  Avatar,
  Button,
  Card,
  CardProps,
  Col,
  ConfigProvider,
  Modal,
  Row,
} from "antd";
import { useState } from "react";

const AccountCardHeader = ({ ...props }: CardProps) => {
  const [editVisible, setEditVisible] = useState(false);
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
                  <div className="font-bold text-4xl ml-4">Kinse Tom</div>
                  <div className=" text-lg ml-4 mt-2">Bạn đã có 4 bài viết</div>
                </div>
                <div className="flex items-start">
                  <Button>Đăng bài</Button>
                  <Button className="ml-2" onClick={() => setEditVisible(true)}>
                    Chỉnh sửa tài khoản
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <Modal
          open={editVisible}
          title="Chỉnh sửa thông tin cá nhân"
          onOk={() => setEditVisible(false)}
          onCancel={() => setEditVisible(false)}
          maskClosable={false}
          width={800}
          centered
        >
          Chỉnh sửa
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default AccountCardHeader;
