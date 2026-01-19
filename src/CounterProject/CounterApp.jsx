import React from 'react'
import CounterAppUI from './CounterAppUI'
import { Provider } from 'react-redux'
import store from './store/store'

const CounterApp = () => {
  return (
    <div>
      <Provider store={store}>
        <CounterAppUI/>
      </Provider>
    </div>
  )
}

export default CounterApp