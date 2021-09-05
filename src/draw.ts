import Paper from "paper";
import { Color } from "paper/dist/paper-core";

const draw = () : void => {
  const path = new Paper.Path();

  Paper.view.onMouseDown = () => {
    path.strokeColor = new Color('hsla(282, 80%, 63%, 1)');
    path.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (mouseEvent: paper.MouseEvent) => {
    path.add(mouseEvent.point);
  };
};

export default draw;