import React from 'react'
import styles from './style.sass'

const isFullRow = (input) => {
    for (let value of Object.values(input)) {
        if (value === "" || value == null || value == undefined) return false
    }
    
    return true
}

const TableRow = (props) => {
    const { id, input } = props

    return (
    <tr className={ !isFullRow(input) ? styles.notFull : "" }>
        <td>{ id }</td>
        <td>{ `${ input[ "First Name" ] } ${ input[ "Last Name" ] }` }</td>
        <td>{ input[ "Project" ] }</td>
        <td>{ input[ "Task" ] }</td>
        <td>{ input[ "Notes" ] }</td>
        <td>{ input[ "Date" ] }</td>
        <td>{ input[ "Hours" ] }</td>
    </tr>
    )
}

export default TableRow