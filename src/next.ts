import Paper from 'paper';
import { Point, Size } from 'paper/dist/paper-core';

const onFrame = (imageGroup: paper.Group, raster: paper.Raster) => {
    if (!imageGroup) return;

    imageGroup.children.map((child) => {
        const piece = child;
        const hexagon = piece.children[0];
        const color = raster.getAverageColor(hexagon.position);

        if (color) {
            hexagon.fillColor = color;
            const top = piece.children[1];
            top.fillColor = color.clone();
            top.fillColor.brightness *= 1.5;

            const right = piece.children[2];
            right.fillColor = color.clone();
            right.fillColor.brightness *= 0.5;
        }
    });
};

const createPiece = (): paper.Group => {
    const group = new Paper.Group();
    const hexagon = new Paper.Path.RegularPolygon({
        sides: 6,
        radius: 50,
        fillColor: 'gray',
        parent: group,
    });

    for (let i = 0; i < 2; i++) {
        const path = new Paper.Path({
            closed: true,
            parent: group,
            fillColor: i == 0 ? 'white' : 'black',
        });
        for (let j = 0; j < 3; j++) {
            const index = (i * 2 + j) % hexagon.segments.length;
            path.add(hexagon.segments[index].clone());
        }
        path.add(hexagon.bounds.center);
    }
    group.remove();
    return group;
};

const next = (): void => {
    const amount = 30;
    const path = new Paper.Path();

    const piece = createPiece();
    const size = piece.bounds.size;

    const raster = new Paper.Raster('fall');
    raster.visible = false;
    raster.on('load', function () {
        raster.fitBounds(path.view.bounds, true);
        const group = new Paper.Group();
        for (let y = 0; y < amount; y++) {
            for (let x = 0; x < amount; x++) {
                const copy = piece.clone();
                const px = x + (y % 2 ? 0.5 : 0);
                const py = y * 0.75;
                const p = new Point(size.multiply(new Size(px, py)));
                copy.position = copy.position.add(p);
                group.addChild(copy);
            }
        }
        group.fitBounds(path.view.bounds, true);
        group.scale(1.1);
        onFrame(group, raster);
        console.log(path.project.exportSVG({ asString: true }));
    });
};

export default next;
