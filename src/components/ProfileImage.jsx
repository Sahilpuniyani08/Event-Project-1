// components/ProfileImage.jsx
import React, { useState } from 'react';
import { userProfile } from '../constants/mockData';

const ProfileImage = ({ className }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`${className} bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold`}>
        {userProfile.initials}
      </div>
    );
  }

  return (
    <img
      src="/src/assets/images/profile.jpg"
      alt="Profile"
      className={className}
      onError={() => setImageError(true)}
    />
  );
};

export default ProfileImage;