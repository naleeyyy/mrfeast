import Image from 'next/image'
import Countdown from './components/Countdown'
import CokeCounter from './components/CokeCounter'
import RoastCarousel from './components/RoastCarousel'
import WhatIsDoing from './components/WhatIsDoing'
import BasketballCard from './components/BasketballCard'
import BaitButton from './components/BaitButton'
import FadeIn from './components/FadeIn'
import Clock from './components/Clock'
import FeedMrFeast from './components/FeedMrFeast'
import FoodCombo from './components/FoodCombo'
import LurkTip from './components/LurkTip'
import PersonaButton from './components/PersonaButton'
import PoliticalWidget from './components/PoliticalWidget'

const stats = [
  { label: 'RANK',         value: 'Ascendant / Immortal', sub: 'Sentinel Lurker · Valorant',          icon: '🎯' },
  { label: 'DAILY COKE ZERO', value: '5L+',              sub: 'and counting. every day.',             icon: '🥤' },
  { label: 'DIET',         value: 'Yes.',                 sub: 'high fat · high sugar · high cholesterol', icon: '🍔' },
  { label: 'HEIGHT',       value: '5\'2"',                sub: 'basketball IQ: elite regardless',     icon: '🏀' },
  { label: 'ORIGIN',       value: 'Albanian 🇦🇱',         sub: 'stationed in Macedonia 🇲🇰',           icon: '📍' },
  { label: 'POLITICS',     value: 'Left. Very.',          sub: 'will debate you. will win.',           icon: '⚖️' },
]

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0d0d0d', color: '#f5f5f5' }}>

      {/* EVENT BANNER */}
      <div
        className="event-card border-b-2 text-center py-3 px-4"
        style={{ borderColor: '#e63946', background: '#1a0505' }}
      >
        <span className="font-mono text-sm font-bold tracking-widest uppercase" style={{ color: '#e63946' }}>
          <span className="blink">●</span>
          {' '}LIVE EVENT TODAY · 19:00 CEST · MR. FEAST MUKBANG
          {' '}<span className="blink">●</span>
        </span>
      </div>

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: '#2a2a2a' }}>
        <Image src="/mrfeast-transparent-fix.png" alt="Mr. Feast" width={70} height={70} className="object-contain" />
        <div className="flex items-center gap-6">
          <Clock />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#444' }}>🇦🇱 · 🇲🇰</span>
        </div>
      </nav>

      {/* HERO BANNER */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(280px, 45vw, 580px)' }}>
        <Image src="/mrfeast-banner.png" alt="Mr. Feast" fill className="object-cover object-center" priority />
      </section>

      {/* STATS + LIVE WIDGETS */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: '#e63946' }}>
            The Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: '#555' }}>{stat.label}</p>
                <p className="font-bold text-lg leading-tight mb-1" style={{ color: '#f5f5f5' }}>{stat.value}</p>
                <p className="text-xs" style={{ color: '#666' }}>{stat.sub}</p>
              </div>
            ))}
          </div>
          {/* Live widgets row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CokeCounter />
            <WhatIsDoing />
          </div>
        </FadeIn>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6"><div style={{ height: '1px', background: '#2a2a2a' }} /></div>

      {/* ROAST CAROUSEL */}
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6 py-2">
          <RoastCarousel />
        </div>
      </FadeIn>

      {/* BIO OPENER */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase mb-10" style={{ color: '#e63946' }}>
            Meet MrFeast
          </p>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#aaa' }}>
            If you hear frantic keyboard clicks at 3 AM, followed by the sound of a Coke Zero
            can opening and someone arguing about basketball rotations, there&apos;s a good chance
            you&apos;ve found MrFeast.
          </p>
        </FadeIn>
      </section>

      {/* THE GAME — cinematic */}
      <section className="mb-0">
        <div className="relative w-full overflow-hidden" style={{ height: 'clamp(200px, 30vw, 420px)' }}>
          <Image src="/mr-feast-valo-horizontal.png" alt="MrFeast — Sentinel Cypher" fill className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.7) 0%, transparent 50%, rgba(13,13,13,0.7) 100%)' }} />
          <div className="absolute inset-0 flex items-end px-8 pb-8">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: '#e63946' }}>The Game</p>
              <p className="font-mono font-bold text-2xl md:text-4xl" style={{ color: '#f5f5f5' }}>SENTINEL · LURKER · CYPHER</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12">
          <FadeIn>
            <p className="text-lg leading-relaxed mb-5 max-w-2xl" style={{ color: '#aaa' }}>
              Standing at a mighty 5&apos;2&quot;, MrFeast somehow manages to command every Valorant
              lobby he enters. A dedicated Ascendant/Immortal Sentinel lurker, he&apos;s the player
              who disappears from the minimap for thirty seconds before casually winning the round
              from behind your entire team. His friends have long accepted that if he says
              &quot;just bait me,&quot; they&apos;re probably never seeing him again until the round
              is already over.
            </p>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#aaa' }}>
              Outside of Valorant, he occasionally ventures into other games. He&apos;s a fan of
              the Persona series, although he&apos;ll happily spend an hour explaining how it could
              have been even better if it leaned harder into the mechanics he enjoys. Whether
              anyone asked is another question entirely.
            </p>
            <BaitButton />
          </FadeIn>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6"><div style={{ height: '1px', background: '#2a2a2a' }} /></div>

      {/* THE FOOD */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase mb-10" style={{ color: '#555' }}>The Food</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed mb-5" style={{ color: '#aaa' }}>
                But games are only half the story. The other half is food. Not just eating food.
                Studying it. Appreciating it. Dreaming about it. MrFeast treats every meal like
                it&apos;s a Michelin-starred experience, regardless of whether it&apos;s a gourmet
                steak or a suspiciously greasy kebab at 2 AM.
              </p>
              <blockquote className="my-8 pl-6 py-1" style={{ borderLeft: '3px solid #f4a261' }}>
                <p className="text-xl font-medium italic leading-relaxed" style={{ color: '#f5f5f5' }}>
                  &quot;If it isn&apos;t high in fat, sugar, or cholesterol... why am I eating it?&quot;
                </p>
              </blockquote>
              <p className="text-lg leading-relaxed mb-5" style={{ color: '#aaa' }}>
                His legendary reputation has earned him countless jokes from his friends, who have
                fully embraced the running gag. They roast him relentlessly, and he laughs harder
                than anyone else.
              </p>
              <p className="text-lg leading-relaxed mb-3" style={{ color: '#aaa' }}>To wash it all down?</p>
              <p className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>Only about five litres of Coke Zero a day.</p>
              <p className="text-base mb-1" style={{ color: '#666' }}>Hydration is important.</p>
              <p className="text-base" style={{ color: '#444' }}>Technically.</p>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', border: '1px solid #2a2a2a' }}>
              <Image src="/mr-feast2.png" alt="MrFeast and the kebab" fill className="object-contain" style={{ background: '#0d0d0d' }} />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* INTERACTIVE ZONE */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#e63946' }}>
            Interactive
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <FoodCombo />
            <LurkTip />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <PersonaButton />
            <PoliticalWidget />
          </div>
          <FeedMrFeast />
        </FadeIn>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6"><div style={{ height: '1px', background: '#2a2a2a' }} /></div>

      {/* THE COURT */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: '#555' }}>The Court</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed mb-5" style={{ color: '#aaa' }}>
                Born Albanian and living in North Macedonia, MrFeast somehow balances gaming with
                an obsession that surprises almost everyone who first meets him: Basketball.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#aaa' }}>
                He doesn&apos;t just watch it — he lives it. Whether it&apos;s discussing playoff
                predictions, arguing over all-time rankings, or heading out to play himself,
                basketball is one of the few things capable of pulling him away from his PC.
              </p>
            </div>
            <BasketballCard />
          </div>
        </FadeIn>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6"><div style={{ height: '1px', background: '#2a2a2a' }} /></div>

      {/* REMAINING BIO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="max-w-2xl">

          <FadeIn>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#555' }}>The Journey</p>
            <p className="text-lg leading-relaxed mb-16" style={{ color: '#aaa' }}>
              Life hasn&apos;t always been as carefree. There was a period where MrFeast relied
              on antidepressants during one of the toughest chapters of his life. It wasn&apos;t
              easy, but with time, support, and determination, he gradually worked his way off
              them completely. Today, it&apos;s something both he and his friends look back on
              with genuine pride — not because the struggle disappeared overnight, but because
              he kept moving forward until he no longer needed them.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#555' }}>The Politics</p>
            <p className="text-lg leading-relaxed mb-16" style={{ color: '#aaa' }}>
              When conversations move away from games and sport, they usually end up in politics.
              MrFeast proudly leans toward progressive, left-wing ideas, which makes for endless
              debates with his more conservative friends. Somehow, despite regularly arguing about
              economics, healthcare, or social policy, everyone still queues Valorant together
              the next evening.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#555' }}>The Mystery</p>
            <p className="text-lg leading-relaxed mb-5" style={{ color: '#aaa' }}>
              His romantic life has been... educational. After dating someone known as Vex, he
              realised that relationship wasn&apos;t the future he wanted. Later, he found himself
              unexpectedly developing a small crush on one of his closest friends, TBNDCS. Those
              feelings eventually faded, but they helped him better understand himself — and
              eventually made room for feelings toward someone else.
            </p>
            <p className="text-lg mb-2" style={{ color: '#aaa' }}>Who?</p>
            <p className="text-lg mb-2" style={{ color: '#666' }}>That&apos;s a story MrFeast isn&apos;t telling.</p>
            <p className="text-base mb-16" style={{ color: '#444' }}>At least not yet.</p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="p-8" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#e63946' }}>
                So who is MrFeast?
              </p>
              {[
                'A tactical lurker.',
                'A basketball addict.',
                'A Coke Zero enthusiast of genuinely alarming proportions.',
                'A lover of absurdly unhealthy food.',
                'A friend who laughs the loudest when he\'s the punchline.',
                'Someone who fought through a difficult period and came out stronger.',
              ].map((line) => (
                <p key={line} className="text-base leading-loose" style={{ color: '#ccc' }}>— {line}</p>
              ))}
              <p className="text-base mt-6 mb-1" style={{ color: '#666' }}>And somewhere, probably right now...</p>
              <p className="text-base" style={{ color: '#444' }}>...he&apos;s holding an angle in Valorant while waiting for his kebab to arrive.</p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* MUKBANG EVENT */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <FadeIn>
          <div className="event-card border-2 p-8 md:p-12 relative overflow-hidden" style={{ borderColor: '#e63946', background: '#110808' }}>
            <div className="absolute top-0 right-0 font-mono text-xs px-3 py-1" style={{ background: '#e63946', color: '#fff' }}>
              TODAY
            </div>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#e63946' }}>Live Event</p>
            <h2 className="font-mono font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', color: '#f5f5f5' }}>
              THE MR. FEAST<br />MUKBANG
            </h2>
            <Countdown />
            <p className="mt-6" style={{ color: '#888' }}>He eats. You watch. History is made.</p>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center" style={{ borderColor: '#2a2a2a' }}>
        <p className="font-mono text-xs" style={{ color: '#444' }}>
          MR. FEAST · Made with love, and approximately 5L of Coke Zero.
        </p>
      </footer>
    </main>
  )
}
