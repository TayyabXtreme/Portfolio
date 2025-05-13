import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="fixed inset-x-0 py-2 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Muhammad Tayyab
          </a>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-4">
            <nav><Navigation /></nav>
            <button
              onClick={() => setShowCV(true)}
              className="px-4 py-1 rounded button_download text-white hover:bg-blue-700 transition"
            >
              View CV
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          
          </nav>
        </motion.div>
      )}

      {/* FULLSCREEN CV MODAL */}
      {showCV && (
        <div className="fixed inset-0 z-[999] h-full flex flex-col bg-black bg-opacity-90 backdrop-blur-sm text-white">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-semibold">My CV</h2>
            <button
              onClick={() => setShowCV(false)}
              className="text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4">
           <embed
  src="/cv.pdf"
  type="application/pdf"
  className="w-full h-[70vh]"
/>

          </div>
          <div className="p-4 text-center">
            <a
              href="/cv.pdf"
              download="Muhammad_Tayyab_CV"
              className="inline-block px-6 py-3  button_download hover:bg-blue-700 transition rounded text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
