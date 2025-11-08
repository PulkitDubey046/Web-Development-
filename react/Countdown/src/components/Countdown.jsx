import { useEffect, useState } from 'react'
import './Countdown.css'

function Countdown() {
  const [target, setTarget] = useState(null)
  const [diff, setDiff] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  function handleSubmit() {
    // Clear any existing interval before starting a new one
    if (intervalId) clearInterval(intervalId)

    const id = setInterval(() => {
      const difference = new Date(target) - new Date()
      if (difference <= 0) {
        clearInterval(id)
        setDiff(0)
      } else {
        setDiff(difference)
      }
    }, 1000)

    setIntervalId(id)
  }

  // Convert diff (ms) to days/hours/minutes/seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return (
    <>
      <h1>Countdown Timer App</h1>
      <div id="input">
        <input
          type="datetime-local"
          id="datetime"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button id="submit" onClick={handleSubmit}>Start</button>
      </div>

      <div id="display">
        <ul>
          <li><span id="days">{days}</span> Days</li>
          <li><span id="hours">{hours}</span> Hours</li>
          <li><span id="minutes">{minutes}</span> Minutes</li>
          <li><span id="seconds">{seconds}</span> Seconds</li>
        </ul>
      </div>
    </>
  )
}

export default Countdown
