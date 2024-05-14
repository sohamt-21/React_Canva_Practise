import React, { useRef, useEffect } from 'react'

const Canva = props => {
    const canvaRef = useRef(null);

    useEffect(() => {
        const canvas = canvaRef.current;
        const canvaContext = canvas.getContext('2d');

        canvaContext.fillStyle = '#000000'
        // canvaContext.fillRect(0, 0, canvaContext.canvas.width, canvaContext.canvas.height)
        canvaContext.fillRect(0, 0, 50, 50)
        canvaContext.clearRect(20, 20, 20, 20)
        canvaContext.strokeRect(100, 0, 30, 30)

        canvaContext.beginPath();
        canvaContext.moveTo(100, 50);
        canvaContext.lineTo(150, 100);
        canvaContext.lineTo(200, 150);
        canvaContext.fill();
    }, [])
    return (
        <canvas ref={canvaRef} {...props} className='canvaClass h-full w-full' />
    )
}

export default Canva
