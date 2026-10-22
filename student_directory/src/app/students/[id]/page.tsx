import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return students.map((s) => ({ id: s.id }));
}

export default async function StudentProfilePage({ params }: Props) {
  const { id } = await params;

  const student = students.find(
    (s) =>
      s.id === id ||
      s.studentId.toLowerCase() === id.toLowerCase() ||
      s.name.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
  );

  if (!student) {
    notFound();
  }

  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="page-wrapper">
      <div className="breadcrumb">
        <Link href="/students">Students</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{student.name}</span>
      </div>

      <Link href="/students" className="back-link">
        &larr; Back to students
      </Link>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">{initials}</div>
          <div>
            <h1 className="profile-name">{student.name}</h1>
            <div className="profile-badges">
              <span className="badge-id">{student.studentId}</span>
              <span className="badge-status">{student.status}</span>
            </div>
          </div>
        </div>

        <hr className="profile-divider" />

        <div className="profile-info-grid">
          <div>
            <div className="profile-info-label">DEPARTMENT</div>
            <div className="profile-info-value">{student.department}</div>
          </div>
          <div>
            <div className="profile-info-label">STUDY YEAR</div>
            <div className="profile-info-value">{student.studyYear}</div>
          </div>
          <div>
            <div className="profile-info-label">EMAIL</div>
            <div className="profile-info-value">
              <a href={`mailto:${student.email}`}>{student.email}</a>
            </div>
          </div>
          <div>
            <div className="profile-info-label">ENROLLED</div>
            <div className="profile-info-value">{student.enrolledSemester}</div>
          </div>
        </div>

        <hr className="profile-divider" />

        <div className="profile-section-title">About</div>
        <p className="profile-about-text">{student.about}</p>

        <hr className="profile-divider" />

        <div className="profile-section-title">Academic Details</div>
        <div className="academic-row">
          <span className="academic-label">Department</span>
          <span className="academic-value">{student.department}</span>
        </div>
        <div className="academic-row">
          <span className="academic-label">Current Academic Standing</span>
          <span className="academic-value">
            {student.studyYear.includes("(")
              ? `${student.studyYear.split(" (")[0]} Undergraduate`
              : student.studyYear}
          </span>
        </div>

        <div className="subjects-label">ENROLLED SUBJECTS</div>
        <div className="subjects-table">
          {student.subjects.map((sub, index) => (
            <div key={index} className="subject-row">
              <span>
                <strong>{sub.code}</strong>: {sub.name}
              </span>
              <span className="subject-credits">{sub.credits.toFixed(1)} Credits</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-footer">
        <span>System Record ID: {student.systemRecordId}</span>
        <span>Last validated: {student.lastValidated}</span>
      </div>
    </div>
  );
}