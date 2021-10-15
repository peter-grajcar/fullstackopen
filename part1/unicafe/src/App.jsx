import React, { useState } from 'react'


const StatisticsLine = (props) => {
    const {text, value} = props
    return (
        <tr>
            <td>{text}</td> 
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({feedback}) => {
    const {good, neutral, bad} = feedback

    const all = good + neutral + bad
    const average = all === 0 ? 0 : (good - bad) / all
    const positive = all === 0 ? 0 : 100 * good / all

    if (all === 0) {
        return (
            <div>
                <p>no feedback given</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                 <StatisticsLine text="good" value={good} />
                 <StatisticsLine text="neutral" value={neutral} />
                 <StatisticsLine text="bad" value={bad} />
                 <StatisticsLine text="average" value={average} />
                 <StatisticsLine text="positive" value={positive + "%"} />
            </tbody>
        </table>
     )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    const feedback = {good, bad, neutral}

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
            <h1>statistics</h1>
            <Statistics feedback={feedback} />
        </div>
    )
}

export default App
