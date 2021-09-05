import React, { useRef, useEffect } from 'react';
import Paper from 'paper';
import draw from './draw';

interface CanvasProps {
    width: number;
    height: number;
}

const Canvas = ({ width, height }: CanvasProps): React.ReactElement => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            if (canvas) {
                Paper.setup(canvas);
                draw();
            }
        }
    }, []);

    return <canvas ref={canvasRef} height={height} width={width} id="canvas" />;
}

Canvas.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight
};

export default Canvas;