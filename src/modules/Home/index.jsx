import React, { Fragment } from 'react'

import Table from './Table/index.jsx'
import Select from './Select/index.jsx'

import getItemsByTask from '../../helpers/getItemsByTask.js'

// import report from './time-report.json'
import './time-report.json'

class Home extends React.Component {
    state = {
        task: 'All',
        isLoaded: false,
        report: []
    }

    componentDidMount() {
        fetch('/static/time-report.json')
            .then(res => res.json())
            .then(res => this.setState({
                isLoaded: true,
                report: res
            }))
    }

    updateTask = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    render() {
        const { task, report } = this.state
        return (
            <div className="container">
                <Select 
                    onChange={ this.updateTask } 
                    report={ report } 
                />
                <Table 
                    task={ task } 
                    report={ task === 'All' ? report : getItemsByTask(report, task) }
                />
            </div>
        )
    }
}

export default Home