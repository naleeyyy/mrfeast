'use client'
import { useEffect, useState } from 'react'

const activities = [
  { range: [0, 5],   emoji: '🎯', text: 'holding an angle at a completely unreasonable hour' },
  { range: [5, 11],  emoji: '😴', text: 'sleeping. he earned it.' },
  { range: [11, 13], emoji: '🍔', text: 'eating breakfast and lunch simultaneously' },
  { range: [13, 17], emoji: '🖥️', text: 'queuing Valorant. lurking. winning.' },
  { range: [17, 19], emoji: '🍖', text: 'PREPARING FOR THE MUKBANG. THIS IS IT.' },
  { range: [19, 21], emoji: '🍗', text: 'THE MUKBANG IS LIVE. HE IS EATING. GO WATCH.' },
  { range: [21, 23], emoji: '🏀', text: 'arguing about basketball rotations' },
  { range: [23, 24], emoji: '⚖️', text: 'debating politics. will not be moved.' },
]

function getMKDHour() {
  return parseInt(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Skopje', hour: 'numeric', hour12: false }),
    10
  )
}

export default function WhatIsDoing() {
  const [activity, setActivity] = useState<{ emoji: string; text: string } | null>(null)

  useEffect(() => {
    const update = () => {
      const h = getMKDHour()
      const match = activities.find(a => h >= a.range[0] && h < a.range[1])
      setActivity(match ?? { emoji: '🌙', text: 'gaming. eating. repeat.' })
    }
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])

  if (!activity) return null

  return (
    <div className="p-5" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#555' }}>
        What is he doing right now?
      </p>
      <p className="text-3xl mb-2">{activity.emoji}</p>
      <p className="text-base leading-snug" style={{ color: '#ccc' }}>{activity.text}</p>
    </div>
  )
}
