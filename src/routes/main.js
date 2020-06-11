import React from 'react'
import { useLocation } from 'react-router-dom';
//import Web from '../layout/web'
import Web from './web'
import Admin from './admin'

function Main() {
    const location = useLocation()  
    return (
        <div className='App'>
            {location.pathname.indexOf('/admin') !== -1 ? <Admin /> : <Web />}
        </div>
    )
}

export default Main
