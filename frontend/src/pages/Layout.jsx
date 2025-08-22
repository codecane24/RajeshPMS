import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header on top, full width */}
      <Header
       sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
  mobileSidebar={mobileSidebar}
  setMobileSidebar={setMobileSidebar}
      />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for desktop */}
        <div className="hidden md:block">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        </div>

 {/* Sidebar for mobile */}
<AnimatePresence>
  {mobileSidebar && (
    <motion.div
      className="fixed md:hidden  inset-0 bg-black/20 backdrop-blur-sm z-50 flex"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 "
        onClick={() => setMobileSidebar(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Sidebar Drawer */}
      <motion.div
        className="relative z-50 w-64 bg-white shadow-lg"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Sidebar isOpen={true} setIsOpen={() => {}} />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


        {/* Page content */}
        <main className="flex-1 pl-4 pt-0  pb-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
