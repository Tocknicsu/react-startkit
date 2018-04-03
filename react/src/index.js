import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'js/App'

if (typeof (document) !== 'undefined' && window) {
  window.onload = () => {
    return render(
      (
        <App />
      ),
      document.getElementById('app')
    )
  }
}

if (module.hot) {
  module.hot.accept('./js/App', () => {
    const NextApp = require('./js/App').default
    render(
      (
        <AppContainer>
          <NextApp />
        </AppContainer>
      ),
      document.getElementById('app')
    )
  })
}
