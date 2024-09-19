import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'App'
import './css/index.css'
import './css/lib/loader.css'
import 'swiper/css'

const portfolioApp = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
portfolioApp.render(<App />)
