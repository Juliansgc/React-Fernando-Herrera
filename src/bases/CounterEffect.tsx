import React, {useState, useEffect, useRef} from 'react'
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10
export const CounterEffect = () => {
    const [counter, setCounter] = useState(5)
    const handleClick = () => {
            setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))
    }
    const counterElement = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (counter < 10) return;

        console.log('%CSe llego al valor maximo', 'color:red')

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 10, ease: 'ease.out'})
        .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
    },[counter])
    
    return(
        <>
            <h1>CounterEffect</h1>
            <h2 ref={ counterElement }>{ counter }</h2>
            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )

}