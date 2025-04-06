
import './App.css'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import NotFoundPage from './components/NotFoundPage'
import RegisterForm from './components/RegisterForm'
import UsersList from './components/UsersList'
import Navbar from './sharedComponent/NavBar' 
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element={<NotFoundPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/register/:id" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/users" element={<UsersList />} /> 
      <Route path="*" element={<NotFoundPage/>} />
     </Routes>
    </Router>
  )
}

export default App
