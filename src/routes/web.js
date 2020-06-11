import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Web from '../layout/web'
import Login from '../components/GithubLogin'

function web() {
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={Web} />
        </Switch>
    )
}

export default web
