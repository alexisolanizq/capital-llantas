import { useEffect, useRef } from 'react';
import Button from 'src/shared/components/ui/Button';

export default function Modal({ isOpen, onClose, title, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
            document.body.style.overflow = 'hidden';
        } else {
            dialog.close();
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        const dialogDimensions = dialogRef.current.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            onClose?.();
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        onClose?.();
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onCancel={handleCancel}
            onClick={handleBackdropClick}
            className="modal-box modal-backdrop focus:outline-none"
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                    {title}
                </h2>
                <Button
                    variant='ghost'
                    onClick={onClose}
                    size='sm'
                    type="button"
                    aria-label="Cerrar modal"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Button>
            </div>

            <div className="text-gray-700 text-base leading-relaxed">
                {children}
            </div>
        </dialog>
    );
}