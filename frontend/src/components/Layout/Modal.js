// src/components/Modal.js
import { XCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const portalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portalRoot);
};

// eslint-disable-next-line react/prop-types
const Modal = ({ title, isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="modal-overlay fixed top-0 left-0 bottom-0 right-0 flex flex-row justify-center items-center">
        <div className="modal-content bg-white p-4 rounded-xl my-4 w-1/4 lg:w-1/2 h-auto overflow-y-scroll" style={{maxHeight: '680px'}} ref={modalRef}>
          <header className='w-full flex flex-row justify-between items-center border-b pb-4'>
            <p className='text-lg font-semibold text-gray-500'>{title}</p>
            <button
              type="button"
              onClick={() => onClose(false)}
              className="inline-flex justify-center rounded-md bg-transparent "
            >
              <XCircleIcon className='w-10 h-10 text-gray-500 hover:text-gray-700' />
            </button>
          </header>
          <section className='mt-4'>
            {children}
          </section>

        </div>
      </div>
    </Portal>
  );
};

export default Modal;
