"use client";

import { Image, ImageProps } from "antd";

const XImage = ({ className, ...props }: ImageProps) => {
  return <Image className={`${className}`} {...props} />;
};

export default XImage;
