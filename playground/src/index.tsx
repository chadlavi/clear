import * as React from 'react'
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import {Routes} from './Routes'
import {CSSVariables, GlobalStyles} from './component-lib'

ReactDOM.render(
  <React.StrictMode>
    <CSSVariables/>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
