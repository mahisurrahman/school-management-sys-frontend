import { DeleteIcon, EditIcon, EyeIcon, UserIcon } from "lucide-react";
import React from "react";
import StudentTableStatusToggleSwitch from "../StudentTableStatusToggleSwitch/StudentTableStatusToggleSwitch";
import StudentTableActionButtons from "../StudentsTableActionButtons/StudentTableActionButtons";

const StudentsTableRows = ({ student, index, toggleStudentStatus }) => (
  <tr className="hover:bg-gray-50 text-xs">
    <td className="p-4 text-gray-600">{index + 1}</td>
    <td className="p-4">
      <div className="text-teal-500">
        <UserIcon />
      </div>
    </td>
    <td className="p-4 text-gray-700">{student.name}</td>
    <td className="p-4 text-gray-600">{student.roll}</td>
    <td className="p-4 text-gray-600">{student.email}</td>
    <td className="p-4">
      <StudentTableStatusToggleSwitch
        isOn={student.status === "ON"}
        onToggle={() => toggleStudentStatus(index)}
      />
    </td>
    <td className="p-4">
      <div className="flex gap-2">
        <StudentTableActionButtons
          icon={<EyeIcon />}
          color="bg-teal-500 text-sm"
          onClick={() => {}}
        />
        <StudentTableActionButtons
          icon={<EditIcon />}
          color="bg-yellow-500 text-sm"
          onClick={() => {}}
        />
        <StudentTableActionButtons
          icon={<DeleteIcon />}
          color="bg-red-500 text-sm"
          onClick={() => {}}
        />
      </div>
    </td>
  </tr>
);

export default StudentsTableRows;
