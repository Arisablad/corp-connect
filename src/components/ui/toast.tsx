"use client";
import { cn } from "@/lib/utils";
import { ReactNode, createContext, useContext, useState } from "react";

interface ToastMessage {
  variant: "success" | "warning" | "error" | "default";
  title: string;
  description: string;
}

interface ToastContextType {
  showToast: (message: ToastMessage, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (message: ToastMessage, duration = 3000) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, duration); // Close the toast after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`fixed bottom-4 left-4 right-4 z-[300]`}>
          <div
            className={cn(
              "bg-gray-800 text-white p-4 rounded shadow-lg",
              getToastStyle(toast.variant)
            )}
          >
            <p className="font-bold">{toast.title}</p>
            <p>{toast.description}</p>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

const getToastStyle = (variant: ToastMessage["variant"]) => {
  switch (variant) {
    case "success":
      return "bg-green-500";
    case "warning":
      return "bg-yellow-500";
    case "error":
      return "bg-red-500";
    default:
      return "bg-gray-800";
  }
};
