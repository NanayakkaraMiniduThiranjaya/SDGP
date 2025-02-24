'use client'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'Minebot', path: '/minebot' },
    { name: 'Royalty', path: '/royalty' },
    { name: 'Complains', path: '/complains' },
    { name: 'License Portal', path: '/license-portal' },
    { name: 'Minemore', path: '/minemore' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            variants={itemAnimation}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/">
              <div className="flex items-center">
                <Image 
                  src="/favicon.ico" 
                  alt="Logo" 
                  width={62} 
                  height={62} 
                  className="mr-2 hover:scale-105 transition-transform duration-200"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            variants={itemAnimation}
            className="hidden md:flex items-center space-x-4"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path}>
                  <span className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Sign Up Button */}
          <motion.div 
            variants={itemAnimation}
            className="hidden md:block"
          >
            <Link href="/signup">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              >
                Sign Up
              </motion.span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:bg-gray-100 p-2 rounded-md"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={itemAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path}>
                  <span className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
            {/* Mobile Sign Up Button */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Link href="/signup">
                <span className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  Sign Up
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
