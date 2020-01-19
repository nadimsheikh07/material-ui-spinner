import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SpinnerProvider } from 'material-ui-spinner'
import App from './App'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <SpinnerProvider SpinnerProps={{ autoHideDuration: 3000 }} direction={{ vertical: 'top', horizontal: 'left' }}>
            <App />
        </SpinnerProvider>
    </Provider>,
    document.querySelector('#root')
)
