import React from 'react'
import './index.scss'
import NoData from '../../img/nodata'

function nodata() {
    return (
        <div className='nodata'>
            <NoData />
            <span>
                没有数据
            </span>
        </div>
    )
}

export default nodata
