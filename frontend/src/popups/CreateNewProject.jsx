import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateNewProject({ onClose }) {
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
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Popup */}
        <motion.div
          className="relative bg-white rounded-lg shadow-lg w-[95%] max-w-5xl p-6 z-10 overflow-y-auto max-h-[90vh]"
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

          <h2 className="text-3xl   mb-6">Create New Project</h2>

          {/* Project Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Project Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Project Code" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Associated Company" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Project In-Charge" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Project Engineer" className="border p-2 rounded w-full" />
            </div>
          </div>

          {/* Working Location Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Working Location Details</h3>
            {workingLocations.map((loc, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Working Location ${index + 1}`}
                  value={loc.location}
                  onChange={(e) =>
                    handleWorkingLocationChange(index, e.target.value)
                  }
                  className="border p-2 rounded w-full"
                />
                {workingLocations.length > 1 && (
                  <button
                    onClick={() => removeWorkingLocation(index)}
                    className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addWorkingLocation}
              className="mt-2 px-3 py-1 bg-gray-600 text-sm text-white rounded hover:bg-gray-500"
            >
              + Add Location
            </button>
          </div>

          {/* Store Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Store Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Store ID" className="border p-2 rounded w-full" />
         <input type="text" placeholder="Store Phone Number" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Store Address" className="border p-2 rounded w-full" />
              
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="px-4 py-2 border bg-gray-800 text-white rounded hover:bg-gray-900"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-[#005AAB] text-white px-4 py-2 rounded hover:bg-[#004080]">
              Create Project
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
