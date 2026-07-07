import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MR. FEAST',
  description: 'Albanian. Macedonian. Sentinel. Eater.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
