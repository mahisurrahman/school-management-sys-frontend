import { X } from "lucide-react";

const AdminNoticeDetailsViewModal = ({
  isOpen,
  onClose,
  title,
  selectedNotice,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg transition-all transform scale-95 p-6 w-full max-w-lg">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedNotice?.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-gray-700">
          <p>{selectedNotice?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminNoticeDetailsViewModal;
