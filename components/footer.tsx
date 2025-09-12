import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 x-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
            &copy; {new Date().getFullYear()} Arjun Kundu. All rights reserved.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website:</span> This website was built using React & Next.js &#40;App Router & Server Actions&#41;, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, and Vercel hosting.
        </p>
    </footer>
  )
}
