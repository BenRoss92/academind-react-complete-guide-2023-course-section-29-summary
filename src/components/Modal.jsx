import { useState } from 'react';
import classes from './Modal.module.css';

export function Modal({ 
  children,
  isModalOpen,
  setIsModalOpen
}) {

  return (
    <>
      <div className={classes.backdrop} onClick={() => setIsModalOpen(false)} />
      <dialog className={classes.modal} open={isModalOpen}>
        {children}
      </dialog>
    </>
  );
}
