import React from 'react';
import Icon from './Icon';
import ProfileImage from './profileImage';
import { userProfile } from '../constants/mockData';

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

export const Profile = () => (
  <div className="p-4 lg:p-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon type="person" size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <ProfileImage className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{userProfile.name}</h3>
          <p className="text-gray-600">{userProfile.role}</p>
          <p className="text-sm text-gray-500">{userProfile.email}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800">Notification Preferences</h4>
          <p className="text-sm text-gray-600 mt-1">Configure how you receive notifications</p>
        </div>
      </div>
    </div>
  </div>
);