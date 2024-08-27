import React from 'react';
import FocusLock from 'react-focus-lock';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf( { toasts }) {

  return (
    <ol 
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}>
      {
        toasts.map(({id, variant, message}) => {
          return (
            <li className={styles.toastWrapper} key={id} id={id}>
              <Toast variant={variant} id={id}>
                {message}
              </Toast>
            </li> 
          )
        })
      }
    </ol>
  );
}

export default ToastShelf;
