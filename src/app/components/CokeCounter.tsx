'use client'
import { useEffect, useState } from 'react'

const ML_PER_DAY = 5000
const ML_PER_SECOND = ML_PER_DAY / 86400
const CAN_ML = 330

function secondsSinceMidnightMKD() {
  const mkd = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje' }))
  return mkd.getHours() * 3600 + mkd.getMinutes() * 60 + mkd.getSeconds()
}

export default function CokeCounter() {
  const [ml, setMl] = useState<number | null>(null)

  useEffect(() => {
    const tick = () => setMl(Math.floor(secondsSinceMidnightMKD() * ML_PER_SECOND))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (ml === null) return null

  const cans = (ml / CAN_ML).toFixed(1)

  return (
    <div className="p-5" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#555' }}>
        Coke Zero consumed today
      </p>
      <p className="font-mono font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f5f5f5' }}>
        {ml.toLocaleString()}<span className="text-lg" style={{ color: '#666' }}>ml</span>
      </p>
      <p className="font-mono text-sm mt-1" style={{ color: '#888' }}>
        ≈ {cans} cans <span style={{ color: '#444' }}>and counting</span>
      </p>
      <div className="mt-3 h-1 w-full" style={{ background: '#2a2a2a' }}>
        <div
          className="h-1 transition-all"
          style={{
            width: `${Math.min((ml / ML_PER_DAY) * 100, 100)}%`,
            background: '#e63946',
          }}
        />
      </div>
      <p className="font-mono text-xs mt-1" style={{ color: '#444' }}>
        {Math.min(Math.floor((ml / ML_PER_DAY) * 100), 100)}% of daily target
      </p>
    </div>
  )
}
