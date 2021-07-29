import React from 'react'
import { Link } from 'react-router-dom'
// 同构：在服务端执行一次，在客户端再执行一次

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to='/'>首页</Link>
      <br />
      <Link to='/login'>登录</Link>
    </div>
  )
}

export default Header