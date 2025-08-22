
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddNewRole({ onClose }) {
  const [workingLocations, setWorkingLocations] = useState([{ location: "" }]);

  // Add a new working location field
  const addWorkingLocation = () => {
    setWorkingLocations([...workingLocations, { location: "" }]);
  };

  // Remove a working location field
  const removeWorkingLocation = (index) => {
    const updated = [...workingLocations];
    updated.splice(index, 1);
    setWorkingLocations(updated);
  };

  // Update field values
  const handleWorkingLocationChange = (index, value) => {
    const updated = [...workingLocations];
    updated[index].location = value;
    setWorkingLocations(updated);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 h-full flex items-center justify-center z-50">
        {/* Backdrop */}
        <motion.div
          className="absolute  inset-0 h-full bg-black/15 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Popup */}
        <motion.div
          className="relative bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[55%] max-w-5xl p-6 z-10 overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold inline-block px-2 rounded-md   mb-6">Add New Role</h2><br></br>

    <input type="text" placeholder="Role Name " className="px-1 py-2 border w-full border-gray-500 rounded-md mb-2 "/>
<input type="text" placeholder="Description " className="px-1 py-2 border w-full border-gray-500 rounded-md "/>
<h4 className="mt-5 font-semibold ">Permissions</h4>
<div className="flex flex-wrap gap-3 mt-2 mb-10">
<span className=" flex justify-center gap-1 items-center"><label>name</label>    <input type="checkbox" placeholder="name of permissions" className=" "/></span>
     <span className=" flex justify-center  gap-1 items-center"><label>name</label>    <input type="checkbox" placeholder="name of permissions" className=" "/></span>
     <span className=" flex justify-center gap-1 items-center"><label>name</label>    <input type="checkbox" placeholder="name of permissions" className=" "/></span>
     <span className=" flex justify-center gap-1 items-center"><label>name</label>    <input type="checkbox" placeholder="name of permissions" className=" "/></span>
     <span className=" flex justify-center gap-1 items-center"><label>name</label>    <input type="checkbox" placeholder="name of permissions" className=" "/></span>
     <span className=" flex justify-center gap-1 items-center"><label>name</label>    <input type="checkbox" placeholder="name of permissions" className=" "/></span>
       </div>
       <button className="bg-black text-sm text-white absolute right-4 bottom-2 px-3 py-2 rounded-md">Submit</button> </motion.div>
      </div>
    </AnimatePresence>
  );
}
