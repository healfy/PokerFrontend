import React from 'react'
import { useState, useEffect } from 'react';

export const Timer = ({start = 30}) => {
    const [style, setStyle] = useState<object>({color: "black"})
    const [seconds, setSeconds ] =  useState<number>(start);
    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds <= 10 && seconds > 0){
                setStyle({color: "red"})
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    }, );

    return (
        <div>
            { seconds === 0
                ? "Finished"
                : <h1 style={style}> {seconds}</h1>
            }
        </div>
    )
}
