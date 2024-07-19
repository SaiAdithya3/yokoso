import React, { useState } from "react";
import StudentSidebar from "@/components/common/Nav/StudentSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample data
const alumniData = [
  {
    name: "John Doe",
    company: "Google",
    industry: "Technology",
    position: "Software Engineer",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    posts: ["Loving my new role at Google!", "Excited about the future!"],
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINEq5zretjbeu48z7H1B2RFlnsdHdJcIQFQ&s",
    successStory: "John has successfully led several projects at Google...",
  },
  {
    name: "Jane Smith",
    company: "Facebook",
    industry: "Technology",
    position: "Product Manager",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
    posts: ["Just launched a new feature!", "Proud of my team's work."],
    photo: "https://data.ipic.ai/images/dSwbAmVLo4MuUIw_1712121162.png",
    successStory: "Jane has introduced innovative product features at Facebook...",
  },
  {
    name: "Alice Johnson",
    company: "Amazon",
    industry: "E-commerce",
    position: "Data Scientist",
    social: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
    },
    posts: ["Developed a new recommendation algorithm!", "Data is the new oil."],
    photo: "https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.webp?b=1&s=170667a&w=0&k=20&c=y2ojpSYhJlE51oxRsJFnbJ5oPRzazCjkdqRuYWWXpjc=",
    successStory: "Alice has improved the recommendation system at Amazon...",
  },
  // Add more alumni data as needed
];

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  const filteredAlumni = alumniData.filter(
    (alumni) =>
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (companyFilter === "" || alumni.company === companyFilter) &&
      (industryFilter === "" || alumni.industry === industryFilter)
  );

  const uniqueCompanies = [...new Set(alumniData.map((alumni) => alumni.company))];
  const uniqueIndustries = [...new Set(alumniData.map((alumni) => alumni.industry))];

  return (
    <div className="flex gap-4 min-h-screen">
      <StudentSidebar />
      <div className="flex flex-col w-full p-6 space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold">Alumni</h1>
          <div className="flex gap-1 py-1 items-center rounded-lg px-2 bg-zinc-50 border-zinc-200 border">
            <Input
              type="text"
              placeholder="Search alumni"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none rounded-lg w-full bg-zinc-50 border-black/40 py-1"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-4 space-x-4">
          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
            className="p-2 border rounded-lg bg-white"
          >
            <option value="">All Companies</option>
            {uniqueCompanies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
          <select
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
            className="p-2 border rounded-lg bg-white"
          >
            <option value="">All Industries</option>
            {uniqueIndustries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-wrap gap-4">
            <h2 className="text-xl font-bold w-full">Featured Alumni</h2>
            {filteredAlumni.slice(0, 3).map((alumni, index) => (
              <Card key={index} className="border-2 bg-white border-zinc-50 shadow-lg rounded-2xl flex w-full md:w-1/3">
                <CardContent className="flex flex-col items-center p-4">
                  <img src={alumni.photo} alt={alumni.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                  <h3 className="text-lg font-medium">{alumni.name}</h3>
                  <p className="text-sm text-gray-600">{alumni.company}</p>
                  <p className="text-sm text-gray-600">{alumni.position}</p>
                  <div className="flex space-x-2 mt-2">
                    <a href={alumni.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-blue-600" />
                    </a>
                    <a href={alumni.social.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-blue-400" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAlumni.map((alumni, index) => (
              <Card key={index} className="border-2 bg-white border-zinc-50 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{alumni.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={alumni.photo} alt={alumni.name} className="w-32 h-32 rounded-full mb-4" />
                  <p className="text-lg font-medium">{alumni.position}</p>
                  <p className="text-sm text-gray-600">{alumni.company}</p>
                  <div className="flex space-x-2 mt-2">
                    <a href={alumni.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="text-blue-600 flex items-center space-x-1">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                      </Button>
                    </a>
                    <a href={alumni.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="text-blue-400 flex items-center space-x-1">
                        <FaTwitter />
                        <span>Twitter</span>
                      </Button>
                    </a>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">Posts</h3>
                    <ul className="list-disc ml-4">
                      {alumni.posts.map((post, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          {post}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Alumni Success Stories</h2>
            <div className="space-y-4">
              {alumniData.map((alumni, index) => (
                <Card key={index} className="border-2 bg-white border-zinc-50 shadow-lg rounded-2xl p-4">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{alumni.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{alumni.successStory}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link to="/alumni-feed">
              <Button variant="primary">Go to Alumni Feed</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
