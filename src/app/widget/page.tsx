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
    const tick = () => { const d = getMKDData(); setMl(d.ml); setTime(d.time) }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (ml === null) return null

  const pct       = Math.min((ml / ML_PER_DAY) * 100, 100)
  const cans      = (ml / CAN_ML).toFixed(1)
  const remaining = ML_PER_DAY - ml
  const barColor  = pct > 80 ? '#e63946' : pct > 50 ? '#f4a261' : '#00b4d8'

  return (
    <>
      <style>{`
        html, body { background: #0d0d0d; margin: 0; }

        .wid-root {
          min-height: 100dvh;
          background: #0d0d0d;
          font-family: 'Space Mono', 'Courier New', monospace;
          color: #f5f5f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          gap: 0;
          box-sizing: border-box;
        }

        .wid-header {
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: #444;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .wid-left {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .wid-icon {
          font-size: 3.5rem;
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .wid-number {
          font-size: clamp(2.8rem, 16vw, 5rem);
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.2rem;
        }

        .wid-unit {
          font-size: 1.1rem;
          color: #666;
          font-weight: 400;
        }

        .wid-subtitle {
          font-size: 0.72rem;
          color: #555;
          letter-spacing: 0.05em;
          margin-bottom: 1.75rem;
        }

        .wid-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 320px;
        }

        .wid-bar-track {
          width: 100%;
          height: 6px;
          background: #1a1a1a;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.6rem;
        }

        .wid-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1s linear, background 1s ease;
        }

        .wid-pct {
          font-size: 0.68rem;
          color: #555;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
          align-self: flex-start;
        }

        .wid-stats {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .wid-stat-num {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .wid-stat-label {
          font-size: 0.6rem;
          color: #444;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .wid-divider {
          width: 1px;
          background: #2a2a2a;
        }

        .wid-time {
          font-size: 0.65rem;
          color: #333;
          letter-spacing: 0.15em;
          margin-bottom: 2.5rem;
        }

        .wid-link {
          font-size: 0.6rem;
          color: #2a2a2a;
          letter-spacing: 0.15em;
          text-decoration: none;
          text-transform: uppercase;
        }

        /* ── Landscape on phones (height ≤ 480px) ── */
        @media (orientation: landscape) and (max-height: 480px) {
          .wid-root {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 1rem 2.5rem;
            gap: 3rem;
          }

          .wid-header { display: none; }

          .wid-left {
            align-items: flex-start;
            flex-shrink: 0;
          }

          .wid-icon { font-size: 2.2rem; margin-bottom: 0.4rem; }

          .wid-number { font-size: clamp(2rem, 8vw, 3rem); margin-bottom: 0.15rem; }

          .wid-unit { font-size: 0.9rem; }

          .wid-subtitle { margin-bottom: 0; }

          .wid-right {
            align-items: flex-start;
            max-width: 280px;
          }

          .wid-stats { margin-bottom: 1rem; }

          .wid-time { margin-bottom: 0; }

          .wid-link { display: none; }
        }
      `}</style>

      <main className="wid-root">
        <p className="wid-header">MR. FEAST · COKE ZERO TRACKER</p>

        {/* Left: icon + big number */}
        <div className="wid-left">
          <div className="wid-icon">🥤</div>
          <p className="wid-number">
            {ml.toLocaleString()}
            <span className="wid-unit"> ml</span>
          </p>
          <p className="wid-subtitle">of {ML_PER_DAY.toLocaleString()} ml daily</p>
        </div>

        {/* Right: bar + stats */}
        <div className="wid-right">
          <div className="wid-bar-track">
            <div className="wid-bar-fill" style={{ width: `${pct}%`, background: barColor }} />
          </div>

          <p className="wid-pct">{pct.toFixed(1)}%</p>

          <div className="wid-stats">
            <div>
              <p className="wid-stat-num">{cans}</p>
              <p className="wid-stat-label">cans</p>
            </div>
            <div className="wid-divider" />
            <div>
              <p className="wid-stat-num">{remaining.toLocaleString()}</p>
              <p className="wid-stat-label">ml left</p>
            </div>
          </div>

          <p className="wid-time">MKD {time}</p>
        </div>

        <Link href="/" className="wid-link">mrfeast.online</Link>
      </main>
    </>
  )
}
