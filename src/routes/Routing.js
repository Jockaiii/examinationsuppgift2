import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../view/Home'
import { View1 } from '../view/View1'
import { View2 } from '../view/View2'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/view1" component={View1} />
                <Route exact path="/view2" component={View2} />
                <Route component={Home} />
            </Switch>
        </Router>
    )
}
