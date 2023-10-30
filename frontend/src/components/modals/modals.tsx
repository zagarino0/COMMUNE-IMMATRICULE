import * as React from "react";

interface ModalProps {
  isOpen?: boolean |  void ;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode; // Utilisez ReactNode ici
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="fixed inset-0 bg-neutral-700/70 bg-opacity-75 transition-opacity" onClick={onClose} />
      <div className={`bg-white rounded-xl z-50 ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
