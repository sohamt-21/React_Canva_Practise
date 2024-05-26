import React, { useRef, useEffect } from 'react'

const Shapes = props => {
    const canvaRef = useRef(null);
    
    const drawRect = ctx => {
        ctx.fillStyle = '#000000'
        // canvaContext.fillRect(0, 0, canvaContext.canvas.width, canvaContext.canvas.height)
        ctx.fillRect(0, 0, 50, 50)
        ctx.clearRect(20, 20, 20, 20)
        ctx.strokeRect(100, 0, 30, 30)
    }

    const drawFilledTraingle = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }

    const drawStrokedTriangle = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(120, 25);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }

    const drawArc = (ctx) => {
        ctx.beginPath();
        ctx.arc(150, 50, 10, 0, Math.PI * 180 / 180); // Here angle is in radian so we convert it into radians
        // ctx.fill();
        ctx.stroke();
    }

    useEffect(() => {
        const canvas = canvaRef.current;
        const canvaContext = canvas.getContext('2d');
        // console.log(canvaContext.canvas.height);
        // console.log(canvaContext.canvas.width);
        drawRect(canvaContext);
        drawFilledTraingle(canvaContext);
        drawStrokedTriangle(canvaContext);
        drawArc(canvaContext);
    }, [drawRect, drawFilledTraingle, drawStrokedTriangle, drawArc])

    return (
        <canvas ref={canvaRef} {...props} className='canvaClass h-3/4 w-full border-solid border-2 border-sky-500 my-5' />
    )
}

export default Shapes