import React, { useRef, useState } from 'react';
import baseUrl from '../../config/BaseUrl';
import { useNavigate } from 'react-router-dom';
const AttendForm = () => {
    const [Images, setImages] = useState(null);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [course, setcourse] = useState('');
    const [phoneNumber, setphoneNumber] = useState()
    const fileInputRef = useRef();
    const navigate = useNavigate();
    const handleImage = (e) => {
        const form = e.target.files[0]
        const imageUrl = URL.createObjectURL(form);
        setImages(imageUrl);
    }

    const handleImageClick = () => {
        // Trigger a click on the file input
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, password, course, phoneNumber, Images }
        try {
            const response = await fetch(`${baseUrl}attendance/`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });


            if (response.ok) {
                console.log(response)
                navigate('/student')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleSubmit} className="flex justify-center  flex-wrap -m-2">
                            <input
                                className='absolute w-1 text-white'
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                ref={fileInputRef}
                            // value={Images}
                            ></input>
                            {Images ?
                                <img src={`${Images}`} onClick={handleImageClick} className='w-40 h-40 z-[1] rounded-full' /> :
                                <img src='/Images/profile.png'
                                    onClick={handleImageClick}
                                    className='w-40 z-[1] rounded-full ' />
                            }
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" value={name} onChange={(e) => { setname(e.target.value) }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                    <input type="password" id="password" name="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="course" className="leading-7 text-sm text-gray-600">Course</label>
                                    <input type="course" id="course" name="course" value={course} onChange={(e) => { setcourse(e.target.value) }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="Number" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                    <input type="Number" id="Number" name="Number" value={phoneNumber} onChange={(e) => { setphoneNumber(e.target.value) }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default AttendForm