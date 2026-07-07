'use client'
import { useEffect, useState } from 'react'

const TARGET = new Date('2026-07-07T17:00:00Z') // 19:00 CEST

const pad = (n: number) => String(n).padStart(2, '0')

export default function Countdown() {
  const [diff, setDiff] = useState<number | null>(null)

  useEffect(() => {
    const tick = () => setDiff(TARGET.getTime() - Date.now())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (diff === null) return null

  if (diff <= 0) {
    return (
      <div>
        <p className="font-mono font-bold text-4xl" style={{ color: '#f4a261' }}>IT&apos;S HAPPENING. 🍖</p>
        <p className="font-mono text-xs mt-2" style={{ color: '#666' }}>witness the feast</p>
      </div>
    )
  }

  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)

  return (
    <div>
      <p className="font-mono font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#f4a261' }}>
        {pad(h)}:{pad(m)}:{pad(s)}
      </p>
      <p className="font-mono text-xs tracking-widest uppercase mt-2" style={{ color: '#555' }}>
        hours · minutes · seconds
      </p>
    </div>
  )
}
