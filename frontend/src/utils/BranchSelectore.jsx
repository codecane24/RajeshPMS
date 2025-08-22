import React, { useState, useRef, useEffect } from "react";
import { Store, ChevronDown, Check, ArrowLeftRight } from "lucide-react";

export default function BranchSelector({ stores, defaultStore }) {
  const [open, setOpen] = useState(false);
  const [currentStore, setCurrentStore] = useState(defaultStore || stores[0]);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSwitch = (store) => {
    setCurrentStore(store);
    setOpen(false);
  };

  return (
    <div className="relative border-[1.5px] border-black rounded-md" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-2  hover:shadow-sm 
                   rounded-lg text-sm font-medium text-gray-700"
      >
        <Store size={16} className="text-black" />
        {currentStore}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md z-50">
          {/* Label */}
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-500 border-b bg-gray-50 rounded-t-lg">
            <ArrowLeftRight size={14} className="text-gray-400" />
            Switch Store to
          </div>

          {/* Store Options */}
          {stores.map((store, idx) => (
            <button
              key={idx}
              onClick={() => handleSwitch(store)}
              className="w-full flex items-center justify-between 
                         px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
            >
              <span>{store}</span>
              {currentStore === store && (
                <Check size={16} className="text-green-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
