import React, { useState } from "react";
import StudentTableTabs from "../../Components/StudentManagementComponents/StudentTableTabs/StudentTableTabs";
import StudentsTableRows from "../../Components/StudentManagementComponents/StudentsTableRows/StudentsTableRows";

// Main component
const StudentManagement = () => {
  const [activeTab, setActiveTab] = useState("All Students");
  const [students, setStudents] = useState([
    {
      name: "Brady Harris",
      roll: "1",
      email: "lucius51@yahoo.com",
      status: "ON",
    },
    // Add more student data here
  ]);

  const tabs = [
    "All Students",
    "Section A (Good)",
    "Section B (Best)",
    "Section C (wonderful)",
  ];

  const toggleStudentStatus = (index) => {
    setStudents((prevStudents) =>
      prevStudents.map((student, i) =>
        i === index
          ? { ...student, status: student.status === "ON" ? "OFF" : "ON" }
          : student
      )
    );
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto">
      <div className="w-full mx-auto bg-white rounded-lg shadow">
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-semibold">Student</h1>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            Add a student
          </button>
        </div>

        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <StudentTableTabs
                key={tab}
                label={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="p-4 flex gap-2">
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Copy
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Excel
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              CSV
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              PDF
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left text-gray-600">#</th>
                <th className="p-4 text-left text-gray-600">Photo</th>
                <th className="p-4 text-left text-gray-600">Name</th>
                <th className="p-4 text-left text-gray-600">Roll</th>
                <th className="p-4 text-left text-gray-600">Email</th>
                <th className="p-4 text-left text-gray-600">Status</th>
                <th className="p-4 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <StudentsTableRows
                  key={index}
                  student={student}
                  index={index}
                  toggleStudentStatus={toggleStudentStatus}
                />
              ))}
            </tbody>
          </table>

          <div className="p-4 flex justify-between items-center">
            <p className="text-gray-600">Showing 1 to 9 of 9 entries</p>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded">
                1
              </button>
              <button
                className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
