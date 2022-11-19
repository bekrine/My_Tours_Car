


export const Table=({children})=>{
    return(
        <div className="overflow-x-auto mt-10 relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {children}
            </table>
            </div>

    )
}


export const TableHeadr=({children})=>{
    return(
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            {children}
            </tr>
            </thead>

    )
}


export const TableTh=({thead})=>{
    return(
            <th scope="col" className="py-3 px-6">
                    {thead}
                </th>

    )
}

export const TableBody=({children})=>{
    return(
        <tbody>
        {children}
        </tbody>
    )
}


export const TableTr=({children})=>{
    return(
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {children}
    </tr>)
}


export const TableTd=({tableTd})=>{
    return(
        <td className="py-4 px-6">
            {tableTd}
        </td>
    )
}