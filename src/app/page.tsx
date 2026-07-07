import Image from 'next/image'

const stats = [
  {
    label: 'RANK',
    value: 'Ascendant / Immortal',
    sub: 'Sentinel Lurker · Valorant',
    icon: '🎯',
  },
  {
    label: 'DAILY COKE ZERO',
    value: '5L+',
    sub: 'and counting. every day.',
    icon: '🥤',
  },
  {
    label: 'DIET',
    value: 'Yes.',
    sub: 'high fat · high sugar · high cholesterol',
    icon: '🍔',
  },
  {
    label: 'HEIGHT',
    value: '5\'2"',
    sub: 'basketball IQ: elite regardless',
    icon: '🏀',
  },
  {
    label: 'ORIGIN',
    value: 'Albanian 🇦🇱',
    sub: 'stationed in Macedonia 🇲🇰',
    icon: '📍',
  },
  {
    label: 'POLITICS',
    value: 'Left. Very.',
    sub: 'will debate you. will win.',
    icon: '⚖️',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0d0d0d', color: '#f5f5f5' }}>

      {/* EVENT BANNER */}
      <div
        className="event-card border-2 text-center py-3 px-4"
        style={{ borderColor: '#e63946', background: '#1a0505' }}
      >
        <span
          className="font-mono text-sm font-bold tracking-widest uppercase"
          style={{ color: '#e63946' }}
        >
          <span className="blink">●</span>
          {' '}LIVE EVENT TODAY · 18:00 · MR. FEAST MUKBANG
          {' '}<span className="blink">●</span>
        </span>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: '#e63946' }}
            >
              est. somewhere in Macedonia
            </p>
            <h1
              className="font-mono font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', color: '#f5f5f5' }}
            >
              MR.<br />FEAST
            </h1>
            <p
              className="text-lg font-medium mb-6"
              style={{ color: '#999', maxWidth: '400px' }}
            >
              Albanian. Macedonian. Lurker. Eater of things that would concern a cardiologist.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span
                className="font-mono text-xs px-3 py-1 border"
                style={{ borderColor: '#2a2a2a', color: '#888' }}
              >
                Valorant
              </span>
              <span
                className="font-mono text-xs px-3 py-1 border"
                style={{ borderColor: '#2a2a2a', color: '#888' }}
              >
                Basketball
              </span>
              <span
                className="font-mono text-xs px-3 py-1 border"
                style={{ borderColor: '#2a2a2a', color: '#888' }}
              >
                Food
              </span>
              <span
                className="font-mono text-xs px-3 py-1 border"
                style={{ borderColor: '#2a2a2a', color: '#888' }}
              >
                Coke Zero
              </span>
            </div>
          </div>

          {/* PHOTO */}
          <div className="relative flex-shrink-0">
            <div
              className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden"
              style={{ border: '2px solid #2a2a2a' }}
            >
              <Image
                src="/mrfeast-1.png"
                alt="Mr. Feast"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div
              className="absolute -bottom-3 -right-3 font-mono text-xs px-3 py-1"
              style={{ background: '#e63946', color: '#fff' }}
            >
              THE MAN. THE MYTH.
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', background: '#2a2a2a' }} />
      </div>

      {/* STATS GRID */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p
          className="font-mono text-xs tracking-widest uppercase mb-8"
          style={{ color: '#e63946' }}
        >
          The Numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5"
              style={{
                background: '#161616',
                border: '1px solid #2a2a2a',
              }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-1"
                style={{ color: '#555' }}
              >
                {stat.label}
              </p>
              <p className="font-bold text-lg leading-tight mb-1" style={{ color: '#f5f5f5' }}>
                {stat.value}
              </p>
              <p className="text-xs" style={{ color: '#666' }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', background: '#2a2a2a' }} />
      </div>

      {/* BIO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: '#e63946' }}
          >
            Who Is He
          </p>
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#ccc' }}>
            Mr. Feast is a man of simple pleasures: Valorant, basketball, and enough calories
            to fuel a small nation. An Albanian soul planted in Macedonia, he lurks corners
            in-game and in life — patient, calculated, and always hungry.
          </p>
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#ccc' }}>
            He plays Persona too, though he&apos;ll tell you it&apos;s lacking.
            On the court he&apos;s all energy. In politics he&apos;s all conviction.
            In the kitchen he&apos;s all gas, no brakes.
          </p>
          <p className="text-base" style={{ color: '#666' }}>
            His friends celebrate him — not just for his rank, but for showing up every day
            and being exactly himself. Resilient. Loud. Deeply loved.
          </p>
        </div>
      </section>

      {/* MUKBANG EVENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div
          className="event-card border-2 p-8 md:p-12 relative overflow-hidden"
          style={{ borderColor: '#e63946', background: '#110808' }}
        >
          <div
            className="absolute top-0 right-0 font-mono text-xs px-3 py-1"
            style={{ background: '#e63946', color: '#fff' }}
          >
            TODAY
          </div>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: '#e63946' }}
          >
            Live Event
          </p>
          <h2
            className="font-mono font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', color: '#f5f5f5' }}
          >
            THE MR. FEAST<br />MUKBANG
          </h2>
          <p className="text-5xl font-bold mb-4" style={{ color: '#f4a261' }}>
            18:00
          </p>
          <p style={{ color: '#888' }}>
            He eats. You watch. History is made.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t py-8 text-center"
        style={{ borderColor: '#2a2a2a' }}
      >
        <p className="font-mono text-xs" style={{ color: '#444' }}>
          MR. FEAST · Made with love, and approximately 5L of Coke Zero.
        </p>
      </footer>
    </main>
  )
}
