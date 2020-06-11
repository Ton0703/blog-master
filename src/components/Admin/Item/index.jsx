import React from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom'
import Edit from '../../../img/edit'
import Delete from '../../../img/delete'

const timeFormat = (t) => {
    const arr = t.replace('Z', '').split('T')
    return (
        arr[0] + ' ' +  arr[1].substr(0, arr[1].length - 4)
    )
}

function Item({del, title, id, time}) {
    const history = useHistory()

    const urlJump = id => {
        history.push(`/admin/edit/${id}`)
    }
    
    return (
        <div className='item'>
            <div className="item-title">
                {title}
            </div>
            <div className="item-time">
                {timeFormat(time)}
            </div>
            <div className="item-btn">
                <div onClick={() => urlJump(id)}>
                <Edit />
                </div>
                <div onClick={() => del(id)}>
                    <Delete />
                </div>
            </div>
        </div>
    )
}

export default Item
