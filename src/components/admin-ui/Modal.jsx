import Button from 'src/shared/components/ui/Button';

export default function Modal({ isOpen, onClose, title = '', children }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="relative bg-white shadow-xl rounded-xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between text-start sm:text-left p-4">
                    <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                        {title}
                    </h2>
                    <Button
                        size='sm'
                        variant='ghost'
                        onClick={onClose}
                        icon="close"
                        aria-label="Cerrar modal"
                    />
                </div>

                <div className="p-4 overflow-y-auto flex-1 text-gray-600">
                    {children}
                </div>
            </div>
        </div>
    );
}