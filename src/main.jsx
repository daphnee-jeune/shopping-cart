import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/router'
import { RouterProvider } from 'react-router-dom'

<router />

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
