'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}