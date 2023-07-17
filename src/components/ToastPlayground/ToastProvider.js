import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';
import Toast from '../Toast/Toast';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (variant, message) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, element: <Toast id={id} variant={variant}>{message}</Toast>}]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((t) => (t.id !== id)));
  };

  useEscapeKey(() => {
    toasts.forEach((toast) => removeToast(toast.id));
  }, [toasts]);
  
  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;