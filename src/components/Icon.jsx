// components/Icon.jsx
import React from 'react';
import {
  FiCalendar,
  FiEye,
  FiSearch,
  FiPlus,
  FiUsers,
  FiMapPin,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiBell
} from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const Icon = ({ type, size = 20, className = "" }) => {
  const icons = {
    calendar: FiCalendar,
    visibility: FiEye,
    search: FiSearch,
    add: FiPlus,
    people: FiUsers,
    location: FiMapPin,
    business: HiOutlineOfficeBuilding,
    person: FiUser,
    logout: FiLogOut,
    menu: FiMenu,
    close: FiX,
    chevronLeft: FiChevronLeft,
    chevronRight: FiChevronRight,
    notifications: FiBell
  };

  const IconComponent = icons[type];

  if (!IconComponent) {
    return <span className={`inline-block ${className}`} style={{ fontSize: size }}>⚪</span>;
  }

  return (
    <IconComponent 
      size={size} 
      className={className}
    />
  );
};

export default Icon;