// components/Estimate.jsx
import React from 'react';
import Icon from '../components/Icon';


const Estimate = () => (
  <div className=" border border-primary sm:ml-5 rounded-xl ">
    <div className="bg-black/50 rounded-lg shadow-sm p-6 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <Icon type="business" size={24} className="text-primary" />
        <h2 className="text-2xl font-bold ">Estimate</h2>
      </div>
      <p className="mb-6">Event estimates and pricing will be managed here.</p>
      <div className="space-y-4">
        <div className="border border-primary p-4 rounded-lg">
          <h3 className="font-semibold ">Quick Estimate Calculator</h3>
          <p className="text-sm mt-1">Calculate event costs based on requirements</p>
        </div>
        <div className="border border-primary  p-4 rounded-lg">
          <h3 className="font-semibold ">Pricing Templates</h3>
          <p className="text-sm mt-1">Pre-defined pricing for common event types</p>
        </div>
      </div>
    </div>
  </div>
);

export default Estimate;