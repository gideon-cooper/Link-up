import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(reducers)

store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
