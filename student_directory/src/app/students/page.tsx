"use client";

import React, { useState } from "react";
import { students } from "@/data/students";
import StudentCard from "@/components/StudentCard";

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDept === "all" ||
      student.department.toLowerCase() === selectedDept.toLowerCase();

    return matchesSearch && matchesDept;
  });

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Students</h1>
        <p>Browse students and view their profiles.</p>
      </div>

      <div className="search-bar">
        <div className="search-input-wrapper">
          <svg
            className="search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search students"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="search-filter">
          <span>Department:</span>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="all">All departments</option>
            <option value="computer science">Computer Science</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>

      <div className="students-grid">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      <div className="pagination-row">
        <span>
          Showing {filteredStudents.length} of {students.length} students
        </span>
        <div className="pagination-buttons">
          <button className="pagination-btn" type="button">
            Previous
          </button>
          <button className="pagination-btn" type="button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
