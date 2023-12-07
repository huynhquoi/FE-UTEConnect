"use client";

import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.scss";

const XEditor = ({ ...props }: ReactQuillProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
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
        className="x_editor"
        style={{ borderRadius: "15px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        {...props}
      />
    </>
  );
};

export default XEditor;
