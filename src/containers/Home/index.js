import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
// 同构：在服务端执行一次，在客户端再执行一次

const Home = (props) => {
  return (
    <div>
      <Header />
      <h1>Hello SSR! {props.name}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps, null)(Home)