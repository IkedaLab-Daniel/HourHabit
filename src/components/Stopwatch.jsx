import React, {useState, useEffect} from 'react'

// images
import playSVG from '../assets/play.svg'
import pauseSVG from '../assets/pause.svg'
import resetSVG from '../assets/reset.svg'

const Stopwatch = () => {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => { 
        let interval;

        if (isRunning){
            interval = setInterval(() => {
                setTime(prev => (prev + 1))
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [isRunning])

    // functions

    const start = () => {
        setIsRunning(true)
    }

    const stop = () => {
        setIsRunning(false)
    }

    const reset = () => {
        setIsRunning(false)
        setTime(0)
    }

    return(
        <div className="stopwatch">
            <div className="display">
                <span>
                    {(time/(60))/60 > 10 ? `${Math.floor((time/(60))/60)}` : `0${Math.floor((time/(60))/60)}`}:
                    {(time/60)%60 > 10 ? `${Math.floor((time/60))%60}` : `0${Math.floor((time/60))%60}`}:
                    {time%60 > 10 ? `${time%60}` : `0${time%60}`}
                </span>
            </div>
            <div className="btn-container">
                {isRunning ? (<button onClick={stop}><img src={pauseSVG} /></button>) : (<button onClick={start}><img src={playSVG} /></button>)}
                
                <button onClick={reset}><img src={resetSVG} alt='reset' /></button>
            </div>
            <span>{isRunning ? ('Running') : ('Not Running')}</span>
        </div>
    )
}

export default Stopwatch