interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded text-black font-medium hover:brightness-110 hover:rounded-lg transition ${className}`}
      style={{ backgroundColor: "#54F2C5" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
