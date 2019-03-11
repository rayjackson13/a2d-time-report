import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './Home/index.jsx'
import NotFoundPage from './Error/NotFoundPage/index.jsx'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route component={ NotFoundPage } />
        </Switch>
    </Router>
)

export default Routes