import React, { useState } from "react";
import { MoreVertical } from "lucide-react"; // for 3 dots icon
import { Users, Shield, Key } from "lucide-react"; // icons
import AddNewUser from "../popups/AddNewUser";
import AddNewRole from "../popups/AddNewRole";
import AddNewPermission from "../popups/AddNewPermission";
export default function UsersPage() {
  const [activeTab, setActiveTab] = useState("users"); // default tab
  const [search, setSearch] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null); // track which row's menu is open
const [openModal, setOpenModal] = useState(null);

  // --- Users data ---
  const users = [
    { id: 1, name: "Priyansh Desai", email: "priyansh@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Rahul Sharma", email: "rahul@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Neha Patel", email: "neha@example.com", role: "Viewer", status: "Active" },
  ];

  // --- Roles with assigned permissions ---
  const roles = [
    { id: 1, name: "Admin", permissions: ["Add User", "Edit User", "Delete User", "View Reports"] },
    { id: 2, name: "Editor", permissions: ["Edit Content", "Publish Content"] },
    { id: 3, name: "Viewer", permissions: ["View Content"] },
  ];

  // --- Permissions list ---
  const permissions = [
    { id: 1, name: "Add User" },
    { id: 2, name: "Edit User" },
    { id: 3, name: "Delete User" },
    { id: 4, name: "View Reports" },
    { id: 5, name: "Edit Content" },
    { id: 6, name: "Publish Content" },
    { id: 7, name: "View Content" },
  ];

  // --- Filters depending on active tab ---
  let filteredData = [];
  if (activeTab === "users") {
    filteredData = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  } else if (activeTab === "roles") {
    filteredData = roles.filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (activeTab === "permissions") {
    filteredData = permissions.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="p-6 space-y-6 box-shadow-1 bg-white rounded-lg">
   {/* ===== Tabs ===== */}
   <div className="">
<div className=" sm:flex justify-between">
<div className="flex gap-4 mb-6">
  {[
    { key: "users", label: "Users", icon: <Users size={18} /> },
    { key: "roles", label: "Roles", icon: <Shield size={18} /> },
    { key: "permissions", label: "Permissions", icon: <Key size={18} /> },
  ].map((tab) => (
    <button
      key={tab.key}
      onClick={() => {
        setActiveTab(tab.key);
        setSearch("");
        setOpenMenuId(null);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${
        activeTab === tab.key
          ? "bg-[#005AAB] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {tab.icon}
      {tab.label}
    </button>
  ))}
 
</div>
     <button
  onClick={() => setOpenModal(activeTab)}  // <-- open modal dynamically
  className={`${
    activeTab === "users"
      ? "bg-black"
      : activeTab === "roles"
      ? "bg-black"
      : "bg-black"
  } text-white px-4 py-2 mb-6 rounded-lg hover:opacity-90 hover:scale-95 whitespace-nowrap`}
>
  + Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
</button>
</div>
      {/* ===== Search + Add Btn ===== */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-black border-[1.5px] p-2 rounded-xl flex-grow min-w-[250px]"
        />


      </div>
      </div>

      {/* ===== Users Table ===== */}
      {activeTab === "users" && (
        <div className="overflow-x-auto bg-white box-shadow-2 rounded">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Name</th>
                <th className="p-3 border text-left">Email</th>
                <th className="p-3 border text-left">Role</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 relative">
                    <td className="p-3 border">{user.name}</td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">{user.role}</td>
                    <td
                      className={`p-3 border font-semibold ${
                        user.status === "Active" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="p-3 border text-center relative">
                      <button
                        onClick={() =>
                          setOpenMenuId(openMenuId === user.id ? null : user.id)
                        }
                        className="p-2 rounded hover:bg-gray-200"
                      >
                        <MoreVertical size={18} />
                      </button>
                      {openMenuId === user.id && (
                        <div className="absolute right-10 mt-1 bg-white shadow rounded border w-28 text-sm z-10">
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                            Edit
                          </button>
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600">
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* ===== Roles Table ===== */}
      {activeTab === "roles" && (
        <div className="overflow-x-auto bg-white box-shadow-2 rounded">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Role</th>
                <th className="p-3 border text-left">Permissions</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-gray-500">
                    No roles found
                  </td>
                </tr>
              ) : (
                filteredData.map((role) => (
                  <tr key={role.id} className="hover:bg-gray-50 relative">
                    <td className="p-3 border">{role.name}</td>
                    <td className="p-3 border">
                      <span className="font-semibold">{role.permissions.length}</span>{" "}
                      permissions
                      <div className="text-gray-600 text-xs mt-1">
                        {role.permissions.join(", ")}
                      </div>
                    </td>
                    <td className="p-3 border text-center relative">
                      <button
                        onClick={() =>
                          setOpenMenuId(openMenuId === role.id ? null : role.id)
                        }
                        className="p-2 rounded hover:bg-gray-200"
                      >
                        <MoreVertical size={18} />
                      </button>
                      {openMenuId === role.id && (
                        <div className="absolute right-10 mt-1 bg-white shadow rounded border w-28 text-sm z-10">
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                            Edit
                          </button>
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600">
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* ===== Permissions Table ===== */}
      {activeTab === "permissions" && (
        <div className="overflow-x-auto bg-white box-shadow-2 rounded">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Permission</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center p-4 text-gray-500">
                    No permissions found
                  </td>
                </tr>
              ) : (
                filteredData.map((permission) => (
                  <tr key={permission.id} className="hover:bg-gray-50 relative">
                    <td className="p-3 border">{permission.name}</td>
                    <td className="p-3 border text-center relative">
                      <button
                        onClick={() =>
                          setOpenMenuId(openMenuId === permission.id ? null : permission.id)
                        }
                        className="p-2 rounded hover:bg-gray-200"
                      >
                        <MoreVertical size={18} />
                      </button>
                      {openMenuId === permission.id && (
                        <div className="absolute right-10 mt-1 bg-white shadow rounded border w-28 text-sm z-10">
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                            Edit
                          </button>
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600">
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* ===== Dynamic Popups ===== */}
{openModal === "users" && (
  <AddNewUser onClose={() => setOpenModal(null)} />
)} {openModal === "roles" && (
  <AddNewRole onClose={() => setOpenModal(null)} />
)}

{openModal === "permissions" && (
  <AddNewPermission onClose={() => setOpenModal(null)} />
)}
    </div>
  );
}
