interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {props.label && (
        <label
          htmlFor={props.name}
          className="text-sm font-medium text-gray-700"
        >
          {props.label}
        </label>
      )}
      <input
        id="name"
        name="name"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        className={`px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#54F2C5] focus:border-transparent ${props.className}`}
      />
    </div>
  );
}
