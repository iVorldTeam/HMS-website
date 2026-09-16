import './App.css'
import { useEffect } from 'react'
import Routes from './components/Routes/routes'
import { useContextData } from './components/context/contextApi'
import Footer from './components/userCommon/Footer'

function App() {
  const { setUserProfile } = useContextData()
  useEffect(() => {
    fetch("http://localhost:3000/api/users/me", {
      method: "GET",
      credentials: "include"
    })
      .then((res) => {
        return res.json()
      }).then((data) => {
        if (!data.isSave) {
          console.log(data)
          return setUserProfile(null)
        }
        setUserProfile(data.user)
      })

  }, [])
  return (
    <>
      <Routes />
      <Footer/>
    </>
  )
}

export default App
