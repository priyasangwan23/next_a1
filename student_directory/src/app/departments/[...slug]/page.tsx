import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments } from "@/data/departments";
import { students } from "@/data/students";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  departments.forEach((dept) => {
    params.push({ slug: [dept.slug] });
    if (dept.specialization) {
      dept.specialization.forEach((spec) => {
        params.push({ slug: [dept.slug, spec.slug] });
      });
    }
  });
  return params;
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const deptSlug = slug[0];
  const specSlug = slug[1];

  const dept = departments.find(
    (d) => d.slug.toLowerCase() === deptSlug.toLowerCase()
  );

  if (!dept) {
    notFound();
  }

  // If specialization slug is provided, find it; otherwise pick first specialization
  const spec = specSlug
    ? dept.specialization.find(
        (s) => s.slug.toLowerCase() === specSlug.toLowerCase()
      )
    : dept.specialization[0];

  if (specSlug && !spec) {
    notFound();
  }

  const currentSpec = spec || dept.specialization[0];

  // Students belonging to this department
  const deptStudents = students.filter(
    (s) =>
      s.departmentSlug.toLowerCase() === dept.slug.toLowerCase() ||
      s.department.toLowerCase() === dept.name.toLowerCase()
  );

  const getYearBadge = (studyYear: string) => {
    if (studyYear.includes("1st")) return "Year 1";
    if (studyYear.includes("2nd")) return "Year 2";
    if (studyYear.includes("3rd")) return "Year 3";
    if (studyYear.includes("4th")) return "Year 4";
    return studyYear;
  };

  const getAvatarColorClass = (id: string, department: string) => {
    if (department === "Design") {
      return id === "1089" ? "student-avatar-purple" : "student-avatar-orange";
    }
    if (department === "Business") {
      return id === "1120" ? "student-avatar-orange" : "student-avatar-purple";
    }
    return "";
  };

  const currentPath = specSlug
    ? `/departments/${dept.slug}/${currentSpec.slug}`
    : `/departments/${dept.slug}`;

  return (
    <div className="page-wrapper">
      <div className="breadcrumb">
        <Link href="/departments">Departments</Link>
        <span className="breadcrumb-sep">/</span>
        <Link href={`/departments/${dept.slug}/${dept.specialization[0].slug}`}>
          {dept.name}
        </Link>
        {currentSpec && (
          <>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{currentSpec.name}</span>
          </>
        )}
      </div>

      <div className="dept-detail-nav">
        <Link href="/departments" className="back-link" style={{ marginBottom: 0 }}>
          &larr; Return to {dept.name} Department
        </Link>
        <Link href="/students" className="student-card-link">
          View all students &rarr;
        </Link>
      </div>

      <div className="dept-detail-card">
        <div className="dept-detail-header">
          <div className="dept-detail-title-row">
            <h1 className="dept-detail-title">{currentSpec.name}</h1>
            <span className="spec-badge">
              Specialization under {dept.name}
            </span>
          </div>
          <div>
            <div className="dept-track-label">DEPARTMENT TRACK</div>
            <div className="dept-track-code">{currentSpec.trackCode}</div>
          </div>
        </div>

        <p className="dept-detail-desc">{currentSpec.description}</p>

        <hr className="dept-detail-divider" />

        <div className="dept-detail-stats">
          <div>
            <div className="dept-stat-label">Academic Lead</div>
            <div className="dept-stat-value">{currentSpec.academicLead}</div>
          </div>
          <div>
            <div className="dept-stat-label">Primary Core Lab</div>
            <div className="dept-stat-value">{currentSpec.coreLab}</div>
          </div>
          <div>
            <div className="dept-stat-label">Total Enrollment</div>
            <div className="dept-stat-value">
              {deptStudents.length} Active Enrollees
            </div>
          </div>
          <div>
            <div className="dept-stat-label">Curriculum Cycle</div>
            <div className="dept-stat-value">{currentSpec.curriculumCycle}</div>
          </div>
        </div>
      </div>

      <div className="spec-students-header">
        <div className="spec-students-title">
          <span>Students in this Specialization</span>
          <span className="badge-id">{deptStudents.length}</span>
        </div>
        <div className="spec-filter-badge">
          <span>Filtered by Track:</span>
          <span className="spec-badge" style={{ color: "#111827", fontWeight: 600 }}>
            {currentSpec.name}
          </span>
        </div>
      </div>

      <div className="spec-student-grid">
        {deptStudents.map((student) => {
          const initials = student.name
            .split(" ")
            .map((p) => p[0])
            .join("")
            .slice(0, 2);

          return (
            <div key={student.id} className="spec-student-card">
              <div className="spec-student-top">
                <div className="spec-student-info">
                  <div
                    className={`student-avatar ${getAvatarColorClass(
                      student.id,
                      student.department
                    )}`}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="spec-student-name">{student.name}</div>
                    <div className="spec-student-id">{student.studentId}</div>
                  </div>
                </div>
                <span className="spec-year-badge">
                  {getYearBadge(student.studyYear)}
                </span>
              </div>

              <div className="spec-student-bottom">
                <span className="spec-student-spec">
                  {student.specialization}
                </span>
                <Link
                  href={`/students/${student.id}`}
                  className="spec-profile-link"
                >
                  View profile &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dept-detail-footer">
        <span>Campus Directory &copy; Academic Informatics Core</span>
        <div>
          <span>Path: {currentPath}</span>
          <span className="dept-footer-dot"></span>
        </div>
      </div>
    </div>
  );
}
