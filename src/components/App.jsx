import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Board} from '../pages/Board'

const App = () => {
    return (
        <div className="wrap">
            <Router>
                <div className="page">
                    <Switch>
                        <Route path="/" component={Board}/>
                    </Switch> 
                </div>
            </Router>
        </div>
    )
}

export {
    App
}