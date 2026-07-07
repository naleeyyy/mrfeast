'use client'
import { useEffect, useState } from 'react'

const roasts = [
  { quote: 'He once ate a kebab before eating a different kebab. He called it a starter.', author: 'a concerned friend' },
  { quote: 'The only thing higher than his Valorant rank is his cholesterol.', author: 'the squad' },
  { quote: 'He loves Persona. He will also explain for an hour how it could be better. Loving it and critiquing it are not in conflict. He has a list.', author: 'everyone' },
  { quote: 'I asked if he\'d eaten today. He said yes, twice. It was 9am.', author: 'witness' },
  { quote: 'Five litres of Coke Zero and he still complains he\'s thirsty.', author: 'his doctor, probably' },
  { quote: '"Just bait me." Last words before disappearing for 40 seconds and winning the round.', author: 'his Valorant team' },
  { quote: 'He argues left-wing politics with his right-wing friends then they all eat kebabs together after.', author: 'an observer' },
  { quote: 'Somehow 5\'2" and the most intimidating person in the lobby.', author: 'bronze enemy' },
]

export default function RoastCarousel() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % roasts.length)
        setVisible(true)
      }, 400)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const { quote, author } = roasts[index]

  return (
    <div className="py-10 px-6" style={{ borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#555' }}>
        What his friends say
      </p>
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          minHeight: '80px',
        }}
      >
        <p className="text-xl leading-relaxed mb-3" style={{ color: '#f5f5f5' }}>
          &quot;{quote}&quot;
        </p>
        <p className="font-mono text-xs" style={{ color: '#555' }}>— {author}</p>
      </div>
      <div className="flex gap-2 mt-6">
        {roasts.map((_, i) => (
          <div
            key={i}
            className="h-0.5 flex-1 transition-all duration-300"
            style={{ background: i === index ? '#e63946' : '#2a2a2a' }}
          />
        ))}
      </div>
    </div>
  )
}
