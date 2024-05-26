import React, { useRef, useEffect } from 'react'

const Curves = props => {
  const canvaRef = useRef(null);

  const drawQuadCurve = ctx => {
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    //                   cpx1,cpx2, x, y
    // Draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, 
    // using the control point specified by cp1x and cp1y.

    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue"

    // now to set the transperancy we have globalAlpha property
    ctx.globalAlpha = 0.6; // 0 is transperant and 1 is opaque
    ctx.stroke();
    ctx.fill();
  }

  const lineStyles = (ctx) => {
    for (let i = 0; i < 5; i++) {
      ctx.lineWidth = 1 + i;
      ctx.beginPath();
      ctx.moveTo(150 + i * 14, 5);
      ctx.lineTo(150 + i * 14, 140);

      // Three types of end point styles 

      // ctx.strokeStyle = "black";
      // ["butt", "round", "square"].forEach((lineCap, i) => {
      //   ctx.lineWidth = 15;
      //   ctx.lineCap = lineCap;
      //   ctx.beginPath();
      //   ctx.moveTo(25 + i * 50, 10);
      // ctx.lineTo(25 + i * 50, 140);
      //   ctx.stroke();
      // });
      ctx.stroke();
    }

    // other line properties are 
    // 1) lineJoin: round, bevel, milter

    // 2) setLineDash and lineDashOffset used to draw dashed lines
    // The setLineDash method and the lineDashOffset property specify the dash pattern for lines. 
    // The setLineDash method accepts a list of numbers that specifies distances to alternately draw a line and
    // a gap and the lineDashOffset property sets an offset where to start the pattern.

    // createLinearGradient(x1, y1, x2, y2)
    // Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2)

    // Once we've created a CanvasGradient object we can assign colors to it by using the addColorStop() method.
  }

  useEffect(() => {
    const canvas = canvaRef.current;
    const canvaContext = canvas.getContext('2d');
    drawQuadCurve(canvaContext);
    lineStyles(canvaContext);
  }, [drawQuadCurve, lineStyles])

  return (
    <canvas ref={canvaRef} {...props} className='canvaClass h-3/4 w-full border-solid border-2 border-sky-500 my-5' />
  )
}

export default Curves