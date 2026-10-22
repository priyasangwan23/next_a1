"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarContent() {
  const pathname = usePathname() || "";

  const isStudents = pathname === "/" || pathname.startsWith("/students");
  const isDepartments = pathname.startsWith("/departments");
  const isAbout = pathname.startsWith("/about");

  return (
    <nav className="navbar">
      <Link href="/students" className="navbar-brand">
        <span className="navbar-brand-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </span>
        <span>Campus Directory</span>
      </Link>

      <div className="navbar-links">
        <Link
          href="/students"
          className={`navbar-link ${isStudents ? "navbar-link-active" : ""}`}
        >
          Students
        </Link>
        <Link
          href="/departments"
          className={`navbar-link ${isDepartments ? "navbar-link-active" : ""}`}
        >
          Departments
        </Link>
        <Link
          href="/about"
          className={`navbar-link ${isAbout ? "navbar-link-active" : ""}`}
        >
          About
        </Link>
      </div>

      <div className="navbar-badge">Frontend Practice</div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense
      fallback={
        <nav className="navbar">
          <Link href="/students" className="navbar-brand">
            <span className="navbar-brand-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <span>Campus Directory</span>
          </Link>

          <div className="navbar-links">
            <Link href="/students" className="navbar-link navbar-link-active">
              Students
            </Link>
            <Link href="/departments" className="navbar-link">
              Departments
            </Link>
            <Link href="/about" className="navbar-link">
              About
            </Link>
          </div>

          <div className="navbar-badge">Frontend Practice</div>
        </nav>
      }
    >
      <NavbarContent />
    </Suspense>
  );
}
