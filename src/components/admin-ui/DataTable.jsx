import React, { useState } from 'react'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

const DataTable = ({
    data = [],
    columns = [],
    isLoading = true
}) => {

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    })

    return (
        <>
            <div className='relative w-fit'>
                <input
                    type="text"
                    value={filtering}
                    placeholder='Buscar'
                    onChange={(e) => setFiltering(e.target.value)}
                    className='p-2 bg-surface border-2 border-line text-primary text-sm rounded-xl mb-4 outline-0'
                />
                {
                    filtering && (
                        <button
                            className='absolute right-2.5 top-1.5'
                            onClick={() => setFiltering('')}
                        >
                            <i className='ri-close-line text-sm font-semibold text-shadow-primary-contrast' />
                        </button>
                    )
                }
            </div>

            <div className="w-full overflow-x-auto rounded-2xl custom-scroll border-2 border-line">
                <table className='w-full'>
                    <thead className='sticky bg-sunken top-0 z-10'>
                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className='divide-x divide-line'>
                                    {
                                        headerGroup.headers.map((header) => (
                                            <th key={header.id} onClick={header.column.getToggleSortingHandler()} className='cursor-pointer px-4 py-3 text-left text-xs text-primary-disabled font-semibold uppercase tracking-wider whitespace-nowrap min-w-37.5'>
                                                {
                                                    flexRender(header.column.columnDef.header, header.getContext())
                                                }
                                                {
                                                    { asc: '🔼', desc: '🔽' }[header.column.getIsSorted() ?? null]
                                                }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody className='divide-x divide-y divide-line'>
                        {
                            isLoading && (
                                <tr>
                                    <td colSpan={columns.length} className="p-0">
                                        <div className="w-full h-1 bg-gray-700 overflow-hidden relative">
                                            <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 animate-[loading_1s_linear_infinite]" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        {

                            !isLoading && table.getRowModel().rows.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length} className='px-4 py-6 text-center text-primary'>
                                        No se encontraron registros
                                    </td>
                                </tr>
                            ) :
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className='
                                    odd:bg-surface
                                    even:bg-sunken divide-x 
                                      divide-primary-soft
                                      dark:divide-deborder-depth-600'>
                                        {
                                            row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} className='px-4 py-3 text-sm divide-depth-600
                                                dark:text-primary whitespace-nowrap min-w-37.5'>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex items-center gap-x-4 mt-4'>
                <button className='px-4 py-2 rounded-lg text-sm text-primary hover:text-primary-disabled' onClick={() => table.setPageIndex(0)} >
                    <i className="ri-arrow-left-double-line" />
                </button>
                <button className='px-4 py-2 rounded-lg text-sm text-primary hover:text-primary-disabled' onClick={() => table.previousPage()}>
                    <i className="ri-arrow-left-s-line" />
                </button>
                <button className='px-4 py-2 rounded-lg text-sm text-primary hover:text-primary-disabled' onClick={() => table.nextPage()}>
                    <i className="ri-arrow-right-s-line" />
                </button>
                <button className='px-4 py-2 rounded-lg text-sm text-primary hover:text-primary-disabled' onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                    <i className="ri-arrow-right-double-line" />
                </button>
            </div>
        </>
    )
}

export default DataTable