"use client";

import { useState } from "react";
import { XIcon } from "@phosphor-icons/react/dist/ssr";
import SidebarItem from "./sidebar-item";
import SidebarOverlay from "./sidebar-overlay";
import SidebarToggle from "./sidebar-toggle";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav
        className={`bg-primaryBlack-800 fixed top-0 right-0 z-40 min-h-screen w-60 border-l border-white/40 p-5 duration-300 ease-in-out md:hidden ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            className="rounded-md border border-white/60 p-1"
            onClick={() => setShowSidebar(false)}
          >
            <XIcon className="size-5 text-white/60" />
          </button>
        </div>
        <SidebarItem setShowSidebar={setShowSidebar} />
      </nav>
      {showSidebar && <SidebarOverlay setShowSidebar={setShowSidebar} />}
      <SidebarToggle setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Sidebar;
