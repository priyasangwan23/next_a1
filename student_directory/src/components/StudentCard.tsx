import React from "react";
import Link from "next/link";
import { Student } from "@/data/students";

export default function StudentCard({ student }: { student: Student }) {
  
  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  
  const shortYear = student.studyYear.split(" (")[0];

  let avatarColorClass = "";
  if (student.department === "Design") {
    avatarColorClass = student.id === "1089" ? "student-avatar-purple" : "student-avatar-orange";
  } else if (student.department === "Business") {
    avatarColorClass = student.id === "1120" ? "student-avatar-orange" : "student-avatar-purple";
  }


  let deptBadgeClass = "dept-badge";
  if (student.department === "Design") {
    deptBadgeClass += " dept-badge-design";
  } else if (student.department === "Business") {
    deptBadgeClass += " dept-badge-business";
  }

  return (
    <div className="student-card">
      <div className="student-card-top">
        <div className={`student-avatar ${avatarColorClass}`}>
          {initials}
        </div>
        <span className="student-card-id">{student.studentId}</span>
      </div>

      <div className="student-card-name">{student.name}</div>

      <div className="student-card-meta">
        <span className={deptBadgeClass}>{student.department}</span>
        <span className="year-text">{shortYear}</span>
      </div>

      <hr className="student-card-divider" />

      <Link href={`/students/${student.id}`} className="student-card-link">
        View profile &rarr;
      </Link>
    </div>
  );
}