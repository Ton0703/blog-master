import React, {useState, useEffect, useCallback} from 'react'
import axios from '../../../utils/axios'
import './index.scss'
import Item from '../../../components/Admin/Item'

function Home() {
    const [list, set] = useState([])

    const deleteItem =useCallback((id) => {
        axios.delete(`/article/${id}`).then(() => {
            const newList = list.filter(item => item._id !== id)
            set(newList)
        })
    }, [list])  

    useEffect(() => {
            axios.get('/article/admin').then(res => {
                set(res.data)
            })
    }, [])
    return (
        <div className='admin-home'>
            <div className="articleList">
                <div className="menu-title">
                    <ul>
                        <li>标题</li>
                        <li>发布日期</li>
                        <li>操作</li>
                    </ul>
                </div>
                {list.map((item, index) => (
                    <Item key={index} del={deleteItem}  title={item.title} id={item._id} time={item.createdAt} />
                ))}
            </div>
        </div>
    )
}

export default Home
