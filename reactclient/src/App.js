import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './views/PublicPage/WelcomePage';
import LoginPage from './views/PublicPage/LoginPage'
import AdminHome from './views/AccountAdmin/AdminHome';
import UserHome from './views/Users/UserHome';
import ListCondidates from './views/AccountAdmin/ListCondidates';
import CreateCondidate from './views/Users/CreateCondidate';
import About from './views/PublicPage/About';
import './App.css'
import { useEffect, useState } from 'react'
import Contact from './views/PublicPage/Contact';
import Gallery from './views/PublicPage/Gallery';
import TimeOutBackground from "./views/PublicPage/TimeOutBackground";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem('user'))
    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.accessToken) {
      setLoggedIn(false)
      return
    }
  
    // If the token exists, verify it with the auth server to see if it is valid
    fetch('/api/verifyuser', {
      method: 'POST',
      headers: {
        'x-access-token': user.accessToken,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn(r.status === 1)
        // setUserName(user || '')
      })
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/timeout" element={<TimeOutBackground />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<WelcomePage email={userName} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
          <Route path="/adminhome" element={<AdminHome setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
          <Route path="/listofcondidates/:stateId" element={<ListCondidates setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
          <Route path="/userhome" element={<UserHome setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
          <Route path="/createcondidates" element={<CreateCondidate setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
