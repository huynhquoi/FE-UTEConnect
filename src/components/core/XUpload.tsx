import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { Input, Modal, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const XUpload = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList[0]);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    setPreviewImage(src);
    setPreviewOpen(true);
  };

  const handleCancel = () => {
    setPreviewOpen(false);
  };

  return (
    <>
      <ImgCrop rotationSlider>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Tải lên"}
        </Upload>
      </ImgCrop>
      <Modal
        open={previewOpen}
        title={"Xem ảnh"}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default XUpload;
