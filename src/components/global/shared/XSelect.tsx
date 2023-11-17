import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

type SelectProps = React.ComponentProps<typeof Select>;

type XSelectProps = {
  placeholder: string;
  label?: string;
  required?: boolean;
  option?: Array<{ value: string; label: string }>;
};

export default function XSelect({
  label,
  placeholder,
  required,
  className,
  option,
  children,
  defaultValue,
  onValueChange,
  ...props
}: XSelectProps & SelectProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("", className)} {...props}>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white w-full">
          {option?.map((i) => (
            <SelectItem value={i.value} key={i.value}>
              {i.label}
            </SelectItem>
          ))}
          {children}
        </SelectContent>
      </Select>
      {/* <FormField
        name="select"
        render={({ field }) => (
          <FormItem>
            {!!label && <FormLabel>{label}</FormLabel>}
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white w-full">
                {option?.map((i) => (
                  <SelectItem value={i.value} key={i.value}>
                    {i.label}
                  </SelectItem>
                ))}
                {children}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      /> */}
    </div>
  );
}
