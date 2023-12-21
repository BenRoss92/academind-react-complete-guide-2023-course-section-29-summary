import classes from './Modal.module.css';

export function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
