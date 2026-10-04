import React, { useRef, useState } from 'react';
import { cn } from 'src/utils';

const FileDropZone = ({
    name,
    label,
    error,
    value = [],
    className = "",
    onChange = () => { },
    ...rest
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);

    // Detectamos si el valor que llega de la BD es la URL (string) de la imagen actual
    const isExistingImage = typeof value === 'string' && value.length > 0;
    const files = Array.isArray(value) ? value : [];

    const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = () => { setIsDragging(false); };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        onChange([...files, ...Array.from(e.dataTransfer.files)]);
    };

    const handleFileChange = (e) => {
        onChange([...files, ...Array.from(e.target.files)]);
    };

    const handleRemoveFile = (indexToRemove) => {
        onChange(files.filter((_, index) => index !== indexToRemove));
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div className={cn("flex flex-col gap-1", className)}>
            {label && <label htmlFor={name} className="text-sm font-medium text-main">{label}</label>}

            {/* Si ya hay una imagen guardada (Modo Edición) */}
            {isExistingImage ? (
                <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                    <img src={value} alt="Preview" className="h-28 w-auto object-contain mb-4 rounded shadow-sm" />
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange([]); // Reiniciamos el estado a arreglo para permitir subir una nueva
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition"
                    >
                        Remover y subir nueva imagen
                    </button>
                </div>
            ) : (
                /* Comportamiento normal del Dropzone para archivos nuevos */
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
                    className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 cursor-pointer transition ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`}
                >
                    <input id={name} {...rest} ref={(e) => { inputRef.current = e; }} type="file" multiple onClick={(e) => e.stopPropagation()} onChange={handleFileChange} className="hidden" />

                    {files.length <= 0 && (
                        <p className="text-gray-500 text-center">
                            {isDragging ? "Suelta los archivos aquí" : "Arrastra archivos aquí o haz clic para seleccionar"}
                        </p>
                    )}

                    {files.length > 0 && (
                        <div className="space-y-2 w-full gap-4 flex flex-wrap items-center justify-center">
                            <ul className="flex flex-wrap gap-4 justify-center w-full">
                                {files.map((file, index) => (
                                    <li key={`${file.name}-${index}`} className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2">
                                        <span className="max-w-52 truncate text-sm text-gray-700">{file.name}</span>
                                        <button type="button" onClick={(e) => { e.stopPropagation(); handleRemoveFile(index); }} className="text-red-500 hover:text-red-700 text-lg leading-none cursor-pointer">✕</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {error && <p className='text-red-600 font-medium text-sm mt-2'>{error.message ?? error}</p>}
                </div>
            )}
        </div>
    );
};

export default FileDropZone;
