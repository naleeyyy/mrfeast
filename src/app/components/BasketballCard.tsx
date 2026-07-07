const stats = [
  { label: 'PPG',         value: 'All of them' },
  { label: 'HEIGHT',      value: '5\'2"',          note: 'self-reported: 5\'10"' },
  { label: 'APG',         value: '0.0',             note: 'lurker mentality' },
  { label: 'KEBABS / GM', value: '2.3' },
  { label: 'COKE ZERO',   value: '1.25L / QTR' },
  { label: 'EFF RATING',  value: 'Undeniable' },
]

export default function BasketballCard() {
  return (
    <div
      className="p-6"
      style={{ background: '#161616', border: '1px solid #2a2a2a' }}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: '#555' }}>
            Player Card
          </p>
          <p className="font-mono font-bold text-2xl" style={{ color: '#f5f5f5' }}>MRFEAST</p>
          <p className="font-mono text-xs mt-1" style={{ color: '#666' }}>#00 · F/C · 🇲🇰 MKD</p>
        </div>
        <span className="text-4xl">🏀</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {stats.map(s => (
          <div key={s.label} className="py-2" style={{ borderTop: '1px solid #2a2a2a' }}>
            <p className="font-mono text-xs" style={{ color: '#555' }}>{s.label}</p>
            <p className="font-bold text-sm mt-0.5" style={{ color: '#f5f5f5' }}>{s.value}</p>
            {s.note && <p className="text-xs" style={{ color: '#444' }}>{s.note}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
