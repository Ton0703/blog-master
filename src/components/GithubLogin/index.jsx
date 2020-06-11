import React, {useEffect} from 'react'
import axios from '../../utils/axios'

const client_id = '81e10d8f1f7c68c59db2'
const client_secret = 'c097872f4ff19e8626da1d779096d5db0fe18810'

function GithubLogin() {
    useEffect(() => {
       axios.get(`/https://github.com/login/oauth/authorize?client_id=${client_id}`).then(res => {
           console.log(res)
       })
    } ,[])
    return (
        <div>
            Github登陆界面
        </div>
    )
}

export default GithubLogin
