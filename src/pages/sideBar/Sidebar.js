// src/components/Sidebar.js
import React from 'react';
import Logo from '../../components/logo/Logo';
import List from '../../components/list/List';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=" block fixed left-0 top-0 h-full text-white w-52 shadow-lg">
            {/* Logo */}
            <Logo />
            {/* Links */}
            <div>
                <Link to={'/student'} > <List itemTxt={'Shayan'} /></Link>
                <Link to={'/attendance'}> <List itemTxt={'Attendance'} /></Link>
            </div>

        </div>
    );
};

export default Sidebar;


