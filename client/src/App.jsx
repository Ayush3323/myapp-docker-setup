import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(`there is an error ${err}`))
  }, [])

  return (
    <>
      <h1>Welcome to react</h1>
      <h2>data {message}</h2>
    </>
  )
}

export default App
