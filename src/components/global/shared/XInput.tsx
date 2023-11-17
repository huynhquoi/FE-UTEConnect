
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputProps = React.ComponentProps<typeof Input>;

type XInputProps = {
  placeholder: string;
  label?: string;
  required?: boolean;
};

export default function XInput({
  label,
  placeholder,
  required,
  className,
  onChange,
  ...props
}: XInputProps & InputProps) {
  return (
    <div className={cn("", className)} {...props}>
      {!!label?.length && (
        <Label className="font-bold">
          {label} {required && <span className="text-red-600">*</span>}
        </Label>
      )}
      <Input placeholder={placeholder} className="mt-2" onChange={onChange}></Input>
    </div>
  );
}
