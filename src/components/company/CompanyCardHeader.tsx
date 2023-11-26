import { Affix, Button, Card, CardProps, Col, Row } from "antd";
import XImage from "../core/XImage";

const CompanyCardHeader = ({ ...props }: CardProps) => {
  return (
    <>
        <Card {...props}>
          <div className="flex items-start">
            <Col>
              <XImage
                className="rounded-lg"
                preview={false}
                src="https://i.pinimg.com/originals/5c/af/0e/5caf0e96302ba07a3fcb86fcdf0f5129.jpg"
                width={160}
              />
            </Col>
            <Col className="ml-5" >
              <div className="flex flex-col items-start justify-between">
                <div className="flex flex-col items-start justify-between">
                  <div className="company_name font-bold text-2xl mb-4">
                    The Pinterest
                  </div>
                  <div v-html="true" className="mb-1">
                    Hà Nội - Hồ Chí Minh
                  </div>
                  <div v-html="true">Có 3 công việc đang đợi bạn</div>
                </div>
                <div className=" flex flex-row items-center justify-between mt-8 w-[440px]">
                  <Button>Viết bình luận</Button>
                  <Button>Theo dõi công ty</Button>
                  <Button>Đăng bài tuyển dụng</Button>
                </div>
              </div>
            </Col>
          </div>
        </Card>
    </>
  );
};

export default CompanyCardHeader;
