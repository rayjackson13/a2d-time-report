import React from 'react'

import TableRow from './TableRow/index.jsx'

const Table = (props) => {
    const { report } = props

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Project</th>
                    <th>Task</th>
                    <th>Notes</th>
                    <th>Data</th>
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                { report.map((val, id) => <TableRow key={ id } id={ id } input={ val } />) }
            </tbody>
        </table>
    )
}

export default Table