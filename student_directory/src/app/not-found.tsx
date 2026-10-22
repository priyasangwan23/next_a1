import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="notfound-topbar">
        <div style={{ maxWidth: 920, margin: "0 auto", width: "100%", display: "flex", gap: 6 }}>
          <Link href="/students">Directory</Link>
          <span>/</span>
          <span style={{ color: "#374151" }}>Not Found</span>
        </div>
      </div>

      <div className="page-wrapper" style={{ padding: "40px 20px" }}>
        <div className="notfound-wrapper">
          <div className="notfound-center">
            <div className="notfound-badge">
              <span className="notfound-dot"></span>
              <span>404 &middot; ROUTE NOT FOUND</span>
            </div>

            <h1 className="notfound-title">Student or department not found</h1>

            <p className="notfound-desc">
              The requested directory entry or path could not be located. It may
              have moved or the identifier might be invalid.
            </p>

            <div className="notfound-actions">
              <Link href="/students" className="btn-primary">
                Return to Students Directory
              </Link>
              <Link href="/departments" className="btn-secondary">
                Browse All Departments
              </Link>
            </div>

            <div className="notfound-suggestions">
              <div className="notfound-suggestions-header">
                <span>SUGGESTED STARTING POINTS</span>
                <span>Internal Routes</span>
              </div>

              <div className="notfound-suggestion-item">
                <span>Computer Science Department</span>
                <Link href="/departments/computer-science">
                  /departments/computer-science &rarr;
                </Link>
              </div>

              <div className="notfound-suggestion-item">
                <span>Design Faculty</span>
                <Link href="/departments/design">
                  /departments/design &rarr;
                </Link>
              </div>

              <div className="notfound-suggestion-item">
                <span>Business &amp; Management</span>
                <Link href="/departments/business">
                  /departments/business &rarr;
                </Link>
              </div>

              <div className="notfound-suggestion-item">
                <span>All Students Directory</span>
                <Link href="/students">/students &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
