import { Form, Input, InputProps } from "antd";

type XInputProps = {
  placeholder?: string;
  label?: string;
  useLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
  type?: string;
};

const XInput = ({
  placeholder,
  label,
  useLabel,
  required,
  disabled,
  type,
  ...props
}: InputProps & XInputProps) => {
  return (
    <>
      {useLabel ? (
        <>
          <div className="font-bold flex mb-1">
            {label}
            {required ? (
              <>
                <p className="text-red-600"> *</p>
              </>
            ) : null}
          </div>
        </>
      ) : null}
      {type !== "password" ? (
        <Input placeholder={placeholder} {...props} disabled={disabled} />
      ) : (
        <Input.Password
          placeholder={placeholder}
          {...props}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default XInput;
