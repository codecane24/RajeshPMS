import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddNewUser({ onClose }) {
  const [formData, setFormData] = useState({
    img: null,
    name: "",
    mobile: "",
    password: "",
    role: "",
    description: "",
    permissions: [],
    projects: [],       // multiple projects
    stores: {},         // { projectId: [store1, store2] }
  });
  const [preview, setPreview] = useState(null);
  const [showPermissions, setShowPermissions] = useState(false);

  // Dummy data
  const projectOptions = [
    { id: "P1", name: "Project One", stores: ["Store A1", "Store A2", "Store A3"] },
    { id: "P2", name: "Project Two", stores: ["Store B1", "Store B2"] },
    { id: "P3", name: "Project Three", stores: ["Store C1", "Store C2", "Store C3"] },
  ];

  const permissionsList = [
    "View Dashboard",
    "Manage Users",
    "Edit Content",
    "Delete Records",
    "Generate Reports",
  ];

  // input change
  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;

    if (name === "img") {
      const file = files[0];
      setFormData({ ...formData, img: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else if (name === "permissions") {
      let updated = [...formData.permissions];
      if (checked) updated.push(value);
      else updated = updated.filter((p) => p !== value);
      setFormData({ ...formData, permissions: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // add project
  const handleProjectSelect = (e) => {
    const value = e.target.value;
    if (value && !formData.projects.includes(value)) {
      setFormData({
        ...formData,
        projects: [...formData.projects, value],
        stores: { ...formData.stores, [value]: [] }, // init empty array for stores
      });
    }
  };

  // toggle store for a project
  const handleStoreToggle = (projectId, store) => {
    const selectedStores = formData.stores[projectId] || [];
    let updatedStores = [];

    if (selectedStores.includes(store)) {
      updatedStores = selectedStores.filter((s) => s !== store);
    } else {
      updatedStores = [...selectedStores, store];
    }

    setFormData({
      ...formData,
      stores: {
        ...formData.stores,
        [projectId]: updatedStores,
      },
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[75%] max-w-5xl p-6 z-10 overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
        >
          {/* Close */}
          <button
            className="absolute top-3 right-3 text-gray-900 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-6">Create New User</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-full border"
                  />
                </div>
              )}
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-700 border rounded-lg p-2"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg p-2"
                rows="3"
              />
            </div>

            {/* Projects + Stores */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Projects
              </label>
              <select
                onChange={handleProjectSelect}
                className="mt-1 block w-full border rounded-lg p-2"
              >
                <option value="">Select Project</option>
                {projectOptions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              {formData.projects.map((projId) => {
                const project = projectOptions.find((p) => p.id === projId);
                return (
                  <div key={projId} className="mt-3 border rounded-md p-3">
                    <h4 className="font-medium">{project.name} - Stores</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {project.stores.map((s) => (
                        <label key={s} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={
                              formData.stores[projId]?.includes(s) || false
                            }
                            onChange={() => handleStoreToggle(projId, s)}
                            className="rounded border-gray-300"
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Permissions Toggle */}
            <div>
 <button
  type="button"
  onClick={() => setShowPermissions(!showPermissions)}
  className="px-4 py-1 text-sm font-medium text-black border-[1px] border-black rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
>
  {showPermissions ? "Hide Permissions" : "Show Permissions"}
</button>


              {showPermissions && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {permissionsList.map((perm) => (
                    <label key={perm} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="permissions"
                        value={perm}
                        checked={formData.permissions.includes(perm)}
                        onChange={handleChange}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{perm}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                className="bg-gray-800 text-sm rounded-md hover:bg-gray-500 text-white px-4 py-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-[#005AAB] text-sm rounded-md hover:bg-[#0068c3]"
              >
                Save User
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
