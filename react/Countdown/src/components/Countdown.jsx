import {useState} from 'react'
import './Countdown.css'
function Countdown() {
    const[target, setTarget] = useState(null);

    return (
        <>
            <h1>Countdown timer app</h1>
            <div id="input">  
                <input 
                    type="datetime-local" 
                    id="datetime"  
                    onchange={(e) => setTarget(e.target.value)}
                />
                <button id="submit">Start</button>
            </div>


            <div id="display">
                <ul>
                    <li><span id="days"></span></li>
                    <li><span id="hours"></span></li>
                    <li><span id="minutes"></span></li>
                    <li><span id="seconds"></span></li>
                </ul>
            </div>
        </>
    )
}   

export default Countdown