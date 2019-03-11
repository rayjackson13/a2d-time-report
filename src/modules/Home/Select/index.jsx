import React from 'react'

const makeOptions = (report) => {
    const set = new Set()
    report.map((val, id) => {
        set.add(val[ 'Task' ])
    })
    return Array.from(set)
}

const Select = (props) => {
    const { report, onChange } = props

    const options = makeOptions(report)
    
    return (
        <select onChange={onChange}>
            <option value="All">All</option>
            { options.map((val, id) => (<option key={ id } value={ val }>{ val }</option>)) }
        </select>
    )
}

export default Select