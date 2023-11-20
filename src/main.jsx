import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App.jsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Router>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Router> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
