import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        {
          routes.map((item =>
            <div key={item.key}>
              <Route {...item} />
            </div>
          ))
        }
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))