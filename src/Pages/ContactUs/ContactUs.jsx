import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const info ={
        name: name,
        email: email,
        message: message
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/messageA', info);
          setEmail('');
          setMessage('');
          toast('message send')
        } catch (error) {
          alert('Error sending message');
        }
      };
    return (
        <section className="py-6 mx-auto h-screen">
            <div className="grid max-w-6xl grid-cols-1 px-6 mt-24 mx-auto lg:px-8 md:grid-cols-2 md:divide-x bg-slate-100 w-10/12">
                <div className="py-6 md:py-10 md:px-6">
                    <h1 className="text-4xl font-bold">Coding School</h1>
                    <p className="pt-2 pb-4 text-xl">Contact us </p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Rigroad Adabor , Dhaka</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>codingschool@.com</span>
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} noValidate="" className="flex flex-col py-6 space-y-6 md:p-10 bg-slate-100">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                    </label>
                    <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 bgb">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;