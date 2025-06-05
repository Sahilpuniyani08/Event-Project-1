// constants/mockData.js
export const mockEventRequests = [
  { id: 1, eventName: 'Corporate Annual Conference', eventStart: '2024-01-12', eventEnd: '2024-01-14', clientName: 'Muhammad Asad', contactInfo: '+1 234 566 7890', venue: 'Grand Convention Center' },
  { id: 2, eventName: 'Product Launch Event', eventStart: '2024-01-15', eventEnd: '2024-01-15', clientName: 'Sarah Johnson', contactInfo: '+1 234 567 8901', venue: 'Tech Hub Auditorium' },
  { id: 3, eventName: 'Wedding Reception', eventStart: '2024-01-20', eventEnd: '2024-01-20', clientName: 'Alex Rodriguez', contactInfo: '+1 234 567 8902', venue: 'Sunset Garden Resort' },
  { id: 4, eventName: 'Charity Fundraiser Gala', eventStart: '2024-01-25', eventEnd: '2024-01-25', clientName: 'Emily Chen', contactInfo: '+1 234 567 8903', venue: 'Metropolitan Ballroom' },
  { id: 5, eventName: 'Music Festival', eventStart: '2024-02-01', eventEnd: '2024-02-03', clientName: 'David Thompson', contactInfo: '+1 234 567 8904', venue: 'Central Park Amphitheater' },
  { id: 6, eventName: 'Tech Summit 2024', eventStart: '2024-02-08', eventEnd: '2024-02-10', clientName: 'Lisa Zhang', contactInfo: '+1 234 567 8905', venue: 'Innovation Center' },
  { id: 7, eventName: 'Art Exhibition Opening', eventStart: '2024-02-15', eventEnd: '2024-02-15', clientName: 'Michael Brown', contactInfo: '+1 234 567 8906', venue: 'Modern Art Gallery' },
  { id: 8, eventName: 'Business Networking Event', eventStart: '2024-02-20', eventEnd: '2024-02-20', clientName: 'Jennifer Wilson', contactInfo: '+1 234 567 8907', venue: 'Business District Hotel' },
  { id: 9, eventName: 'Sports Awards Ceremony', eventStart: '2024-02-25', eventEnd: '2024-02-25', clientName: 'Robert Davis', contactInfo: '+1 234 567 8908', venue: 'Sports Complex Hall' },
  { id: 10, eventName: 'Fashion Show', eventStart: '2024-03-01', eventEnd: '2024-03-01', clientName: 'Anna Martinez', contactInfo: '+1 234 567 8909', venue: 'Fashion District Venue' },
  { id: 11, eventName: 'Educational Workshop', eventStart: '2024-03-05', eventEnd: '2024-03-07', clientName: 'James Taylor', contactInfo: '+1 234 567 8910', venue: 'Learning Center' },
  { id: 12, eventName: 'Food & Wine Festival', eventStart: '2024-03-10', eventEnd: '2024-03-12', clientName: 'Maria Garcia', contactInfo: '+1 234 567 8911', venue: 'Culinary Arts Center' },
];

export const getEventDetailsById = (id) => {
  return mockEventRequests.find((item) => item.id == id)
}

// Mock positions data for events
export const mockPositions = [
  { id: 1, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 2, position: 'Camera 2 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 3, position: 'Camera 3 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 4, position: 'Camera 4 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 5, position: 'Camera 5 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 6, position: 'Camera 6 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 7, position: 'Camera 7 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 8, position: 'Camera 8 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  { id: 9, position: 'Audio Engineer', time: '8 am - 8 pm', info: 'Senior Level', quantity: 5 },
  { id: 10, position: 'Lighting Technician', time: '7 am - 9 pm', info: 'Standard', quantity: 15 },
  { id: 11, position: 'Stage Manager', time: '6 am - 10 pm', info: 'Experienced', quantity: 3 },
  { id: 12, position: 'Security Personnel', time: '24 hours', info: 'Licensed', quantity: 12 },
];

// Mock meeting rooms/contractor assignment data
export const mockMeetingRooms = [
  { id: 1, name: 'Meeting Room 1', positions: 12, dates: 'Jan 12, 2023 - End 12 Jan, 2023', isSelected: false },
  { id: 2, name: 'Meeting Room 2', positions: 12, dates: 'Jan 12, 2023 - End 12 Jan, 2023', isSelected: false },
  { id: 3, name: 'Meeting Room 3', positions: 12, dates: 'Jan 12, 2023 - End 12 Jan, 2023', isSelected: false },
  { id: 4, name: 'Meeting Room 4', positions: 12, dates: 'Jan 12, 2023 - End 12 Jan, 2023', isSelected: false },
  { id: 5, name: 'Meeting Room 5', positions: 12, dates: 'Jan 12, 2023 - End 12 Jan, 2023', isSelected: false },
];

// Mock contractors data
export const mockContractors = [
  { id: 1, name: 'ABC Productions', speciality: 'Video/Audio', rating: 4.8 },
  { id: 2, name: 'Elite Events Co.', speciality: 'Full Service', rating: 4.9 },
  { id: 3, name: 'TechCrew Solutions', speciality: 'Technical Support', rating: 4.7 },
  { id: 4, name: 'Premier Lighting', speciality: 'Lighting & Effects', rating: 4.6 },
  { id: 5, name: 'Security First', speciality: 'Event Security', rating: 4.8 },
];

// Mock coordinators data
export const mockCoordinators = [
  { id: 1, name: 'John Smith', department: 'Event Management', experience: '5 years' },
  { id: 2, name: 'Sarah Williams', department: 'Technical Coordination', experience: '3 years' },
  { id: 3, name: 'Michael Chen', department: 'Logistics', experience: '7 years' },
  { id: 4, name: 'Emily Johnson', department: 'Client Relations', experience: '4 years' },
];

export const menuItems = [
  {
    id: 'events',
    label: 'Events',
    icon: 'calendar',
    submenu: [
      { id: 'new-requests', label: 'New Requests' },
      { id: 'estimate', label: 'Estimate' },
      { id: 'events-list', label: 'Events' },
      { id: 'partial-requests', label: 'Partial Requests' }
    ]
  },
  { id: 'positions', label: 'Positions', icon: 'business' },
  { id: 'contractors', label: 'Contractors', icon: 'people' },
  {
    id: 'users',
    label: 'Users',
    icon: 'person',
    submenu: [
      { id: 'admins', label: 'Admins' },
      { id: 'clients', label: 'Clients' },
      { id: 'coordinators', label: 'Coordinators' }
    ]
  },
  { id: 'profile', label: 'Profile', icon: 'person' }
];

export const userProfile = {
  name: 'Muhammad Asad',
  role: 'Event Manager',
  email: 'asad@eventmanagement.com',
  initials: 'MA'
};