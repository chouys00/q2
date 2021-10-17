import {useEffect} from 'react';
import './table.scss';


const Table = ({tableData, columns, currentPage, pageSize}) => {

    useEffect(() => {
    }, [currentPage])

    const handleData = () => {
        const firstIndex = (currentPage - 1) * pageSize
        const lastIndex = firstIndex + pageSize
        return tableData.slice(firstIndex, lastIndex)
    }
    return (
        <table className='table'>
            <thead>
            <tr className='tableHead'>
                {
                    columns.map((item, key) =>
                        <td key={key} width={item.width}>{item.value}</td>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                handleData().map((tr, trKey) => {
                    return (
                        <tr key={trKey}>
                            {
                                columns.map((item, tdKey) => {
                                    return (
                                        item.render ? (
                                            <td key={tdKey}>
                                                {item.render(item, tdKey)}
                                            </td>
                                        ) : (
                                            <td key={tdKey}>
                                                {tr[item.indexName]}
                                            </td>
                                        )
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )

}

export default Table;