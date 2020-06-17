import React, {useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user/action'
import { formatCountdown } from 'antd/lib/statistic/utils'

const client_id = 'f6e8a4769712dd6d48b9'
const client_secret = '03e37128a252e35d76dd170da3571583f965187a'

function GithubLogin() {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
       location.search.includes('?code=')? dispatch(login(location.search.replace('?code=', ''))) : history.push('/')
    } ,[])
    return (
        <div>
            Github登陆界面
        </div>
    )
}

export default GithubLogin
