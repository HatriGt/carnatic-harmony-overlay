
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-music-100/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-black rounded-full p-2 mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="black"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-music-800">Melodious Harmony</span>
              <div className="ml-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17H13V15H3V17ZM3 13H21V11H3V13ZM3 9H13V7H3V9ZM3 5H21V3H3V5ZM15 21L21 17L15 13V21Z" fill="#6b21a8"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-music-700 px-3 py-2 font-medium">Home</Link>
                <Link to="/courses" className="text-gray-700 hover:text-music-700 px-3 py-2 font-medium">Courses</Link>
                <Link to="/instructors" className="text-gray-700 hover:text-music-700 px-3 py-2 font-medium">Instructors</Link>
                <Link to="/register" className="text-gray-700 hover:text-music-700 px-3 py-2 font-medium">Register</Link>
              </div>
            </div>
          </div>
          <div>
            <Button variant="ghost" className="hover:text-music-800 hover:bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4C8.97631 4 7.95757 4.20651 7 4.60635C6.04243 5.00619 5.17045 5.58706 4.43934 6.31802C3.70824 7.04898 3.12739 7.92076 2.72765 8.87811C2.32791 9.83546 2.12132 10.854 2.12132 11.8774C2.12132 12.9008 2.32791 13.9193 2.72765 14.8767C3.12739 15.834 3.70824 16.7058 4.43934 17.4368C5.17045 18.1677 6.04243 18.7486 7 19.1484C7.95757 19.5483 8.97631 19.7548 10 19.7548C12.0608 19.7548 14.0366 18.9232 15.4645 17.4368C16.8923 15.9503 17.6777 13.9552 17.6777 11.8774C17.6777 9.79968 16.8923 7.80456 15.4645 6.31802C14.0366 4.83149 12.0608 4 10 4ZM10 21C4.47715 21 0 16.5228 0 11C0 5.47715 4.47715 1 10 1C15.5228 1 20 5.47715 20 11C20 16.5228 15.5228 21 10 21Z" fill="currentColor"/>
                <path d="M23.7071 22.2929L19.7071 18.2929C19.3166 17.9024 18.6834 17.9024 18.2929 18.2929C17.9024 18.6834 17.9024 19.3166 18.2929 19.7071L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929Z" fill="currentColor"/>
              </svg>
            </Button>
            <Button variant="ghost" className="hover:text-amber-600 hover:bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                <path d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
                <path d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z" fill="currentColor"/>
                <path d="M22 12C22 12.5523 21.5523 13 21 13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12Z" fill="currentColor"/>
                <path d="M6 12C6 12.5523 5.55228 13 5 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H5C5.55228 11 6 11.4477 6 12Z" fill="currentColor"/>
                <path d="M19.0711 4.92893C19.4616 5.31945 19.4616 5.95262 19.0711 6.34314L17.6569 7.75736C17.2664 8.14788 16.6332 8.14788 16.2427 7.75736C15.8521 7.36683 15.8521 6.73367 16.2427 6.34314L17.6569 4.92893C18.0474 4.5384 18.6805 4.5384 19.0711 4.92893Z" fill="currentColor"/>
                <path d="M7.75736 16.2427C8.14788 16.6332 8.14788 17.2664 7.75736 17.6569L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L6.34315 16.2427C6.73367 15.8521 7.36684 15.8521 7.75736 16.2427Z" fill="currentColor"/>
                <path d="M4.92893 4.92893C5.31945 4.5384 5.95262 4.5384 6.34315 4.92893L7.75736 6.34314C8.14788 6.73367 8.14788 7.36683 7.75736 7.75736C7.36684 8.14788 6.73367 8.14788 6.34315 7.75736L4.92893 6.34314C4.53841 5.95262 4.53841 5.31945 4.92893 4.92893Z" fill="currentColor"/>
                <path d="M16.2427 16.2427C16.6332 15.8521 17.2664 15.8521 17.6569 16.2427L19.0711 17.6569C19.4616 18.0474 19.4616 18.6806 19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L16.2427 17.6569C15.8521 17.2664 15.8521 16.6332 16.2427 16.2427Z" fill="currentColor"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
