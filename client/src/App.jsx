import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import FacultyDashboard from './pages/Dashboard/FacultyDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import FStudents from './pages/f-students/FStudents';
import StudentProfile from './pages/Profile/StudentProfile';
import FacultyProfile from './pages/Profile/FacultyProfile';
import AdminProfile from './pages/Profile/AdminProfile';
import Fwrapper from './pages/f-students/F-SDetails/Student.Fwrapper';
import ResultsPage from './pages/StudentFeat/ResultsPage';
import FacultyAssignment from './pages/Assigments/FacultyAssignment';
import StudentAssignment from './pages/Assigments/StudentAssignment';
import FacultyAssignmentView from './pages/Assigments/FacultyAssignmentView';
import AdLibrary from './pages/Library/AdLibrary';
import Books from './components/Library/Admin/Books';
import Loans from './components/Library/Admin/Loans';
import RMS from './pages/StudentFeat/RMS';
import TeachingContent from './pages/StudentFeat/TeachingContent';
import SubjectDetails from './pages/StudentFeat/SubjectDetails';
import Announcements from './pages/StudentFeat/Announcements';
import FacultyAnnouncements from './pages/StudentFeat/FacultyAnnouncements';
import Facultylms from './pages/FacultyFeat/Facultylms';

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* dashboard pages */}
          <Route path="/a/dashboard" element={<AdminDashboard />} />
          <Route path="/f/dashboard" element={<FacultyDashboard />} />
          <Route path="/s/dashboard" element={<StudentDashboard />} />

          {/* common feat For Attendence*/}
          <Route path="/f/dashboard/attendance/:sectionName" element={<FacultyDashboard gotoAttendence={true} />} />

          {/* faculty feat */}
          <Route path="/f/students" element={<FStudents />} />
          <Route path='/f/students/:id' element={<Fwrapper />} />
          <Route path="/f/assignments" element={<FacultyAssignment />} />
          <Route path="/f/assignments/:id" element={<FacultyAssignmentView />} />
          <Route path="/f/announcements" element={<FacultyAnnouncements />} />
          <Route path="/f/lms" element={<Facultylms />} />

          {/* student feat */}
          <Route path="/s/results" element={<ResultsPage />} />
          <Route path='/s/dashboard/attendance' element={<StudentDashboard  gotoAttendence={true}/>} />
          <Route path="/s/assignments" element={<StudentAssignment />} />

          {/* profile pages */}
          <Route path="/f/profile" element={<FacultyProfile />} />
          <Route path="/s/profile" element={<StudentProfile />} />
          <Route path="/a/profile" element={<AdminProfile />} />
          <Route path="/s/rms" element={<RMS />} />
          <Route path="/s/lms" element={<TeachingContent />} />
          <Route path="/s/announcements" element={<Announcements />} />
          <Route path="/s/lms/subject/:id" element={<SubjectDetails />} />

          {/* Library pages */}
          <Route path="/a/library" element={<AdLibrary />} />
          <Route path="/a/library/add-loan" element={<Books />} />
          <Route path="/a/library/return" element={<Loans />} />
        </Routes>
      </div>
    </>
  )
}

export default App