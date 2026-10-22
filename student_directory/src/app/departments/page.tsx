import React from "react";
import Link from "next/link";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  const getDeptIcon = (slug: string) => {
    if (slug === "computer-science") {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="m10 9 2 2-2 2" />
        </svg>
      );
    }
    if (slug === "design") {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 2 4 4-12 12H6v-4L18 2z" />
          <path d="m14 6 4 4" />
        </svg>
      );
    }
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    );
  };

  return (
    <div className="page-wrapper">
      <div className="dept-page-header">
        <div>
          <h1>Departments</h1>
          <p>Explore academic faculties, programs, and enrolled students.</p>
        </div>
        <div className="dept-active-badge">
          <span className="dept-active-dot"></span>
          <span>{departments.length} Active Academic Faculties</span>
        </div>
      </div>

      <div className="dept-list">
        {departments.map((dept) => {
          // Link to first specialization or department page
          const firstSpec = dept.specialization?.[0]?.slug || "web-development";
          const href = `/departments/${dept.slug}/${firstSpec}`;

          return (
            <div key={dept.slug} className="dept-item">
              <div className="dept-item-left">
                <div className="dept-icon">{getDeptIcon(dept.slug)}</div>
                <div>
                  <h3 className="dept-item-name">{dept.name}</h3>
                  <p className="dept-item-desc">{dept.description}</p>
                  <div className="dept-item-stats">
                    <span>▲</span>
                    <span>{dept.specializations} Specializations</span>
                    <span>&middot;</span>
                    <span>👥 {dept.enrolledStudents} Enrolled Students</span>
                  </div>
                </div>
              </div>

              <Link href={href} className="dept-view-link">
                View students &rarr;
              </Link>
            </div>
          );
        })}
      </div>

      <div className="dept-page-footer">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}
