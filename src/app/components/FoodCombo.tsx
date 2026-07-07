'use client'
import { useState } from 'react'

const proteins  = ['a double kebab', 'a whole rotisserie chicken', 'a 400g steak', 'three lamb chops', 'a full rack of ribs', 'a family-size shawarma']
const carbs     = ['extra large fries', 'a loaf of garlic bread', 'a full portion of rice', 'two portions of chips', 'a massive pita']
const sauces    = ['garlic sauce (too much)', 'chili mayo (also too much)', 'extra ketchup', 'tzatziki on the side', 'mystery sauce from the back shelf']
const extras    = ['and a Coke Zero to stay healthy', 'and another Coke Zero because hydration', 'with a donut for dessert', 'followed immediately by a second plate', 'while queuing Valorant']
const reactions = ['Nutritionally devastating. 10/10.', 'A masterpiece. Zero regrets.', 'The cardiologist has been notified.', 'This is fine. This is completely fine.', 'Michelin would not understand this, but MrFeast does.']

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

export default function FoodCombo() {
  const [combo, setCombo] = useState<string | null>(null)
  const [reaction, setReaction] = useState<string | null>(null)

  const generate = () => {
    setCombo(`${pick(proteins)}, ${pick(carbs)}, ${pick(sauces)}, ${pick(extras)}.`)
    setReaction(pick(reactions))
  }

  return (
    <div className="p-6" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#555' }}>
        What is he eating right now?
      </p>

      {combo ? (
        <div className="mb-5">
          <p className="text-base leading-relaxed mb-3" style={{ color: '#f5f5f5' }}>{combo}</p>
          <p className="font-mono text-xs italic" style={{ color: '#f4a261' }}>{reaction}</p>
        </div>
      ) : (
        <p className="text-sm mb-5" style={{ color: '#555' }}>Press the button. You need to know.</p>
      )}

      <button
        onClick={generate}
        className="font-mono text-xs px-4 py-2 transition-all hover:opacity-80 active:scale-95"
        style={{ background: '#e63946', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        {combo ? 'generate another' : 'generate meal'}
      </button>
    </div>
  )
}
