import { useState, useEffect } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant = "default", duration = 3000 }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant, duration }]);
  };

  const dismiss = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, toasts[0].duration);

      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return { toast, dismiss, toasts };
}