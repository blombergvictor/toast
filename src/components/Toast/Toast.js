import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../Provider/ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { closeToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  
  
  return (
    
    <div className={`${styles.toast} ${styles[variant]}`} role={variant} >
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>

      <p className={styles.content}>
        {children}
      </p>
      
      <button 
        className={styles.closeButton} 
        onClick={() => closeToast(id)}        
        aria-label="Dismiss message"
        aria-live="off">  
        <X size={24} />
        <VisuallyHidden>Close Toast</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast;
