"use client"

import React, { useState } from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="text-white text-xl font-bold">Games Kit</a>
                </div>
                <Navlinks className="hidden md:flex space-x-4" />
                <div className="md:hidden flex items-center">
                    <button onClick={() => setShowMenu(!showMenu)} className="text-white text-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Hidden by default) */}
            {showMenu && (
                <Navlinks className="md:hidden bg-blue-500 p-4" />
            )}
        </nav>
    );
};
export default Navbar;