// components/ui/Modal.tsx
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  icon: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  icon,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div
        className='absolute h-screen inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300'
        onClick={onClose}
      />

      {/* Modal content */}
      <div className=' max-w-2xl relative bg-white rounded-xl shadow-xl p-6 w-4/5 z-10 animate-fade-in'>
        <div className='flex gap-x-1 text-gray-800'>
          <div>{icon}</div>
          <div>
            {title && <h3 className='text-lg font-semibold mb-4'>{title}</h3>}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
