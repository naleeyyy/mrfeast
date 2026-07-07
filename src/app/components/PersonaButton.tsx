'use client'
import { useState } from 'react'

const failures = [
  "failed. he's already written a 3,000-word counter-essay.",
  "failed. he agreed with your point and then explained why it proved him right.",
  "failed. he cited twelve specific mechanics Persona is missing. you asked for one.",
  "failed. he explained why for 47 minutes. you stopped listening at minute 3.",
  "failed. he's now ranking every Persona game by how much it lacks. this will take a while.",
  "failed. he admitted it's good. then immediately listed seventeen things that would make it better.",
  "failed. he pulled up a spreadsheet.",
]

export default function PersonaButton() {
  const [state, setState] = useState<'idle' | 'loading' | 'failed'>('idle')
  const [msg, setMsg] = useState('')

  const attempt = () => {
    if (state === 'loading') return
    setState('loading')
    setMsg('')
    setTimeout(() => {
      setState('failed')
      setMsg(failures[Math.floor(Math.random() * failures.length)])
    }, 1800)
  }

  const reset = () => setState('idle')

  return (
    <div className="p-6" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#555' }}>
        Persona
      </p>
      <p className="text-sm mb-5" style={{ color: '#aaa' }}>
        Convince him Persona is bad.<br/>
        <span style={{ color: '#555', fontSize: '0.75rem' }}>he likes it. this will not go well for you.</span>
      </p>

      {state === 'idle' && (
        <button
          onClick={attempt}
          className="font-mono text-xs px-4 py-2 transition-all hover:opacity-80 active:scale-95"
          style={{ background: '#2a2a2a', color: '#ccc', border: 'none', cursor: 'pointer' }}
        >
          attempt
        </button>
      )}

      {state === 'loading' && (
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 border-2 border-t-transparent rounded-full"
            style={{
              borderColor: '#555',
              borderTopColor: 'transparent',
              animation: 'spin 0.7s linear infinite',
            }}
          />
          <p className="font-mono text-xs" style={{ color: '#555' }}>convincing him...</p>
        </div>
      )}

      {state === 'failed' && (
        <div>
          <p className="font-mono text-sm font-bold mb-2" style={{ color: '#e63946' }}>failed.</p>
          <p className="text-sm mb-4" style={{ color: '#666' }}>{msg}</p>
          <button
            onClick={attempt}
            className="font-mono text-xs mr-3 hover:opacity-80"
            style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer' }}
          >
            try again
          </button>
          <button
            onClick={reset}
            className="font-mono text-xs hover:opacity-80"
            style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer' }}
          >
            give up
          </button>
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
