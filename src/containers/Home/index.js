import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
// 同构：在服务端执行一次，在客户端再执行一次

const Home = (props) => {
  useEffect(() => {
    props.getHomeList()
  },[])
  return (
    <div>
      <Header />
      <h1>Hello SSR! {props.name}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.home
})
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)