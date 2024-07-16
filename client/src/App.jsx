import React from "react";
import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
import { Nav } from "./components/dashboard/components/Nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"
const App = () => {
  return (
    <>
      <div className="w-full">
        {/* <Routes> */}
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Inbox",
              label: "128",
              icon: Inbox,
              variant: "default",
            },
            {
              title: "Drafts",
              label: "9",
              icon: File,
              variant: "ghost",
            },
            {
              title: "Sent",
              label: "",
              icon: Send,
              variant: "ghost",
            },
            {
              title: "Junk",
              label: "23",
              icon: ArchiveX,
              variant: "ghost",
            },
            {
              title: "Trash",
              label: "",
              icon: Trash2,
              variant: "ghost",
            },
            {
              title: "Archive",
              label: "",
              icon: Archive,
              variant: "ghost",
            },
          ]}
        />
        {/* </Routes> */}
      </div>
    </>
  );
};

export default App;
