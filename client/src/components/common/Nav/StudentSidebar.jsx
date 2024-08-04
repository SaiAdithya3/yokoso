import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Avatar from "boring-avatars";
import { HiMiniChevronRight } from "react-icons/hi2";

const Icon = ({ IconComponent, ...props }) => (
  <IconComponent {...props} className="w-5 h-5" />
);

const NavItem = ({ to, icon: IconComponent, children, badge }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClass = isActive ? "text-zinc-50 px-4 bg-black hover:text-black" : "text-muted-foreground";

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center p-2 space-x-3 rounded-lg hover:bg-gray-100 ${activeClass}`}
        prefetch={false}
      >
        <Icon IconComponent={IconComponent} />
        <span>{children}</span>
        {badge && (
          <Badge variant="secondary" className="ml-auto">
            {badge}
          </Badge>
        )}
      </Link>
    </li>
  );
};

const NavSection = ({ title, children }) => (
  <div>
    <h3 className="text-xs font-semibold text-muted-foreground">{title}</h3>
    <ul className="mt-2 space-y-2">{children}</ul>
  </div>
);

const StudentSidebar = () => {

  return (
    <div className="flex sticky top-0 h-screen bg-gray-100">
      <aside className="w-64 flex flex-col justify-between bg-white border-r">
        <div className="flex flex-col w-full">

          <div className="flex items-center justify-center gap-4 px-4 h-20 border-b">
            <img
              src="https://dhondi.ai/logos/cmr.png"
              alt="Image"
              className="  object-cover   bg-no-repeat w-14 h-14"
            />
            <h1 className="text-2xl font-bold uppercase ml-2">Yokoso </h1>
          </div>
          <nav className="p-4 space-y-4">
            <NavSection title="MAIN">
              <NavItem to="/s/dashboard" icon={LayoutDashboardIcon}>
                Dashboard
              </NavItem>
              <NavItem to="/s/lms" icon={CalendarIcon}>
                Teaching Content
              </NavItem>
              <NavItem to="/" icon={ClockIcon}>
                Time Table
              </NavItem>
              <NavItem to="/s/results" icon={ProjectorIcon}>
                Exams / Results
              </NavItem>
              <NavItem to="/s/dashboard/attendance" icon={GroupIcon}>
                Attendance
              </NavItem>
              <NavItem to="/s/assignments" icon={CalendarIcon}>
                Assignments
              </NavItem>
              <NavItem to="/s/residential" icon={StickyNoteIcon}>
                Residential
              </NavItem>
              <NavItem to="/s/rms" icon={FlagIcon} badge="NEW">
                RMS
              </NavItem>
              <NavItem to="/s/fms" icon={IndianRupee} badge="NEW">
                Finance
              </NavItem>
              <NavItem to="/s/announcements" icon={ProjectorIcon} badge="NEW">
                Announcements
              </NavItem>
              <NavItem to="/s/alumni" icon={ProjectorIcon} badge="NEW">
                Alumni
              </NavItem>

            </NavSection>
            <NavSection title="FAVORITES">
              <NavItem to="#" icon={() => <span className="w-2.5 h-2.5 bg-purple-500 rounded-full" />}>
                Monday
                <Badge variant="secondary" className="ml-auto">
                  36
                </Badge>
              </NavItem>

            </NavSection>
          </nav>
          <div className="hidden p-4 mt-auto">
            <NavItem to="/settings" icon={SettingsIcon}>
              Settings
            </NavItem>
            <NavItem to="/support" icon={PowerIcon}>
              Support
            </NavItem>
          </div>
        </div>

        <Link to="/s/profile" className={`hover:bg-zinc-100  group cursor-pointer flex items-center p-4 border-t`}>
          <Avatar name="banaki" variant="beam" />
          <div className="ml-3">
            <h3 className="text-sm font-semibold">
              Pavan Kumar
            </h3>
            <p className="text-xs text-muted-foreground">info@devatoms.com</p>
          </div>
          <HiMiniChevronRight className="text-2xl mx-2 group-hover:translate-x-2 transition-all" />
        </Link>
      </aside>
    </div>
  )
};

const CalendarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const ChevronLeftIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ClockIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FilesIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
    <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
  </svg>
);

const FlagIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" x2="4" y1="22" y2="15" />
  </svg>
);

const GroupIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LayoutDashboardIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const ProjectorIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10" />
    <circle cx="12" cy="14" r="4" />
    <path d="M2 20h20" />
    <path d="M7 20l-2 4" />
    <path d="M17 20l2 4" />
  </svg>
);

const StickyNoteIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 3h5v5" />
    <path d="M12 22h8a2 2 0 0 0 2-2v-8" />
    <path d="M16 3h-8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
    <path d="M20 14l-7 7" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.6 1.6 0 0 0-1.82-.33 1.6 1.6 0 0 0-1 1.47V21a2 2 0 0 1-2 2h-1.2a2 2 0 0 1-2-2v-.11a1.6 1.6 0 0 0-1-1.47 1.6 1.6 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.6 1.6 0 0 0 5 15.4a1.6 1.6 0 0 0-1.47-1H3a2 2 0 0 1-2-2v-1.2a2 2 0 0 1 2-2h.11a1.6 1.6 0 0 0 1.47-1 1.6 1.6 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.6 1.6 0 0 0 9 5.6c.37-.06.75-.06 1.1 0H11a2 2 0 0 1 2 2v.11a1.6 1.6 0 0 0 1 1.47 1.6 1.6 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.6 1.6 0 0 0-.33 1.82V15z" />
  </svg>
);

const PowerIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" x2="12" y1="2" y2="12" />
  </svg>
);


const IndianRupee = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/>
  </svg>
  );

export default StudentSidebar;
