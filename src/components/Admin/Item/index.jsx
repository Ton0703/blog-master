import React from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom'
import Edit from '../../../img/edit'
import Delete from '../../../img/delete'

const timeFormat = (t) => {
    const arr = t.replace('Z', '').split('T')
    return (
        arr[0]
    )
}

function Item({del, title, id, time, setId}) {
    const history = useHistory()

    const urlJump = id => {
        history.push(`/admin/edit/${id}`)
    }

    const handleClick = () => {
        del()
        setId(id)

    }
    
    return (
        <div className='item'>
            <div className="item-title">
                <span>
                {title}
                </span>
            </div>
            <div className="item-time">
                <div>
                   {timeFormat(time)}
                </div>
            </div>
            <div className="item-btn">
                <div onClick={() => urlJump(id)}>
                <Edit />
                </div>
                <div onClick={handleClick}>
                    <Delete />
                </div>
            </div>
        </div>
    )
}

export default Item
