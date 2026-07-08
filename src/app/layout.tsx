import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MR. FEAST',
  description: 'Albanian. Macedonian. Sentinel. Eater.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MrFeast',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/mrfeast-transparent-fix.png" />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'))}`
        }} />
      </body>
    </html>
  )
}
