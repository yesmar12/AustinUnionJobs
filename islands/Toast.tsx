import { FunctionComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";

export interface ToastProps {
  message: string;
  error: boolean;
}

const Toast: FunctionComponent<ToastProps> = (
  { message, error }: ToastProps,
) => {
  console.log("Toast message: ", message);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Auto-dismiss after 3 seconds
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  return (
    <div
      class={`fixed bottom-4 right-4 ${
        error ? "bg-red-500" : "bg-green-500"
      } text-white py-2 px-4 rounded-md shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
