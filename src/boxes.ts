import Paper from 'paper';
import { Color } from 'paper/dist/paper-core';

const boxes = (): void => {
    const nr = 8;
    Paper.project.activate();

    const color1 = Color.random();
    const color2 = Color.random();

    const colorDist = color2.subtract(color1).divide(2 * nr - 1);

    const colorGradient = [];
    for (let c = 0; c < 2 * nr - 1; c++) {
        colorGradient.push(color1.add(colorDist.multiply(c)));
    }

    const group = new Paper.Group();

    for (let x = 0; x < nr; x++) {
        for (let y = 0; y < nr; y++) {
            for (let i = 0; i < 3; i++) {
                const rect = new Paper.Path.Rectangle(new Paper.Rectangle(x * 100, y * 100, 80, 80));
                rect.strokeWidth = 3;
                rect.strokeColor = new Color('hsla(0,0,0,1)');
                rect.scale((x + 1 + i) / nr);
                rect.rotate(y * (Math.random() * nr + 3));
                if (i == 0) rect.fillColor = colorGradient[y + x];
                group.addChild(rect);
            }
        }
    }

    group.position = Paper.view.center;
};

export default boxes;
