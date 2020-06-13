import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Admin/Header'
import Sider from '../components/Admin/Sider'
import Home from '../pages/Admin/home'
import Add from '../pages/Admin/add'
import Edit from '../pages/Admin/edit'

function Admin() {
    const [sliderVisible, setSliderVisible] = useState(false)
    return (
        <div>
            <Header set={setSliderVisible} visible={sliderVisible}/>
            <Sider visible={sliderVisible}/>
            <div className={`admin ${sliderVisible ? '' : 'visible'}`}>
                <Switch>
                    <Route path='/admin/add' component={Add} exact />
                    <Route path='/admin/edit/:id' component={Edit} />
                    <Route path='/admin' component={Home} />
                </Switch>
            </div>
        </div>
    )
}

export default Admin
