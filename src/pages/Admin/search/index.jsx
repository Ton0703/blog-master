import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../utils/axios'
import './index.scss'

function Search() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    
    const fetchDate = () => {
        axios.get(`/article?key=${value}`).then(res => {
            setResult(res.data.article)
        })
    }

    const handleClick = () => {
         fetchDate()
         setValue('')
    }
    const handlePress = e => {
        if(e.key === 'Enter'){
            fetchDate()
            setValue('')
        }
    }
    return (
        <div className='admin-search'>
            <div className='search-wrapper'>
                <input onKeyPress={handlePress} placeholder='输入关键字' type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={handleClick}>搜索</button>
            </div>
            <div className="result">
                {result.map((item, index) => (
                    <div className='result-item' key={index}>
                        <Link to={`/admin/edit/${item._id}`}>
                           {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
