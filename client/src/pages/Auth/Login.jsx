import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { IoIosArrowDown } from "react-icons/io";

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
    if (selectedDashboard == "student-dashboard") {
      history("/s/dashboard");
    } else if (selectedDashboard == "admin-dashboard") {
      history("/a/dashboard");
    } else if (selectedDashboard == "faculty-dashboard") {
      history("/f/dashboard");
    } else {
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
      <div className="flex -mt-20 items-center justify-center   border-r">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-6">
              <div className="grid    gap-2">
                <Label htmlFor="email" className="ml-2">
                  Email
                </Label>
                <Input
                  className=" h-12"
                  id="email"
                  type="email"
                  placeholder="student@cmrit.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className=" ml-2">
                  Password
                </Label>
                <Input
                  placeholder="Password"
                  className=" h-12"
                  id="password"
                  type="password"
                />
                <div className="flex items-center">
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className=" bg-[#003a5b] h-12 w-full"
              onClick={handleLogin}
            >
              Login
            </Button>

            <div className="relative w-full " ref={dropdownRef}>
              <Button
                onClick={handleDropdownToggle}
                className="w-full  !bg-gray-100/50 !border !text-black h-12 !hover:bg-zinc-100"
              >
                {selectedDashboard ? selectedDashboard : "Select Dashboard"}
                <IoIosArrowDown className=" ml-3" />
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
  );
};

export default Login;
