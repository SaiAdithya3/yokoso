import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '@/components/common/Nav/AdminSidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CiSearch } from 'react-icons/ci';


const AdminAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            title: 'Upcoming Maintenance Downtime',
            time: '2024-07-19T09:30:00Z',
            description: 'Please be advised that there will be a scheduled maintenance downtime on July 25th from 1 AM to 5 AM. During this time, all online services will be unavailable. We apologize for any inconvenience caused.',
            category: 'General',
            uploadedBy: 'IT Department',
            image: 'https://img.freepik.com/free-vector/watercolor-world-book-day-background_23-2149338382.jpg?t=st=1721393015~exp=1721396615~hmac=7ee05e5ee3c584b4d61946ae9275e4475ef628846f7fda75831501936e621090&',
        },
        {
            id: 2,
            title: 'Midterm Exam Schedule Released',
            description: 'The midterm exam schedule for the Fall semester has been released. Please check the academic portal for your specific exam dates and times. Please check the academic portal for your specific exam dates and times for your perspective exam and seating location for everything prepare well and note down all the things that you need to take care of. And also check the academic calendar for the exam schedule. There are no changes in the exam schedule. All the best for your exams. Take care of your health and stay safe.',
            time: '2024-07-18T15:45:00Z',
            category: 'Academics',
            uploadedBy: 'Academic Affairs',
            image: 'https://img.freepik.com/free-vector/hand-drawn-autumn-foliage-background_23-2148617274.jpg?t=st=1721395685~exp=1721399285~hmac=85c167b78e4473a09919139f98ea0367f22a2f5d4e1d217f34e6c6c9c0f1d035&w=1060',
        },
        {
            id: 3,
            title: 'Guest Lecture by Industry Expert',
            description: 'Join us for a guest lecture by Dr. Sarah Johnson on the topic of "Emerging Trends in Artificial Intelligence" on July 28th at 10 AM in the main auditorium.',
            time: '2024-07-17T12:00:00Z',
            category: 'Events',
            uploadedBy: 'Event Coordinator',
            // image: 'https://img.freepik.com/free-vector/watercolor-world-book-day-vertical-poster-template_23-2149338385.jpg?t=st=1721389756~exp=1721393356~hmac=1dfdbde8a71ca67278736d2271330e6cbcc8af7470be505bafb6ee5e80d734ff&w=740',

        },
        {
            id: 4,
            title: 'Summer Internship Opportunities',
            description: 'Apply for exciting summer internship opportunities with top companies. Visit the career services portal for more details and application deadlines.',
            time: '2024-07-16T10:00:00Z',
            category: 'Opportunities',
            uploadedBy: 'Career Services',
        },
        {
            id: 5,
            title: 'Alumni Networking Event',
            description: 'Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot! Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot!Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot! Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot!Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot!Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot!Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot!Reconnect with fellow alumni at our annual networking event on August 5th. Register now to secure your spot!',
            time: '2024-07-15T14:00:00Z',
            category: 'Alumni',
            uploadedBy: 'Alumni Relations',
        },
        {
            id: 6,
            title: 'Library Book Donation Drive',
            description: 'Donate your old books to the library and help us expand our collection. Drop-off bins are located at the main entrance.',
            time: '2024-07-14T08:00:00Z',
            category: 'General',
            uploadedBy: 'Library Staff',
        },
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

    const handleModal = () => {
        console.log('Modal');
    }

    return (
        <div className="w-full flex bg-slate-200 gap-4">
            <AdminSidebar />
            <div className="w-full pl-10 bg-slate-200 pb-20">
                <div className="flex bg-slate-200/40 items-center justify-between border-b backdrop-blur-sm border-slate-200 mb-6 sticky top-0 ">
                    <div className="flex flex-col">

                        <Breadcrumb className="hidden md:flex px-2 pb-1 pt-6 ">
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
                        <div className="flex justify-between items-center  px-2 py-1 pb-4 border-b">
                            <h1 className="text-3xl font-semibold">Announcements</h1>
                        </div>
                    </div>
                    <button onClick={handleModal} className="bg-zinc-900 mr-20 text-white px-4 py-2 rounded-lg mt-4 ">Create Announcement</button>
                </div>
                {/* Search Bar and Filters */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <div className="flex gap-1 py-1 w-1/3 items-center rounded-lg px-2 bg-zinc-50 border-black">
                            <CiSearch className=" text-2xl text-slate-900" />
                            <input type="text" placeholder="Search students" className=" focus:outline-none  rounded-lg w-full  bg-zinc-50 border-black/40 popp py-1" />
                        </div>
                        <button
                            onClick={() => handleFilterChange('All')}
                            className={`ml-4 px-6 py-2 rounded-lg ${selectedFilter === 'All' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleFilterChange('General')}
                            className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'General' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                            General
                        </button>
                        <button
                            onClick={() => handleFilterChange('Academics')}
                            className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Academics' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                            Academics
                        </button>
                        <button
                            onClick={() => handleFilterChange('Opportunities')}
                            className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Opportunities' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                            Opportunities
                        </button>
                        <button
                            onClick={() => handleFilterChange('Events')}
                            className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Events' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                            Events
                        </button>
                        <button
                            onClick={() => handleFilterChange('Alumni')}
                            className={`ml-4 px-4 py-2 rounded-lg ${selectedFilter === 'Alumni' ? 'bg-zinc-900 shadow text-white' : 'bg-gray-50 text-gray-700'}`}
                        >
                            Alumni
                        </button>
                        {/* Add more filter buttons as needed */}
                    </div>
                </div>

                {/* Announcements List */}
                <div className="grid grid-cols-1 pr-20 gap-4">
                    {filteredAndSearchedAnnouncements.map((announcement) => (
                        <div key={announcement.id} className="bg-white shadow rounded-xl py-8 px-8 gap-4 flex flex-row-reverse items-start">
                            {announcement.image && (
                                <img src={announcement.image} alt={announcement.title} className="border-4 border-zinc-100 rounded-xl w-2/5 object-cover mr-4" />
                            )}
                            <div className='w-full'>
                                <h2 className="text-xl font-semibold w-full mb-2">{announcement.title}</h2>
                                <p className="text-sm text-gray-600 mb-2 border-b pb-2">
                                    <span>2nd August 2004</span> | <span>{announcement.uploadedBy}</span>
                                </p>
                                <p className="text-gray-800">{announcement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminAnnouncements;
