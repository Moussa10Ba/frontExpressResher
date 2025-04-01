
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import UsersList from './components/UsersList'
import Navbar from './sharedComponent/NavBar'

function App() {


  return (
    <>
     <Navbar/>
     <RegisterForm/>
    <LoginForm/>
    <UsersList/>
    </>
  )
}

export default App
