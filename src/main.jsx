import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.jsx'
import {Provider} from 'react-redux'
import { Counter2 } from './Counter/Counter2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Counter2/>
    </Provider>
  </StrictMode>,
)
