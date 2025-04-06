import {Link} from  'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light '>
      <div className='container-fluid '>
        <Link className='navbar-brand mx-5' to='/'>Piyam</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse d-flex justify-content-end'  id='navbarNav'>
          <ul className='navbar-nav gap-5'>
            <li className='nav-item '>
              <Link className='nav-link active' aria-current='page' to='/'>Home</Link>    
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>Users</Link>
            </li>
          </ul>
          
          </div>
        </div>
    </div>
  )
}

export default NavBar;