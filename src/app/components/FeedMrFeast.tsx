'use client'
import { useState, useCallback } from 'react'

const foods = [
  { emoji: '🍔', name: 'Burger',        calories: 850,  cholesterol: 90  },
  { emoji: '🌯', name: 'Kebab',         calories: 650,  cholesterol: 70  },
  { emoji: '🍕', name: 'Pizza',         calories: 1200, cholesterol: 110 },
  { emoji: '🥩', name: 'Steak',         calories: 700,  cholesterol: 130 },
  { emoji: '🍗', name: 'Fried Chicken', calories: 900,  cholesterol: 105 },
  { emoji: '🍟', name: 'Large Fries',   calories: 490,  cholesterol: 20  },
  { emoji: '🍩', name: 'Donut',         calories: 450,  cholesterol: 25  },
  { emoji: '🧆', name: 'Falafel',       calories: 340,  cholesterol: 5   },
  { emoji: '🥐', name: 'Croissant',     calories: 380,  cholesterol: 45  },
  { emoji: '🥤', name: 'Coke Zero',     calories: 0,    cholesterol: 0   },
]

const reactions = [
  { min: 0,     emoji: '😐', text: 'waiting. this is an appetiser at best.' },
  { min: 500,   emoji: '😋', text: 'okay, now we\'re getting somewhere.' },
  { min: 2000,  emoji: '😤', text: 'this is fine. keep it coming.' },
  { min: 4000,  emoji: '🔥', text: 'now THIS is a meal.' },
  { min: 7000,  emoji: '👑', text: 'this is his domain. you cannot stop him.' },
  { min: 12000, emoji: '🏆', text: 'UNSTOPPABLE. A LEGEND WALKS AMONG US.' },
  { min: 20000, emoji: '🌋', text: 'you have awakened something ancient and hungry.' },
]

type Flying = { id: number; emoji: string; x: number; y: number }

export default function FeedMrFeast() {
  const [calories, setCalories] = useState(0)
  const [cholesterol, setCholesterol] = useState(0)
  const [flying, setFlying]   = useState<Flying[]>([])
  const [totalFed, setTotalFed] = useState(0)

  const feed = useCallback((food: typeof foods[0]) => {
    const id = Date.now() + Math.random()
    const x = 10 + Math.random() * 80
    const y = 10 + Math.random() * 60
    setFlying(prev => [...prev, { id, emoji: food.emoji, x, y }])
    setTimeout(() => setFlying(prev => prev.filter(f => f.id !== id)), 950)
    setCalories(c => c + food.calories)
    setCholesterol(c => Math.min(c + food.cholesterol, 500))
    setTotalFed(c => c + 1)
  }, [])

  const reaction = [...reactions].reverse().find(r => calories >= r.min) ?? reactions[0]
  const cholPct = Math.min((cholesterol / 500) * 100, 100)
  const cholColor = cholPct < 40 ? '#4ade80' : cholPct < 70 ? '#f4a261' : '#e63946'

  return (
    <div className="p-6" style={{ background: '#161616', border: '1px solid #2a2a2a' }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: '#e63946' }}>
        Feed Mr. Feast
      </p>

      {/* Arena */}
      <div
        className="relative overflow-hidden mb-6 flex flex-col items-center justify-center text-center"
        style={{ height: '180px', background: '#0d0d0d', border: '1px solid #2a2a2a' }}
      >
        {flying.map(f => (
          <span
            key={f.id}
            className="food-fly absolute text-4xl select-none"
            style={{ left: `${f.x}%`, top: `${f.y}%` }}
          >
            {f.emoji}
          </span>
        ))}
        <div className="text-5xl mb-2">{reaction.emoji}</div>
        <p className="text-sm px-4" style={{ color: '#aaa' }}>{reaction.text}</p>
        {totalFed > 0 && (
          <p className="font-mono text-xs mt-2" style={{ color: '#555' }}>
            {calories.toLocaleString()} kcal · {totalFed} items
          </p>
        )}
      </div>

      {/* Cholesterol bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <p className="font-mono text-xs" style={{ color: '#555' }}>CHOLESTEROL LEVEL</p>
          <p className="font-mono text-xs" style={{ color: cholColor }}>{Math.round(cholPct)}%</p>
        </div>
        <div className="h-1.5 w-full" style={{ background: '#2a2a2a' }}>
          <div
            className="h-1.5 transition-all duration-500"
            style={{ width: `${cholPct}%`, background: cholColor }}
          />
        </div>
        {cholPct >= 100 && (
          <p className="font-mono text-xs mt-1" style={{ color: '#e63946' }}>
            ⚠ doctor has left the chat
          </p>
        )}
      </div>

      {/* Food buttons */}
      <div className="flex flex-wrap gap-2">
        {foods.map(food => (
          <button
            key={food.emoji}
            onClick={() => feed(food)}
            className="font-mono text-xs px-3 py-2 transition-all duration-150 hover:scale-110 active:scale-95"
            style={{
              background: '#0d0d0d',
              border: '1px solid #2a2a2a',
              color: '#ccc',
              cursor: 'pointer',
            }}
          >
            {food.emoji} {food.name}
          </button>
        ))}
      </div>

      {calories > 0 && (
        <button
          onClick={() => { setCalories(0); setCholesterol(0); setTotalFed(0) }}
          className="font-mono text-xs mt-4"
          style={{ color: '#444', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          reset (he's still hungry)
        </button>
      )}
    </div>
  )
}
