import React, { useRef, useEffect } from 'react';
import Paper from 'paper';
import fall from './images/fall.jpg';
import next from './next';

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
                next();
            }
        }
    }, []);

    return (
        <>
            <canvas ref={canvasRef} data-testid="paper-canvas" height={height} width={width} id="canvas" />
            <img src={fall} id="fall" style={{ visibility: 'hidden' }} />
        </>
    );
};

Canvas.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export default Canvas;
