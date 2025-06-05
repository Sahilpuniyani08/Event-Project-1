// components/EventTable.jsx
import React, { useState, useMemo } from 'react';
import Icon from './Icon';
import { useNavigate } from 'react-router';

const EventTable = ({ data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.venue.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleEventClick = (id) => {
    console.log(id)
    navigate(`/event/${id}`)
  }

  return (
    <div className="bg-black/30 border  border-primary rounded-lg shadow-sm">
      {/* Search and Add Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border-b border-gray-200 gap-4">
        <h1 className='text-white font-md text-2xl'>Event Requests</h1>
        <div className='flex space-x-3'>
          <div className="relative w-full sm:w-auto text-white">
            <Icon type="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 border bg-black/20 border-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full sm:w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-purple-600 hover:to-pink-600 transition-colors">
            <Icon type="add" size={20} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full overflow-auto">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium "></th>
              <th className="px-4 py-3 text-left text-sm font-medium ">Event Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium  ">Event Start</th>
              <th className="px-4 py-3 text-left text-sm font-medium  ">Event End</th>
              <th className="px-4 py-3 text-left text-sm font-medium ">Client Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium  ">Contact Info</th>
              <th className="px-4 py-3 text-left text-sm font-medium  ">Venue</th>

            </tr>
          </thead>
          <tbody className="divide-y-2 divide-primary ">
            {currentData.map((item) => (
              <tr key={item.id} className="hover:bg-primary/20 transition-colors text-white" onClick={() => handleEventClick(item.id)}>
                <td className="px-4 py-3">
                  <button className="text-white hover:text-primary transition-colors">
                    <Icon type="visibility" size={20} />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium ">{item.eventName}</div>
                </td>
                <td className="px-4 py-3 text-sm ">
                  {formatDate(item.eventStart)}
                </td>
                <td className="px-4 py-3 text-sm ">
                  {formatDate(item.eventEnd)}
                </td>
                <td className="px-4 py-3 text-sm">{item.clientName}</td>
                <td className="px-4 py-3 text-sm">{item.contactInfo}</td>
                <td className="px-4 py-3 text-sm">{item.venue}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center px-4 py-3 bg-black/80 gap-4">

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <Icon type="chevronLeft" size={20} />
          </button>

          <div className="flex space-x-1">
            {[...Array(Math.min(totalPages, 4))].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-3 py-1 rounded text-sm ${currentPage === pageNumber
                    ? 'text-primary hover:text-primary/200'
                    : 'text-white hover:text-gray-100'
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <Icon type="chevronRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventTable;