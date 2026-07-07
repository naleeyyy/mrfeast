'use client'
import { useState } from 'react'

const tips = [
  'Rotate? I am the rotation.',
  'The best time to lurk is now. The second best time is also now.',
  'If they don\'t know where you are, you\'re already winning.',
  '"Just bait me." — me, before winning the round from behind their entire team.',
  'The round isn\'t lost until I\'m dead. And I\'m never where they check.',
  'I know exactly where you\'ll look. And exactly where I\'ll be.',
  'Playing sentinel doesn\'t mean I stay back. It means I stay hidden.',
  'They called it camping. I call it reading the map.',
  'Three kills from behind enemy lines and suddenly everyone wants to know my position. No.',
  'Cypher doesn\'t die. Cypher repositions permanently.',
  'If your team is asking where you are, you\'re lurking correctly.',
  'The camera sees everything. I act on none of it and flank anyway.',
]

export default function LurkTip() {
  const [tip, setTip] = useState<string | null>(null)
  const [idx, setIdx] = useState(0)

  const next = () => {
    const next = (idx + 1) % tips.length
    setIdx(next)
    setTip(tips[next])
  }

  return (
    <div className="p-6" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#555' }}>
        Ask the Lurker
      </p>

      {tip ? (
        <p className="text-base italic leading-relaxed mb-5" style={{ color: '#f5f5f5' }}>
          &quot;{tip}&quot;
        </p>
      ) : (
        <p className="text-sm mb-5" style={{ color: '#555' }}>Seek his wisdom. He may or may not respond.</p>
      )}

      <button
        onClick={next}
        className="font-mono text-xs px-4 py-2 transition-all hover:opacity-80 active:scale-95"
        style={{ background: 'transparent', color: '#888', border: '1px solid #2a2a2a', cursor: 'pointer' }}
      >
        {tip ? 'another tip' : 'ask him'}
      </button>
    </div>
  )
}
