import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { menuItems } from '../constants/mockData';

 const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const currentPath = location.pathname.replace(/^\/+/, ''); 

  const handleMenuClick = (item) => {
    if (item.submenu) {
      setOpenSubmenu(openSubmenu === item.id ? null : item.id);
    } else {
      navigate(`/${item.id}`);
      if (window.innerWidth < 1024) onClose();
    }
  };

  const handleSubmenuClick = (subItemId) => {
    navigate(`/${subItemId}`);
    if (window.innerWidth < 1024) onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 border bottom-2 bg-black/90 lg:bg-black/50 border-primary rounded-xl text-white transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-2 lg:static lg:z-auto`}
      >
        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => {
              const isActiveMain =
                item.id === currentPath ||
                (item.submenu &&
                  item.submenu.some((sub) => sub.id === currentPath));

              return (
                <div key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                      isActiveMain
                        ? 'border-pimary text-primary border  border-primary'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    <Icon type={item.icon} size={20} />
                    <span>{item.label}</span>
                  </button>

                  {/* Submenu as Button List */}
                  {item.submenu && openSubmenu === item.id && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((subItem) => {
                        const isSubActive = subItem.id === currentPath;
                        return (
                          <button
                            key={subItem.id}
                            onClick={() => handleSubmenuClick(subItem.id)}
                            className={`block text-left w-full px-3 py-1 rounded-lg text-sm border-l-2 rounded-tl-none ${
                              isSubActive
                                ? 'text-primary  border-primary'
                                : 'text-white  hover:text-white/80 border-white'
                            }`}
                          >
                            {subItem.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Logout Section */}
        <div className="p-4 absolute bottom-0 w-full">
          <button className="flex items-center space-x-3 px-3 py-2 bg-black hover:bg-primary/50 shadow-sm shadow-primary text-gray-300  hover:text-white rounded-lg transition-colors w-full">
            <Icon type="logout" size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};


export default Sidebar