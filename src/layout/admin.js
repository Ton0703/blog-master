import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Admin/Header'
import Sider from '../components/Admin/Sider'
import Home from '../pages/Admin/home'
import Add from '../pages/Admin/add'
import Edit from '../pages/Admin/edit'

function admin() {
    return (
        <div>
            <Header />
            <Sider />
            <div className='admin'>
                <Switch>
                    <Route path='/admin' component={Home} exact/>
                    <Route path='/admin/add' component={Add} exact />
                    <Route path='/admin/edit/:id' component={Edit} />
                </Switch>
            </div>
        </div>
    )
}

export default admin
