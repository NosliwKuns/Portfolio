import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Intro from './components/Intro'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro>
      <App />
    </Intro>
  </React.StrictMode>
)
