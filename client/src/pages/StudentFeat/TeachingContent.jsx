import React, { useState } from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';

const TeachingContent = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    // Sample data for subjects
    const subjects = [
        {
            id: 1,
            courseID: 'CSE101',
            courseName: 'Introduction to Computer Science',
            lecturer: 'Dr. John Doe',
            syllabusLink: '/path/to/syllabus.pdf',
            notesLink: '/path/to/notes.pdf',
            chapters: [
                { id: 1, name: 'Introduction to Programming' },
                { id: 2, name: 'Data Structures' },
                { id: 3, name: 'Algorithms' },
            ],
            instructionPlanLink: '/path/to/instruction_plan.pdf',
            // Add more fields as needed
        },
        {
            id: 2,
            courseID: 'MEC102',
            courseName: 'Mechanical Engineering Basics',
            lecturer: 'Prof. Jane Smith',
            syllabusLink: '/path/to/syllabus_mec102.pdf',
            notesLink: '/path/to/notes_mec102.pdf',
            chapters: [
                { id: 1, name: 'Introduction to Mechanics' },
                { id: 2, name: 'Thermodynamics' },
                { id: 3, name: 'Fluid Mechanics' },
            ],
            instructionPlanLink: '/path/to/instruction_plan_mec102.pdf',
            // Add more fields as needed
        },
        // Add more subjects as needed
    ];

    // Function to handle click on a subject
    const handleSubjectClick = (subject) => {
        setSelectedSubject(selectedSubject === subject ? null : subject);
    };

    return (
        <div className="flex gap-4">
            <StudentSidebar />
            <div className="w-full p-4">
                <h1 className="text-3xl font-semibold mb-6 border-b p pb-6">Teaching Content</h1>
                <div className="flex w-full items-center justify-center gap-3">
                  <p className="text-lg font-">Select a subject to view details :</p>
                  
                </div>

                {subjects.map((subject) => (
                    <div key={subject.id} className="bg-white shadow rounded-lg mb-4">
                        <div
                            className="p-4 cursor-pointer flex justify-between items-center"
                            onClick={() => handleSubjectClick(subject)}
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{subject.courseName}</h2>
                                <p className="text-sm text-gray-600">{subject.courseID}</p>
                            </div>
                            <svg
                                className={`h-6 w-6 ${selectedSubject === subject ? 'transform rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                        {selectedSubject === subject && (
                            <div className="p-4">
                                <p className="text-sm text-gray-700 mb-4">Lecturer: {subject.lecturer}</p>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-700 font-semibold">Chapters:</p>
                                    <ul className="pl-4">
                                        {subject.chapters.map((chapter) => (
                                            <li key={chapter.id} className="text-sm text-gray-600">{chapter.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-700 font-semibold">Download Links:</p>
                                    <ul className="pl-4">
                                        <li className="text-sm text-blue-500 cursor-pointer hover:underline">
                                            <a href={subject.syllabusLink} target="_blank" rel="noopener noreferrer">Syllabus</a>
                                        </li>
                                        <li className="text-sm text-blue-500 cursor-pointer hover:underline">
                                            <a href={subject.notesLink} target="_blank" rel="noopener noreferrer">Notes</a>
                                        </li>
                                        {/* Add more download links as needed */}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700 font-semibold">Instruction Plan:</p>
                                    <p className="text-sm text-blue-500 cursor-pointer hover:underline">
                                        <a href={subject.instructionPlanLink} target="_blank" rel="noopener noreferrer">View Instruction Plan</a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachingContent;
