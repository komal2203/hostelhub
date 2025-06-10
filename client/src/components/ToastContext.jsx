// ToastContext.jsx
import { createContext, useState, useContext } from "react";

const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message, type, leaving: false }]);

    setTimeout(() => {
      setToasts((t) =>
        t.map((toast) =>
          toast.id === id ? { ...toast, leaving: true } : toast
        )
      );
      // Wait a bit longer before removing it from state
      setTimeout(() => {
        setToasts((t) => t.filter((toast) => toast.id !== id));
      }, 300); // match slide-out duration
    }, 2700); // show for ~2.7s, then leave for 300ms
  };
  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-5 right-5 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`toast ${
              t.leaving ? "toast-leave" : ""
            } px-4 py-2 rounded shadow text-white transition-all duration-300 ${
              t.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
