import { useState } from 'react';
import classes from './Modal.module.css';

export function Modal({ 
  children,
  isModalOpen,
  onCancelPost
}) {

  return (
    <>
      <div className={classes.backdrop} onClick={onCancelPost} />
      <dialog className={classes.modal} open={isModalOpen}>
        {children}
      </dialog>
    </>
  );
}
