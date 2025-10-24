import { Input } from "antd";

function InputField({ label, value, onChange, placeholder, required }) {
  return (
    <div className="my-1">
      <Input
        className="h-[55px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
