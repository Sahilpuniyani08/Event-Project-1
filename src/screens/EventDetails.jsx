// components/EventDetails.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEventDetailsById, mockPositions, mockMeetingRooms, mockContractors, mockCoordinators } from '../constants/mockData';
import Icon from '../components/Icon';
import { FaStar } from 'react-icons/fa';

const EventDetails = () => {
  const { id } = useParams();
  const eventDetails = getEventDetailsById(id);
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Event Details');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [searchCoordinator, setSearchCoordinator] = useState('');
  const [selectedCoordinator, setSelectedCoordinator] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const tabs = ['Event Details', 'Assign Coordinator', 'Session Management', 'Generate SOW'];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Filter coordinators based on search
  const filteredCoordinators = mockCoordinators.filter(coordinator =>
    coordinator.name.toLowerCase().includes(searchCoordinator.toLowerCase()) ||
    coordinator.department.toLowerCase().includes(searchCoordinator.toLowerCase())
  );


  // Pagination logic for positions
  const totalPages = Math.ceil(mockPositions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPositions = mockPositions.slice(startIndex, endIndex);

  if (!eventDetails) {
    return (
      <div className="border border-primary sm:ml-5 rounded-xl text-white p-4">
        <div className="text-center">Event not found</div>
      </div>
    );
  }



  const renderEventDetails = () => (
    <div className=" rounded-xl p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-6">Event Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Event Name</label>
          <p className="text-white bg-black/40 border border-primary rounded-lg p-3">{eventDetails.eventName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Client Name</label>
          <p className="text-white bg-black/40 border border-primary rounded-lg p-3">{eventDetails.clientName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
          <p className="text-white bg-black/40 border border-primary rounded-lg p-3">{formatDate(eventDetails.eventStart)}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
          <p className="text-white bg-black/40 border border-primary rounded-lg p-3">{formatDate(eventDetails.eventEnd)}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Contact Info</label>
          <p className="text-white bg-black/40 border border-primary rounded-lg p-3">{eventDetails.contactInfo}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Venue</label>
          <p className="text-white bg-black/40 border border-primary rounded-lg p-3">{eventDetails.venue}</p>
        </div>
      </div>
    </div>
  );

  const renderPositionsTable = () => (
    <div className="">
      <h3 className="text-lg font-semibold mb-4">Required Positions</h3>
      <div className="overflow-x-auto bg-black/30 border border-primary rounded-xl ">
        <table className="w-full text-sm ">
          <thead>
            <tr className="border-b border-primary">
              <th className="text-left py-3 px-2">Position</th>
              <th className="text-left py-3 px-2">Time</th>
              <th className="text-left py-3 px-2">Info</th>
              <th className="text-left py-3 px-2">Quantity</th>
              <th className="text-left py-3 px-2"></th>
            </tr>
          </thead>
          <tbody>
            {currentPositions.map((position) => (
              <tr key={position.id} className="border-b border-gray-700">
                <td className="py-3 px-2 whitespace-nowrap">{position.position}</td>
                <td className="py-3 px-2 whitespace-nowrap text-gray-300">{position.time}</td>
                <td className="py-3 px-2 whitespace-nowrap text-gray-300">{position.info}</td>
                <td className="py-3 px-2 whitespace-nowrap text-purple-400">{position.quantity}</td>
                <td>
                  {/* Available Contractors */}

                  <div className="space-y-2 w-60 py-1">
                    <select
                      value={selectedContractor || ''}
                      onChange={(e) => setSelectedContractor(e.target.value || null)}
                      className="w-full p-2 rounded-lg bg-black/40 border border-primary text-white text-sm"
                    >
                      <option value="">Select a contractor</option>
                      {mockContractors.map((contractor) => (
                        <option key={contractor.id} value={contractor.id} className='bg-black'>
                          {contractor.name} – {contractor.speciality} ★ {contractor.rating}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 gap-2 pb-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-black/40 border border-primary rounded-lg disabled:opacity-50"
            >
              <Icon type="chevronLeft" size={16} />
            </button>
            <span className="text-sm text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-black/40 border border-primary rounded-lg disabled:opacity-50"
            >
              <Icon type="chevronRight" size={16} />
            </button>
          </div>
        )}
      </div>


    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Event Details':
        return (
          <div className="space-y-6">
            {renderEventDetails()}
          </div>
        );

      case 'Assign Coordinator':
        return (
          <div className="space-y-6">
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className=''>
                <h2 className="text-lg font-semibold mb-4">Assign Coordinator</h2>
                {/* Coordinators List */}
                <div className="space-y-2 mb-4">
                  <select
                    value={selectedCoordinator || ''}
                    onChange={(e) => setSelectedCoordinator(e.target.value || null)}
                    className="w-full p-3 rounded-lg bg-black/40 border border-primary text-white text-sm"
                  >

                    {filteredCoordinators.map((coordinator) => (
                      <option key={coordinator.id} value={coordinator.id} className='bg-black'>
                        {coordinator.name} – {coordinator.department} ({coordinator.experience})
                      </option>
                    ))}
                  </select>
                </div>


                <button className="text-primary hover:text-primary/40 text-sm font-medium flex items-center gap-1">
                  <Icon type="add" size={16} />
                  Add New Coordinator
                </button>
              </div>

              <div className=" ">
                <h2 className="text-lg sm:text-lg font-semibold mb-4">
                  {eventDetails.eventName} <span className="text-gray-400 text-sm">(Event Details)</span>
                </h2>
                <div className='flex flex-col space-y-2'>
                  <div className='flex items-center justify-between bg-black/30 border border-primary rounded-xl p-4 '>
                    <div className='flex gap-2  justify-center items-center'>
                      <label className="block text-sm font-medium text-gray-300">Start:</label>
                      <p className="text-white">{formatDate(eventDetails.eventStart)}</p>
                    </div>
                    <div className='flex gap-2'>
                      <label className="block text-sm font-medium text-gray-300 ">End:</label>
                      <p className="text-white">{formatDate(eventDetails.eventEnd)}</p>
                    </div>
                  </div>


                  <div className='bg-black/30 border border-primary rounded-xl  p-3 flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-300 ">Venue</label>
                    <p className="text-white  border-primary rounded-lg">{eventDetails.venue}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Smaller: Assign Contractor */}
              <div className="lg:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Assign Contractor</h2>

                <div className="space-y-2 mb-4 bg-black/50 border border-primary rounded-xl p-4 sm:p-6">
                  {mockMeetingRooms.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedRoom === room.id
                        ? 'bg-primary border border-primary'
                        : 'bg-black/40 border border-primary hover:bg-black/60'
                        }`}
                    >
                      <div className="flex items-center justify-start gap-3 mb-2">
                        <h4 className="font-medium text-sm">{room.name}</h4>
                        <div className={`text-sm  ${selectedRoom === room.id
                          ? 'text-white'
                          : 'text-primary'
                          }`}>

                          <FaStar />
                        </div>
                        <span className=" text-sm">{room.positions}Positions</span>
                      </div>
                      <p className="text-xs text-white">{room.dates}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Larger: renderPositionsTable */}
              <div className="lg:col-span-2">
                {renderPositionsTable()}
              </div>
            </div>

          </div>
        );

      case 'Session Management':
        return (
          <div className="bg-black/30 border border-primary rounded-xl p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Session Management</h2>
            <p className="text-gray-400">Session management features will be implemented here.</p>
          </div>
        );

      case 'Generate SOW':
        return (
          <div className="bg-black/30 border border-primary rounded-xl p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Generate Statement of Work</h2>
            <p className="text-gray-400 mb-4">Generate SOW document for this event.</p>

          </div>
        );

      default:
        return null;
    }
  };


  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="min-h-screen bg-black/50 border border-primary sm:mx-4 rounded-xl text-white p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={handleBack}>
            <Icon type="chevronLeft" size={20} />
          </button>
          <h1 className="text-lg sm:text-xl font-semibold">
            {eventDetails.eventName} <span className="text-gray-400">(Event Details)</span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex mb-4 sm:mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 text-xs   first:rounded-l-xl last:rounded-r-xl sm:text-sm font-medium transition-colors whitespace-nowrap  ${activeTab === tab
                ? 'border border-primary bg-primary text-white'
                : ' border border-primary text-white hover:text-primary'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
          <div className='w-full flex items-center justify-center mt-5'>

            <button className="bg-primary text-white px-6 py-2   rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors">
              Save Edit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;