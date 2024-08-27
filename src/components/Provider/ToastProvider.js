import React from 'react'
import { TimeInMs } from '../utils/Time'

import useEscapeKey from '../../hooks/useEscapeKey'

export const ToastContext = React.createContext();

function ToastProvider({ children}) {
  const [toastVariant, setToastVariant] = React.useState("notice");
  const [toastMessage, setToastMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]); // Använd en enkel array
  
  const addToast = (event) => {
    event.preventDefault();
    const time = TimeInMs();
    
    setToasts([
      ...toasts,
      { id: time, variant: toastVariant, message: toastMessage }
    ]);

    setToastMessage("")
    setToastVariant("notice")
  }

  const closeToast = (id) => {
    const filteredToast = toasts.filter((toast) => toast.id != id)

    setToasts(filteredToast)
  }

  const closeAllToasts = () => {
    setToasts([])
  }

  const handleToastChange = (event, type) => {
    const value = event.target.value;

    switch (type) {
      case 'variant':
        setToastVariant(value);
        break;
      case 'message':
        setToastMessage(value);
        break;
      // Add more cases here if needed
      default:
        break;
    }
  };

  useEscapeKey(closeAllToasts)

  return (
    <ToastContext.Provider value={{ toasts, addToast, toastMessage, toastVariant, handleToastChange, closeToast, closeAllToasts}}>
      {children}
    </ToastContext.Provider>
  )

}

export default ToastProvider