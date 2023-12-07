"use client";

import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.scss";

const XEditComment = ({ ...props }: ReactQuillProps) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "code-block",
    "link",
    "image",
    "video",
  ];

  return (
    <>
      <ReactQuill
        className="x_editor-comment"
        style={{ borderRadius: "15px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        {...props}
      />
    </>
  );
};

export default XEditComment;
