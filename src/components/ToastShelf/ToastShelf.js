import React from 'react';

import { ToastContext } from '../ToastPlayground/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  React.useEffect(() => {
    const escapeKeyListener = (e) => {
      if (e.key === 'Escape') {
        toasts.forEach((toast) => removeToast(toast.id));
      }
    };
    document.addEventListener('keydown', escapeKeyListener);
    return () => {
      document.removeEventListener('keydown', escapeKeyListener);
    };
  }, [toasts, removeToast]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
      <li className={styles.toastWrapper} key={index}>
        {toast.element}
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
