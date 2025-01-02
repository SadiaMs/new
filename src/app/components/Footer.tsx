import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className=" text-yellow-200 text-sm md:text-base">&copy; 2025 Dog Doctor. All Rights Reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <Link href={"/"} className="text-yellow-400 hover:text-red-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href={"/Hero"} className="text-yellow-400 hover:text-red-400">
                Terms of Service
              </a>
            </li>
            <li>
              <Link href={"/Contact"} className=" text-yellow-400 hover:text-red-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
