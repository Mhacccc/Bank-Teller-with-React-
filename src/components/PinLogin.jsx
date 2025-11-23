import { useState, useEffect } from "react"

const CORRECT_PIN = "123456"
const MAX_ATTEMPTS = 3
const TIMEOUT_MINUTES = 5

export default function PinLogin({ onLogin }) {
    const [pin, setPin] = useState("")
    const [attempts, setAttempts] = useState(MAX_ATTEMPTS)
    const [error, setError] = useState("")
    const [isLocked, setIsLocked] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(null)

    useEffect(() => {
        let timer
        if (isLocked && timeRemaining > 0) {
            timer = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1)
            }, 1000)
        } else if (isLocked && timeRemaining === 0) {
            setIsLocked(false)
            setAttempts(MAX_ATTEMPTS)
            setPin("")
            setError("")
            setTimeRemaining(null)
        }
        return () => clearTimeout(timer)
    }, [isLocked, timeRemaining])

    const handlePinChange = (e) => {
        const value = e.target.value
        if (value.length <= 6 && /^\d*$/.test(value)) {
            setPin(value)
            setError("")
        }
    }

    const handleSubmit = () => {
        if (isLocked) return

        if (pin === CORRECT_PIN) {
            setPin("")
            setAttempts(MAX_ATTEMPTS)
            setError("")
            onLogin()
        } else {
            const remainingAttempts = attempts - 1
            setAttempts(remainingAttempts)
            setPin("")
            
            if (remainingAttempts === 0) {
                setIsLocked(true)
                setTimeRemaining(TIMEOUT_MINUTES * 60)
                setError(`Account locked! Try again in ${TIMEOUT_MINUTES} minutes.`)
            } else {
                setError(`Invalid PIN. ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`)
            }
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !isLocked) {
            handleSubmit()
        }
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes}:${secs.toString().padStart(2, "0")}`
    }

    return (
        <div className="pin-container">
            <div className="pin-box">
                <h1>Bank Teller</h1>
                <p className="pin-subtitle">Enter your PIN to continue</p>
                
                <input
                    type="password"
                    maxLength="6"
                    value={pin}
                    onChange={handlePinChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter 6-digit PIN"
                    disabled={isLocked}
                    className="pin-input"
                    autoFocus
                />
                
                <div className="pin-display">
                    {"●".repeat(pin.length)}{"○".repeat(6 - pin.length)}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isLocked || pin.length !== 6}
                    className="pin-button"
                >
                    {isLocked ? "Locked" : "Login"}
                </button>

                {error && (
                    <div className={`pin-error ${isLocked ? "locked" : ""}`}>
                        {error}
                        {isLocked && timeRemaining !== null && (
                            <div className="timeout-display">
                                Time remaining: {formatTime(timeRemaining)}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    )
}
