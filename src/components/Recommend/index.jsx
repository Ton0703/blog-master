import React from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'
import fetchRandom from '../../api/fetchRandomData'
import './index.scss'

function Item({title, id}){
    return (
        <div>
            <Link to={`/article/${id}`}>
                {title}
            </Link>
        </div>
    )
}
function recommend() {
    const data = fetchRandom()
   
    return (
        <div className='recommend'>
            <Divider className='title'>推荐文章</Divider>
            <div className="list">
                {data.map((item,index) => (
                    <Item id={item._id} title={item.title} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default recommend
