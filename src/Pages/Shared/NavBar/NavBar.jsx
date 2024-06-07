import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/placeholder.jpg'
import logo from '../../../assets/canva.png'
import useRole from '../../../hooks/useRole'


const NavBar = () => {
  const { user, logOut } = useAuth()
  console.log(user);
  const [role] = useRole()
  const navLinks = <>
    <li><Link to="/">Home</Link></li>
    {
      !user && <li><Link to="/login">Dashboard</Link></li>
    }
    {
      user && role == "Employee" && <li><Link to="/dashboard/work-sheet">Dashboard</Link></li>
    }
    {
      user && role == "HR" && <li><Link to="/dashboard/employee-list">Dashboard</Link></li>
    }
    {
      user && role == "Admin" && <li><Link to="/dashboard/em">Dashboard</Link></li>
    }
  </>


  return (
    // <div className='fixed w-full max-h-20 bg-white z-10 shadow-sm'>
    //   <div className='py-4 border-b-[1px]'>

    //     <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
    //       {/* Logo */}
    //       <Link to='/'>
    //         <img
    //           // className='hidden md:block'
    //           src='https://i.ibb.co/4ZXzmq5/logo.png'
    //           alt='logo'
    //           width='100'
    //           height='100'
    //         />
    //       </Link>
    //       {/* Dropdown Menu */}
    //       <div className='relative'>
    //         <div className='flex flex-row items-center gap-3'>
    //           {/* Become A Host btn */}
    //           <div className='hidden md:block'>
    //             {!user && (
    //               <button
    //                 disabled={!user}
    //                 className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
    //               >
    //                 Host your home
    //               </button>
    //             )}
    //           </div>
    //           {/* Dropdown btn */}
    //           <div
    //             onClick={() => setIsOpen(!isOpen)}
    //             className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
    //           >
    //             <AiOutlineMenu />
    //             <div className='hidden md:block'>
    //               {/* Avatar */}
    //               <img
    //                 className='rounded-full'
    //                 referrerPolicy='no-referrer'
    //                 src={user && user.photoURL ? user.photoURL : avatarImg}
    //                 alt='profile'
    //                 height='30'
    //                 width='30'
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         {isOpen && (
    //           <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
    //             <div className='flex flex-col cursor-pointer'>
    //               <Link
    //                 to='/'
    //                 className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //               >
    //                 Home
    //               </Link>

    //               {user ? (
    //                 <>
    //                   {
    //                     role === "Employee" && <>
    //                       <Link
    //                         to='/dashboard/work-sheet'
    //                         className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                       >
    //                         Dashboard
    //                       </Link>
    //                     </>
    //                   }
    //                   {
    //                     role === "HR" && <>
    //                       <Link
    //                         to='/dashboard/employee-list'
    //                         className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                       >
    //                         Dashboard
    //                       </Link>
    //                     </>
    //                   }
    //                   {
    //                     role === "Admin" && <>
    //                       <Link
    //                         to='/dashboard/work-sheet'
    //                         className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                       >
    //                         Dashboard
    //                       </Link>
    //                     </>
    //                   }
    //                   <div
    //                     onClick={logOut}
    //                     className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
    //                   >
    //                     Logout
    //                   </div>
    //                 </>
    //               ) : (
    //                 <>
    //                   <Link
    //                     to='/login'
    //                     className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                   >
    //                     Login
    //                   </Link>
    //                   <Link
    //                     to='/signUp'
    //                     className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                   >
    //                     Sign Up
    //                   </Link>
    //                 </>
    //               )}
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>

    //   </div>
    // </div>
    <div className="flex bg-[#54a2eb]">
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
