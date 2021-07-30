import axios from 'axios'
export const getHomeList = () => {
  return () => {
    axios.get('http://127.0.0.1:4523/mock/244/news')
      .then(res => {
        console.log(res);
      })
  }
}