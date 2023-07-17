import React from 'react';

import { ToastContext } from '../ToastPlayground/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

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
