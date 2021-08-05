import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
// 同构：在服务端执行一次，在客户端再执行一次

const Home = (props) => {
  // 服务端不执行 useEffect, 服务端需要单独去请求数据
  useEffect(() => {
    // 只有用户进入的第一个页面是服务端渲染  从这个页面跳到其它页面走的是客户端路由
    if (!props.newList.length) {
      props.getHomeList()
    }
  }, [])
  const { newList } = props
  return (
    <div>
      <Header />
      {
        newList.map((item, index) =>
          <div key={item.id}>{index + 1}、{item.title}</div>
        )
      }
    </div>
  )
}

Home.loadData = (store) => {
  // 这个函数负责在服务端渲染之前，把当前页面所需要的数据提前加载好
  return store.dispatch(getHomeList())
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