import React from 'react'

// 同构：在服务端执行一次，在客户端再执行一次

const Home = () => {
  return (
    <div>
      <h1>Hello SSR!</h1>
      <button onClick={() => alert('alert')}>click</button>
    </div>
  )
}

export default Home