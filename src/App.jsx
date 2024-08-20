import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HomeComponent from './HomeComponent/HomeComponent'
import LoginComponent from './LoginComponent/LoginComponent'
import SignupComponent from './SignupComponent/SignupComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponent/>
      {/* <LoginComponent/> */}
      {/* <SignupComponent/> */}
    </>
  )
}

export default App
