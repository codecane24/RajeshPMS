import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ManageProject({ onClose }) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Backdrop with fade */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Popup with scale + fade */}
        <motion.div
          className="relative bg-white rounded-lg box-shadow-2 w-[95%] max-w-5xl p-6 z-10"
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

          <h2 className="text-xl font-bold mb-6">ManageProject</h2>

    

          {/* Row 3: Buttons aligned right */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="px-4 py-2 border bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-[#005AAB] text-white px-4 py-2 rounded hover:bg-[#004080]">
              Create DC
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

