'use client'
import { useEffect, useState } from 'react'

export default function InstallPWA() {
  const [prompt, setPrompt]       = useState<any>(null)
  const [isIOS, setIsIOS]         = useState(false)
  const [isInstalled, setInstalled] = useState(false)
  const [showIOSHelp, setShowIOSHelp] = useState(false)

  useEffect(() => {
    // Already installed as PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true)
      return
    }

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(ios)

    const handler = (e: Event) => {
      e.preventDefault()
      setPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler as any)
    return () => window.removeEventListener('beforeinstallprompt', handler as any)
  }, [])

  if (isInstalled) return null

  const handleInstall = async () => {
    if (!prompt) return
    prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === 'accepted') setPrompt(null)
  }

  return (
    <div style={{
      background: '#111',
      border: '1px solid #2a2a2a',
      padding: '1.5rem',
      marginTop: '1rem',
    }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#555' }}>
        Add to your phone
      </p>
      <p className="font-mono text-sm mb-4" style={{ color: '#888', lineHeight: 1.6 }}>
        Add the Coke Zero tracker as a home screen widget. Opens directly to the live counter.
      </p>

      {/* Android — native install prompt */}
      {prompt && (
        <button
          onClick={handleInstall}
          className="font-mono text-xs tracking-widest uppercase"
          style={{
            background: '#00b4d8',
            color: '#0d0d0d',
            border: 'none',
            padding: '0.6rem 1.2rem',
            cursor: 'pointer',
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          + Add to Home Screen
        </button>
      )}

      {/* iOS — manual instructions */}
      {isIOS && !prompt && (
        <>
          <button
            onClick={() => setShowIOSHelp(v => !v)}
            className="font-mono text-xs tracking-widest uppercase"
            style={{
              background: 'transparent',
              color: '#00b4d8',
              border: '1px solid #00b4d8',
              padding: '0.6rem 1.2rem',
              cursor: 'pointer',
              letterSpacing: '0.1em',
            }}
          >
            How to install on iOS
          </button>

          {showIOSHelp && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#0d0d0d',
              border: '1px solid #2a2a2a',
            }}>
              <ol className="font-mono text-xs" style={{ color: '#888', lineHeight: 2, paddingLeft: '1.2rem' }}>
                <li>Tap the <strong style={{ color: '#f5f5f5' }}>Share</strong> button at the bottom of Safari</li>
                <li>Scroll down and tap <strong style={{ color: '#f5f5f5' }}>Add to Home Screen</strong></li>
                <li>Tap <strong style={{ color: '#f5f5f5' }}>Add</strong></li>
              </ol>
              <p className="font-mono text-xs mt-3" style={{ color: '#444' }}>
                Opens directly to the Coke Zero tracker. No browser chrome.
              </p>
            </div>
          )}
        </>
      )}

      {/* Not iOS and no prompt yet — show the widget link */}
      {!prompt && !isIOS && (
        <a
          href="/widget"
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: '#00b4d8', textDecoration: 'none' }}
        >
          → View the tracker
        </a>
      )}
    </div>
  )
}
