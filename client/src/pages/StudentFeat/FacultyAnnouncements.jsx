import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacultySidebar from '@/components/common/Nav/FacultySidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';


const FacultyAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            title: 'Lorem Ipsum Announcement',
            time: '2024-07-19T09:30:00Z',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est quis mi dictum suscipit. consectetur adipiscing elit. Nullam in est quis mi dictum suscipit. consectetur adipiscing elit. Nullam in est quis mi dictum suscipit. consectetur adipiscing elit. Nullam in est quis mi dictum suscipit. consectetur adipiscing elit. Nullam in est quis mi dictum suscipit.consectetur adipiscing elit. Nullam in est quis mi dictum suscipit.consectetur adipiscing elit. Nullam in est quis mi dictum suscipit.',
            category: 'General',
            uploadedBy: 'Admin',
        },
        {
            id: 2,
            title: 'Academics Announcement',
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            time: '2024-07-18T15:45:00Z',
            category: 'Academics',
            uploadedBy: 'Faculty',
        },
        {
            id: 3,
            title: 'Events Announcement',
            description: 'Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.',
            time: '2024-07-17T12:00:00Z',
            category: 'Events',
            uploadedBy: 'Event Coordinator',
        },
        // Add more announcements as needed
    ]);

    const [selectedFilter, setSelectedFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter announcements based on selected category
    const filteredAnnouncements = announcements.filter((announcement) => {
        if (selectedFilter === 'All') {
            return true;
        } else {
            return announcement.category === selectedFilter;
        }
    });

    // Handle filter selection
    const handleFilterChange = (category) => {
        setSelectedFilter(category);
    };

    // Handle search input
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Perform search based on search query
    const filteredAndSearchedAnnouncements = filteredAnnouncements.filter((announcement) =>
        announcement.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="w-full flex bg-zinc-50 gap-4">
                <FacultySidebar />
                <div className="w-full bg-zinc-50">
                    <Breadcrumb className="hidden md:flex px-2 pb-1 py-6">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={-1}>Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Announcements</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex justify-between items-center mb-6 px-2 py-2 pb-4 border-b">
                        <h1 className="text-3xl font-semibold">Announcements</h1>
                        {/* <button onClick={toggleModal} className="px-4 py-2 bg-zinc-900 text-white rounded-lg shadow hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Log New Request</button> */}
                    </div>
                    {/* Search Bar and Filters */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search announcements..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                className="px-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={() => handleFilterChange('All')}
                                className={`ml-4 px-6 py-2 rounded-lg ${selectedFilter === 'All' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => handleFilterChange('General')}
                                className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'General' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                General
                            </button>
                            <button
                                onClick={() => handleFilterChange('Academics')}
                                className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Academics' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Academics
                            </button>
                            <button
                                onClick={() => handleFilterChange('Opportunities')}
                                className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Opportunities' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Opportunities
                            </button>
                            <button
                                onClick={() => handleFilterChange('Events')}
                                className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Events' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Events
                            </button>
                            <button
                                onClick={() => handleFilterChange('Alumni')}
                                className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Alumni' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Alumni
                            </button>
                            {/* Add more filter buttons as needed */}
                        </div>
                    </div>

                    {/* Announcements List */}
                    <div className="grid grid-cols-1 pr-20 gap-4">
                        {filteredAndSearchedAnnouncements.map((announcement) => (
                            <div key={announcement.id} className="bg-white shadow rounded-xl p-4">
                                <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
                                <p className="text-sm text-gray-600 mb-2">
                                    <span>2nd August 2004</span> | <span>{announcement.uploadedBy}</span>
                                </p>
                                <p className="text-gray-800">{announcement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FacultyAnnouncements;
