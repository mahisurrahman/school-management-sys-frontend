import React from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import AdminAvatar from "../../../../shared/components/Avatars/AdminAvatar/AdminAvatar";

function AdminInfoCard() {
  const adminData = {
    name: "John Doe",
    role: "Admin",
    username: "admin",
    email: "admin@example.com",
    phone: "1921756500",
    address: "Chottogram, Bangladesh",
  };

  return (
    <div className="w-full h-full rounded shadow-sm">
      <div className="flex items-center justify-center rounded-t py-6 bg-pink-500">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={40} className="text-gray-500" />
            {/* <AdminAvatar /> */}
          </div>
          <h1 className="italic font-light text-lg mt-2 text-white">
            {adminData.name}
          </h1>
          <p className="text-white text-sm">{adminData.role}</p>
        </div>
      </div>

      <div className="py-5 px-6 bg-white rounded-b">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <User className="text-gray-400" size={20} />
            <div>
              <p className="text-gray-500 text-sm">Username</p>
              <p className="text-sm">{adminData.username}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-gray-400" size={20} />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-xs md:text-sm">{adminData.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-gray-400" size={20} />
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-sm">{adminData.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-gray-400" size={20} />
            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="text-sm">{adminData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfoCard;
