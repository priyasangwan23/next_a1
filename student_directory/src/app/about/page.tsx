import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>About Campus Directory</h1>
        <p>Information systems and student record portal.</p>
      </div>

      <div className="about-card">
        <h2>System Overview</h2>
        <p>
          The Campus Directory is an integrated academic portal built with Next.js
          App Router, TypeScript, and clean modern CSS. It provides students,
          faculty, and advisors with fast and reliable access to academic profiles,
          enrolled courses, and department specializations.
        </p>
      </div>

      <div className="about-card">
        <h2>Academic Departments</h2>
        <p>
          Our institution spans three primary faculties: Computer Science, Design,
          and Business. Each department provides specialized curriculums,
          hands-on core laboratories, and direct mentorship from experienced
          academic leads.
        </p>
      </div>

      <div className="about-card">
        <h2>Features &amp; Navigation</h2>
        <p style={{ marginBottom: 12 }}>
          &bull; <strong>Students Directory:</strong> Search by student name, ID,
          or department, with instant filtering.
        </p>
        <p style={{ marginBottom: 12 }}>
          &bull; <strong>Student Profiles:</strong> Full academic breakdown, enrolled
          credits, contact email, and system validation records.
        </p>
        <p style={{ marginBottom: 12 }}>
          &bull; <strong>Departments:</strong> Overview of active academic faculties,
          specialization tracks, and enrolled student lists.
        </p>
        <p>
          &bull; <strong>Safe Routing:</strong> Custom 404 handler for invalid
          student IDs and department paths with quick suggested routes.
        </p>
      </div>
    </div>
  );
}
