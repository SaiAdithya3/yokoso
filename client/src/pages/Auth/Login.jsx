import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"


const Login = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState("");
  const dropdownRef = useRef(null);
  const history = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleDashboardSelect = (dashboard) => {
    setSelectedDashboard(dashboard);
    setDropdownOpen(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (selectedDashboard == 'student-dashboard') {
      history("/s/dashboard");
    } else if (selectedDashboard == 'admin-dashboard') {
      history("/a/dashboard");
    } else if (selectedDashboard == 'faculty-dashboard') {
      history("/f/dashboard");
    }
    else {
      alert("Please select a dashboard to navigate to.");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2  xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12  border-r">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="student@cmrit.com"

              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full" onClick={handleLogin}>
              Login
            </Button>

            <div className="relative w-full" ref={dropdownRef}>
              <Button onClick={handleDropdownToggle} className="w-full !bg-white !border !text-black !hover:bg-zinc-100">
                {selectedDashboard ? selectedDashboard : "Select Dashboard"}
              </Button>
              {isDropdownOpen && (
                <div className="absolute w-full right-0 mt-2 bg-white border rounded shadow-lg">
                  <div
                    onClick={() => handleDashboardSelect("student-dashboard")}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  >
                    Student Dashboard
                  </div>
                  <div
                    onClick={() => handleDashboardSelect("admin-dashboard")}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  >
                    Admin Dashboard
                  </div>
                  <div
                    onClick={() => handleDashboardSelect("faculty-dashboard")}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  >
                    Faculty Dashboard
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="   !flex-col !flex !items-center gap-5 !justify-center -mt-32   lg:block">
        <img
          src="https://dhondi.ai/logos/cmr.png"
          alt="Image"
          className="  object-cover   bg-no-repeat  w-52 h-52"
        />
        <h1 className=" text-3xl text-gray-700  font-serif">
          CMR INSTITUTE OF TECHNOLOGY
        </h1>
      </div>
    </div>
  )
}

export default Login
