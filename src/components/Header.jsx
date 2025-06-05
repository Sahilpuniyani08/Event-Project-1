// components/Header.jsx
import React from 'react';
import Icon from './Icon';
import { userProfile } from '../constants/mockData';
import Logo from '../assets/logo.png'
import ProfileImage from './ProfileImage';

const Header = ({ onMenuClick }) => {
  return (
    <header className="px-10 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Icon type="menu" size={24} />
          </button>
          <img 
            src={Logo}
            alt='logo'
            className=" w-6 h-6 sm:w-10 sm:h-10  rounded-full object-cover"
           onError={() => console.log("image error")}
          />
         
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-primary">
            <Icon type="notifications" size={24} />
          </button>

          <div className="flex items-center space-x-3">
            <ProfileImage className="w-10 h-10 rounded-full object-cover" /> 
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-cyan-200">Hi, {userProfile.name}</p>
              <p className="text-xs text-white">welcome back!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;