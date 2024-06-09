import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/placeholder.jpg'
// import logo from '../../../assets/canva.png'
import useRole from '../../../hooks/useRole'


const NavBar = () => {
  const { user, logOut } = useAuth()
  console.log(user);
  const [role, roleLoading] = useRole()


  const navLinks = <>
    <li><Link to="/">Home</Link></li>
    {
      !user && <li><Link to="/login">Dashboard</Link></li>
    }
    {
      user && !roleLoading && role == "Employee" && <li><Link to="/dashboard/work-sheet">Dashboard</Link></li>
    }
    {
      user && role == "HR" && <li><Link to="/dashboard/employee-list">Dashboard</Link></li>
    }
    {
      user && role == "AB" && <li><Link to="/dashboard/all-employee-list">Dashboard</Link></li>
    }
  </>



  return (

    <div className="flex bg-[#54a2eb] ">
      <div className="navbar bg-[#54a2eb]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <NavLink to='/'> Coding School</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
      </div>

      <div className="dropdown dropdown-end z-10">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mt-2 md:mr-4">
          <div className="w-10 rounded-full">
            {user ? <img alt="Tailwind CSS Navbar component" src={ user.photoURL } /> : <img alt="user Photo" src={avatarImg} />}
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {
            user ? <li><a
              onClick={logOut}
            >
              Logout</a></li> : <li><NavLink to='/login'>Login </NavLink> </li> 
          }
        </ul>
      </div>
    </div>


  )
}

export default NavBar;
