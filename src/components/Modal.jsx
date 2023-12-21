import { useState } from 'react';
import classes from './Modal.module.css';

export function Modal({ children }) {

  const [ isOpen, setIsOpen ] = useState(true);

  return (
    <>
      {isOpen && 
        <div className={classes.backdrop} onClick={() => setIsOpen(false)} />
      }
      <dialog className={classes.modal} open={isOpen}>
        {children}
      </dialog>
    </>
  );
}
