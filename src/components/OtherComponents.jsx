import React from 'react';
import Icon from './Icon';

export const EventsList = () => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon type="calendar" size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Events</h2>
      </div>
      <p className="text-gray-600">All confirmed events will be displayed here.</p>
    </div>
  </div>
);

export const Positions = () => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon type="business" size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Positions</h2>
      </div>
      <p className="text-gray-600">Job positions and roles will be managed here.</p>
    </div>
  </div>
);

export const Contractors = () => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon type="people" size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Contractors</h2>
      </div>
      <p className="text-gray-600">Contractor information will be displayed here.</p>
    </div>
  </div>
);

export const Users = () => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon type="person" size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Users</h2>
      </div>
      <p className="text-gray-600">User management interface will be here.</p>
    </div>
  </div>
);

