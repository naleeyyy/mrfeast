'use client'
import { useRef, useState } from 'react'

export default function BaitButton() {
  const [gone, setGone] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const btnRef = useRef<HTMLButtonElement>(null)

  const dodge = () => {
    const x = (Math.random() - 0.5) * 260
    const y = (Math.random() - 0.5) * 100
    setPos({ x, y })
  }

  if (gone) {
    return (
      <p className="font-mono text-xs" style={{ color: '#444' }}>
        he&apos;s lurking. he&apos;s not coming back.
      </p>
    )
  }

  return (
    <div className="relative h-16 flex items-center">
      <button
        ref={btnRef}
        onMouseEnter={dodge}
        onClick={() => setGone(true)}
        className="font-mono text-xs px-4 py-2 border transition-all duration-150"
        style={{
          borderColor: '#2a2a2a',
          color: '#666',
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          cursor: 'pointer',
          background: 'transparent',
        }}
      >
        just bait me
      </button>
    </div>
  )
}
