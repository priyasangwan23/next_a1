import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <h2>Student Directory</h2>

        <div>
            <Link href="/students">Students</Link>
            <Link href="/departemnts">Departments</Link>
            <Link href="/about">About</Link>
        </div>
    </nav>
  );
}
