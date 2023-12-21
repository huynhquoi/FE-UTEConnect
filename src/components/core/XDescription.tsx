import "react-quill/dist/quill.snow.css";

type XDescriptionProps = {
  value: string;
};

const XDescription = ({ value }: XDescriptionProps) => {
  return (
    <>
      <div className="quill ql-snow ">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      </div>
    </>
  );
};

export default XDescription;
