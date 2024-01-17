import React from 'react'
import List from '../components/list/List'
import Logo from '../components/logo/Logo'
import Buttons from '../components/buttons/Buttons'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>

            <nav class="bg-gray-700 text-white p-4">
                <nav className="flex justify-between items-center mx-2 md:mx-24">
                    <div className="flex items-center text-[2rem] text-gray-500 font-bold">
                        <MdAccountCircle className="mr-2 text-blue-500 text-[3.2rem]" />{" "}
                        <Logo />
                    </div>
                    <Link to={"/form"}>
                        <Buttons />
                    </Link>
                </nav>
            </nav>

            {/* <!-- Main Content Section --> */}
            <section class="flex flex-wrap">
                {/* <!-- Sidebar --> */}
                <aside class="flex-2 bg-gray-200 p-4 h-[100vh]">
                    <h2 class="text-lg font-bold">Sidebar</h2>
                    {/* <!-- Sidebar content goes here --> */}
                    fjkfdsjlkajjlfjldsf
                </aside>

                {/* <!-- Main Content --> */}
                <main class="flex-1 p-4">
                    {/* <h2 class="text-lg font-bold">Main Content</h2> */}
                    <div className="flex flex-col md:flex-row justify-between pr-2 md:pr-72 shadow-lg text-white bg-blue-500 w-full h-10 rounded-lg">
                        <List itemTxt={"id"} />
                        <List itemTxt={"Profile Img"} />
                        <List itemTxt={"Name"} />
                        <List itemTxt={"Course Name"} />
                    </div>
                </main>


            </section>

            {/* <!-- Footer --> */}
            <footer class="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
                <p>Footer</p>
            </footer>
        </>
    )
}

export default Layout