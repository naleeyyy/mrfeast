'use client'
import { useState } from 'react'

const debateTopics = [
  { topic: 'taxation', mrfeast: 'tax the rich. tax them again.', friend: 'but who will create the jobs', verdict: 'MrFeast cited four economists. Friend cited his uncle.' },
  { topic: 'healthcare', mrfeast: 'free healthcare. obviously. why is this a debate.', friend: 'but the waiting lists—', verdict: 'MrFeast sent three links. Friend said "yeah but still."' },
  { topic: 'housing', mrfeast: 'housing is a human right, not an investment vehicle.', friend: 'but my landlord works hard—', verdict: 'MrFeast went quiet for six seconds. Then responded for twelve minutes.' },
  { topic: 'minimum wage', mrfeast: 'raise it. raise it more. keep raising it.', friend: 'small businesses can\'t afford—', verdict: 'They agreed small businesses are good. Disagreed on everything else.' },
  { topic: 'climate', mrfeast: 'it\'s an emergency. act like it.', friend: 'the economy though—', verdict: 'MrFeast asked what economy exists on a dead planet. No one answered.' },
  { topic: 'public transport', mrfeast: 'free public transport, funded by not building more highways.', friend: 'but i need my car—', verdict: 'Friend conceded the point. Drove home anyway.' },
]

const convinceFailures = [
  "failed. he said 'interesting' and then dismantled your argument in four sentences.",
  "failed. he's heard this one before. he has a folder for this one.",
  "failed. he agreed the system has flaws. the flaw is capitalism.",
  "failed. he said 'read Chomsky' and walked away.",
  "failed. he cited a study. then another. then a third one just to be safe.",
]

export default function PoliticalWidget() {
  const [debate, setDebate] = useState<typeof debateTopics[0] | null>(null)
  const [convState, setConvState] = useState<'idle' | 'loading' | 'failed'>('idle')
  const [convMsg, setConvMsg] = useState('')

  const generateDebate = () => {
    setDebate(debateTopics[Math.floor(Math.random() * debateTopics.length)])
  }

  const convince = () => {
    if (convState === 'loading') return
    setConvState('loading')
    setTimeout(() => {
      setConvState('failed')
      setConvMsg(convinceFailures[Math.floor(Math.random() * convinceFailures.length)])
    }, 1800)
  }

  return (
    <div className="p-6" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: '#555' }}>
        Political Profile
      </p>

      {/* Spectrum bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-mono text-xs" style={{ color: '#444' }}>right</span>
          <span className="font-mono text-xs" style={{ color: '#444' }}>left</span>
          <span className="font-mono text-xs" style={{ color: '#e63946' }}>MrFeast →</span>
        </div>
        <div className="relative h-2 rounded-none" style={{ background: '#2a2a2a' }}>
          <div className="absolute inset-y-0 right-0 w-full" style={{ background: 'linear-gradient(to right, #2a2a2a, #e63946 85%)' }} />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 border-2"
            style={{ right: '-6px', background: '#e63946', borderColor: '#f5f5f5' }}
          />
        </div>
        <p className="font-mono text-xs mt-2" style={{ color: '#555' }}>
          past the edge of the chart. the chart doesn&apos;t go this far.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { label: 'Position',  value: 'Very Left' },
          { label: 'Debates',   value: 'Wins all of them' },
          { label: 'Post-debate', value: 'Queues Valorant' },
          { label: 'Changed minds', value: 'Several (himself: 0)' },
        ].map(s => (
          <div key={s.label} className="py-2" style={{ borderTop: '1px solid #2a2a2a' }}>
            <p className="font-mono text-xs" style={{ color: '#555' }}>{s.label}</p>
            <p className="text-sm font-medium mt-0.5" style={{ color: '#ccc' }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Debate generator */}
      <div className="mb-5">
        <button
          onClick={generateDebate}
          className="font-mono text-xs px-4 py-2 mb-4 hover:opacity-80 active:scale-95 transition-all"
          style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', color: '#888', cursor: 'pointer' }}
        >
          generate debate
        </button>

        {debate && (
          <div className="mt-3 p-4" style={{ background: '#0d0d0d', border: '1px solid #2a2a2a' }}>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#555' }}>
              Topic: {debate.topic}
            </p>
            <p className="text-sm mb-1" style={{ color: '#e63946' }}>
              MrFeast: &quot;{debate.mrfeast}&quot;
            </p>
            <p className="text-sm mb-3" style={{ color: '#666' }}>
              Friend: &quot;{debate.friend}&quot;
            </p>
            <p className="font-mono text-xs italic" style={{ color: '#444' }}>
              {debate.verdict}
            </p>
            <p className="font-mono text-xs mt-2" style={{ color: '#333' }}>
              They queued Valorant 10 minutes later.
            </p>
          </div>
        )}
      </div>

      {/* Convince him capitalism is fine */}
      <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '16px' }}>
        <p className="text-sm mb-3" style={{ color: '#555' }}>Convince him capitalism is fine.</p>

        {convState === 'idle' && (
          <button
            onClick={convince}
            className="font-mono text-xs px-4 py-2 hover:opacity-80 active:scale-95 transition-all"
            style={{ background: '#2a2a2a', color: '#ccc', border: 'none', cursor: 'pointer' }}
          >
            attempt
          </button>
        )}

        {convState === 'loading' && (
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 border-2 rounded-full"
              style={{ borderColor: '#555', borderTopColor: 'transparent', animation: 'spin 0.7s linear infinite' }}
            />
            <p className="font-mono text-xs" style={{ color: '#555' }}>presenting argument...</p>
          </div>
        )}

        {convState === 'failed' && (
          <div>
            <p className="font-mono text-sm font-bold mb-2" style={{ color: '#e63946' }}>failed.</p>
            <p className="text-sm mb-3" style={{ color: '#666' }}>{convMsg}</p>
            <button
              onClick={convince}
              className="font-mono text-xs mr-3 hover:opacity-80"
              style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer' }}
            >
              try again
            </button>
          </div>
        )}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
