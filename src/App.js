import './App.css'
import React from 'react'
import { Login } from './components/Login'
import { Status } from './components/Status'

function App() {
  const [status, setStatus] = React.useState()

  return (
    <div className="App">
      <Status status={status} />
      <Login setStatus={setStatus} />
    </div>
  )
}

export default App
