import React, { useEffect } from 'react';





function Shunchaki() {
    const [time, setTime] = React.useState(0)
    const [timerOn, setTimerOn] = React.useState(false)


    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)

            }, 10);

        }
        else {
            clearInterval(interval)

        }
        return () => clearInterval(interval);


    }, [timerOn])
    return (
        <div>
            <div>
                <span className='son'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span className='son'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span className='son'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                {!timerOn && time === 0 && (
                    <button className='btn btn-primary' onClick={() => setTimerOn(true)}>Start</button>
                )}

                {timerOn && (
                    <button className='btn btn-danger' onClick={() => setTimerOn(false)}>Stop</button>
                )}

                {!timerOn && time !== 0 && (
                    <button className='btn btn-primary' onClick={() => setTimerOn(true)}>Resume</button>
                )}

                {!timerOn && time > 0 && (
                    <button className='btn btn-warning ms-4' onClick={() => setTime(0)}>Reset</button>
                )}
            </div>

        </div>
    )

}
export default Shunchaki;