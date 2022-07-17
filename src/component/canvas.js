import React, { useRef, useState, useEffect, useContext } from "react";
import AppContext from "../context/context";
import Toolbar from "./toolbar";

const Canvas = () => {
  const { drawColor, strokeSize } = useContext(AppContext);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDraw, setDraw] = useState(false);

  useEffect(() => {
    initiCanvas();
  }, []);

  const initiCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctxRef.current = canvas.getContext("2d");
  };

  const onStart = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setDraw(true);
  };

  /*
   when user leave the mouse path will be close and setDraw will became false
  */
  const onEnd = () => {
    ctxRef.current.closePath();
    setDraw(false);
  };

  const onDraw = ({ nativeEvent }) => {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();
    if (!isDraw) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineWidth = strokeSize;
    ctxRef.current.strokeStyle = drawColor;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
    ctxRef.current.strokeStyle = "red";
  };

  return (
    <>
      <Toolbar />
      <canvas
        ref={canvasRef}
        onMouseDown={onStart}
        onMouseUp={onEnd}
        onMouseMove={onDraw}
        onTouchMove={onDraw}
        onTouchStart={onStart}
        onTouchEnd={onEnd}
      />
    </>
  );
};

export default Canvas;
