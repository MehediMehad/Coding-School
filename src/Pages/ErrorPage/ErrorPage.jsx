import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {


  return (
    <>
    <Helmet>
        <title>Error</title>
    </Helmet>
    <div className="h-screen text-center content-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2 font-medium ">Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
        <NavLink to='/' className="btn bg-[#011640] text-white font-bold text-xl mt-4">Go To Home Page</NavLink>
    </div>
</>
  )
}

export default ErrorPage