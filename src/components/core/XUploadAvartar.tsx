import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { Flex, Input, Modal, Upload, message } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { storage } from "@/firebase/firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { clearImageUrl, setImageUrl } from "@/store/slice";
import XImage from "./XImage";
import { RootState } from "@/store";

const XUploadAvatar = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const dispatch = useDispatch();
  const [isUploaded, setIsUploaded] = useState(false);
  const imageUrl = useSelector(
    (state: RootState) => state.sliceReducer.imageUrl
  ) as string;

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length === 0) {
      setIsUploaded(false);
      return;
    }
    handleUpload();
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
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleUpload = () => {
    if (fileList[0]) {
      const storageRef = ref(
        storage,
        `images/${fileList[0]?.name}-${fileList[0]?.uid}`
      );

      const uploadTask = uploadBytesResumable(
        storageRef,
        fileList[0].originFileObj as Blob
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            if (!!imageUrl) {
              void dispatch(clearImageUrl());
            }
            void dispatch(setImageUrl(downloadURL));
          });
        }
      );
      setIsUploaded(true);
    }
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
          maxCount={1}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </>
  );
};

export default XUploadAvatar;
