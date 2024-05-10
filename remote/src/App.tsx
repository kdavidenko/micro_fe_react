import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter'

import './index.css'

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <Counter />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
