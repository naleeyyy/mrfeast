'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const ML_PER_DAY = 5000
const CAN_ML     = 330

function getMKDData() {
  const mkd  = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje' }))
  const secs = mkd.getHours() * 3600 + mkd.getMinutes() * 60 + mkd.getSeconds()
  const ml   = Math.min(Math.floor((secs / 86400) * ML_PER_DAY), ML_PER_DAY)
  const time = mkd.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  return { ml, time }
}

export default function WidgetPage() {
  const [ml,   setMl]   = useState<number | null>(null)
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const d = getMKDData()
      setMl(d.ml)
      setTime(d.time)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (ml === null) return null

  const pct       = Math.min((ml / ML_PER_DAY) * 100, 100)
  const cans      = (ml / CAN_ML).toFixed(1)
  const remaining = ML_PER_DAY - ml

  const barColor = pct > 80 ? '#e63946' : pct > 50 ? '#f4a261' : '#00b4d8'

  return (
    <main style={{
      minHeight: '100dvh',
      background: '#0d0d0d',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      fontFamily: "'Space Mono', 'Courier New', monospace",
      color: '#f5f5f5',
    }}>
      {/* Header */}
      <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: '#444', marginBottom: '2.5rem', textTransform: 'uppercase' }}>
        MR. FEAST · COKE ZERO TRACKER
      </p>

      {/* Icon */}
      <div style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: 1 }}>🥤</div>

      {/* Main number */}
      <p style={{ fontSize: 'clamp(3rem, 18vw, 5rem)', fontWeight: 700, lineHeight: 1, marginBottom: '0.25rem' }}>
        {ml.toLocaleString()}
        <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 400 }}> ml</span>
      </p>

      <p style={{ fontSize: '0.75rem', color: '#555', marginBottom: '2rem', letterSpacing: '0.05em' }}>
        of {ML_PER_DAY.toLocaleString()} ml daily
      </p>

      {/* Progress bar */}
      <div style={{
        width: '100%',
        maxWidth: '320px',
        height: '6px',
        background: '#1a1a1a',
        borderRadius: '3px',
        marginBottom: '0.75rem',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`,
          height: '100%',
          background: barColor,
          borderRadius: '3px',
          transition: 'width 1s linear, background 1s ease',
        }} />
      </div>

      <p style={{ fontSize: '0.7rem', color: '#555', marginBottom: '2.5rem', letterSpacing: '0.1em' }}>
        {pct.toFixed(1)}%
      </p>

      {/* Stats row */}
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        marginBottom: '3rem',
        textAlign: 'center',
      }}>
        <div>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f5f5f5' }}>{cans}</p>
          <p style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>cans</p>
        </div>
        <div style={{ width: '1px', background: '#2a2a2a' }} />
        <div>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f5f5f5' }}>{remaining.toLocaleString()}</p>
          <p style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>ml left</p>
        </div>
      </div>

      {/* MKD time */}
      <p style={{ fontSize: '0.65rem', color: '#333', letterSpacing: '0.15em' }}>
        MKD {time}
      </p>

      {/* Back link — hidden in standalone PWA mode */}
      <Link
        href="/"
        style={{
          marginTop: '3rem',
          fontSize: '0.6rem',
          color: '#333',
          letterSpacing: '0.15em',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        mrfeast.online
      </Link>
    </main>
  )
}
