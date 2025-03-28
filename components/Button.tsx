import { h } from 'preact';

interface ButtonProps {
  children: any;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
