import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Total orchestration ≤500ms per rules
    const t = setTimeout(() => {
      setHidden(true)
      setTimeout(onDone, 200)
    }, 480)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div id="loader" className={hidden ? 'hidden' : ''} aria-live="polite" aria-label="Loading NeuralOps">
      <div className="loader-logo">NEURAL<span>OPS</span></div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
      <p className="loader-hint">Initialising AI core…</p>
    </div>
  )
}
