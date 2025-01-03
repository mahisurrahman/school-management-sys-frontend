import React, { useState } from "react";
import { Eye, X } from "lucide-react";
import AdminNoticeDetailsViewModal from "../../Modals/AdminNoticeDetailsViewModal/AdminNoticeDetailsViewModal";

const notices = [
  {
    id: 1,
    title: "Blood Donation",
    description:
      "if you overlap your hobby and learning English with pleasure after school",
  },
  {
    id: 2,
    title: "Reunions 2024",
    description: "The most of the words adopted by the Russian",
  },
  {
    id: 3,
    title: "Past Pupil Reun",
    description: "An amateur player, or a sport geek, than you",
  },
  {
    id: 4,
    title: "Annual Sports D",
    description: "You surely are familiar w",
  },
  {
    id: 5,
    title: "Second Semester",
    description: "If you are a dedicated athl",
  },
  {
    id: 6,
    title: "Second Semester",
    description: "If you are a dedicated athl",
  },
];

const AdminPanelAllNoticeBoard = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateText = (text, limit = 40) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const handleViewClick = (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-white rounded shadow-md md:p-5">
      <div className="py-2 border-b">
        <h1 className="text-lg font-medium ml-2 md:ml-0">Notice</h1>
      </div>

      <div className="max-h-48 overflow-y-auto no-scrollbar">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs">
            <tr>
              <th className="py-2 px-4 text-left w-5">#</th>
              <th className="py-2 px-2 text-left">Title</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 w-5">View</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {notices.map((notice) => (
              <tr key={notice.id} className="border-b hover:bg-gray-50">
                <td className="py-1 px-4 font-semibold">{notice.id}</td>
                <td className="py-1 px-2">{truncateText(notice.title, 20)}</td>
                <td className="py-1 px-4">
                  {truncateText(notice.description)}
                </td>
                <td className="py-1 px-4">
                  <button
                    onClick={() => handleViewClick(notice)}
                    className="p-2 text-pink-600 hover:bg-pink-50 rounded-full"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminNoticeDetailsViewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedNotice={selectedNotice}
      />
    </div>
  );
};

export default AdminPanelAllNoticeBoard;
