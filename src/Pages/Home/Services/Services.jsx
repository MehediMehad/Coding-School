import web from '../../../assets/web.png'
import coding from '../../../assets/coding.png'
import app from '../../../assets/app.png'

const Services = () => {
    return (
        <div className="bg-[#f9f9f9] justify-around pt-32 items-center mx-auto">
            <div className="text-center">
                <h1 className=" uppercase text-[#3B41C9] text-5xl">what do we learn ?</h1>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Gain skills in HTML, CSS, JavaScript, and modern frameworks to create responsive, interactive, and dynamic web applications.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                        <img src={web} alt="" className="w-16 h-16 mb-2 -mt-16  rounded-full" />
                        <p className="text-xl font-semibold leading-tight">Web Development</p>
                        <p className="text-sm uppercase">Jonkar Mahmud</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic  dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg> Learn to create powerful, user-friendly mobile apps with our comprehensive app development course. Gain hands-on experience.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                        <img src={app}  alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">App Development </p>
                        <p className="text-sm uppercase">jonkar mahmud</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic  dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Unlock the power of Python with our comprehensive course designed for aspiring developers, data enthusiasts, and tech professionals.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                        <img src={coding}  alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">Python Course</p>
                        <p className="text-sm uppercase">jonkar mahmud</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;