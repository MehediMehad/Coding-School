import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import { TbFidgetSpinner } from 'react-icons/tb'
// import signUpImg from '../../assets/signUp.jpg'
import { useState } from 'react'
import useAxiosCommon from '../../hooks/useAxiosCommon'

const SignUp = () => {
    const navigate = useNavigate()
    const axiosCommon = useAxiosCommon()
    const [roleValue, setRoleValue] = useState('')

    const handleChange = (event) => {
        setRoleValue(event.target.value)
    }
    const {
        createUser,
        signInWithGoogle,
        updateUserProfile,
        loading,
        setLoading,
    } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()
        if (!roleValue) {
            return alert("Set Roll")
        }
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        // const role = form.role.value
        const salary = form.salary.value
        const designation = form.designation.value
        const bankAccount = form.bankAccount.value
        const password = form.password.value
        const image = form.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        try {
            setLoading(true)
            // 1. Upload image and get image url
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY
                }`,
                formData
            )
            console.log(data.data.display_url)

            //2. User Registration
            const result = await createUser(email, password)
            console.log(result)

            // 3. Save username and photo in firebase
            await updateUserProfile(name, data.data.display_url)
            const userInfo = {
                name: name,
                email: email,
                role: roleValue,
                designation: designation,
                salary: salary,
                bankAccount: bankAccount
            }
            console.log(userInfo);
            axiosCommon.put('/users', userInfo)
            navigate('/')
            alert('Registration Successful')
        } catch (err) {
            console.log(err)
            alert(err.message)
        }
    }

    // handle google signIn
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: "Employee",
                designation: 'default',
                salary: 11111,
                bankAccount:9999
            }
            axiosCommon.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div className=''>
            {/* <div className='w-1/2 md:flex justify-center h-2/6 hidden'>
                <img src={signUpImg} alt="" />
            </div> */}
            <div className=' md:mx-60 mt-10 items-center bg-black rounded-md'>
                <div className='flex flex-col p-6 rounded-md  bg-gray-100 text-gray-900 '>
                    <div className='mb-8 text-center'>
                        <h1 className='mb-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to AWEI</p>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-6 '>
                        <div className='space-y-4'>
                            <div className="grid grid-cols-3 gap-x-5">
                                {/* role */}
                            <div className='col-span-1'>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Role
                                </label>
                                <select value={roleValue}
                                    onChange={handleChange}
                                    required
                                    className="select select-bordered w-full focus:outline-[#2f47ba] bg-gray-200 text-gray-900">
                                    <option defaultValue="">Role</option>
                                    <option value="Employee">Employee</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>
                            <div className='col-span-1'>
                                <label htmlFor='designation' className='block mb-2 text-sm'>
                                Designation
                                </label>
                                <input
                                    type='text'
                                    name='designation'
                                    id='designation'
                                    placeholder='Enter Designation'
                                    className='w-full px-3 py-3 border rounded-md border-gray-300 focus:outline-[#2f47ba] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div className='col-span-1'>
                                <label htmlFor='salary' className='block mb-2 text-sm'>
                                 Salary
                                </label>
                                <input
                                    type='number'
                                    name='salary'
                                    id='salary'
                                    placeholder='Enter Salary'
                                    className='w-full px-3 py-3 border rounded-md border-gray-300 focus:outline-[#2f47ba] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            </div>
                            {/* 2nd row */}
                            <div className="flex">
                            <div className='md:w-1/2'>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>
                            {/* bank_account_no */}
                            <div className='w-full'>
                                <label htmlFor='bankAccount' className='block mb-2 text-sm'>
                                 Bank Account
                                </label>
                                <input
                                    type='number'
                                    name='bankAccount'
                                    id='bankAccount'
                                    placeholder='Enter Bank Account'
                                    className='w-full px-3 py-3 border rounded-md border-gray-300 focus:outline-[#2f47ba] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2f47ba] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2f47ba] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    autoComplete='new-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2f47ba] bg-gray-200 text-gray-900'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type='submit'
                                className='bg-[#2f47ba] w-full rounded-md py-3 text-white'
                            >
                                {loading ? (
                                    <TbFidgetSpinner className='animate-spin m-auto' />
                                ) : (
                                    'Continue'
                                )}
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            SignUp with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <button
                        disabled={loading}
                        onClick={handleGoogleSignIn}
                        className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                    >
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </button>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-[#2f47ba] text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp