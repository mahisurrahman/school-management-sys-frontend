import React from "react";
import AdminDashStatsCard from "../../Components/AdminDashStatsCard/AdminDashStatsCard";
import AdminIncomeExpenseGraph from "../../Components/AdminIncomeExpenseGraph/AdminIncomeExpenseGraph";
import AdminInfoCard from "../../Components/AdminInfoCard/AdminInfoCard";
import AdminStudentAttendanceGraph from "../../Components/AdminStudentAttendanceGraph/AdminStudentAttendanceGraph";
import AdminPanelAllNoticeBoard from "../../Components/AdminPanelAllNoticeBoard/AdminPanelAllNoticeBoard";
import AdminSiteStats from "../../Components/AdminSiteStats/AdminSiteStats";

function AdminDashboard() {
  return (
    <div className="w-full overflow-y-auto">
      <AdminDashStatsCard />
      <AdminIncomeExpenseGraph />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 md:gap-x-6">
        <div className="col-span-4">
          <AdminInfoCard />
        </div>
        <div className="hidden md:block col-span-8">
          <AdminStudentAttendanceGraph />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
        <div>
          <AdminPanelAllNoticeBoard />
        </div>
        <div>
          <AdminSiteStats />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
