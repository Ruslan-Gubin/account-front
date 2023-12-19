import { CanvasDrawGraphProps } from './types';

class CanvasDrawGraph {
  readonly baseContext;
  constructor({ baseContext }: CanvasDrawGraphProps) {
    this.baseContext = baseContext;
  }

  drawLine = (
    numberLines: number, // колличество линий
    startX: number,
    startY: number,
    andX: number,
    andY: number,
    lineSpacingHorizontal: number, // интервал линий
    lineSpacingVertical: number, // интервал линий
    color: string,
    lineWidth: number = 1
  ) => {
    this.baseContext.beginPath();
    for (let i = 0; i < numberLines; i++) {
      this.baseContext.moveTo(startX, startY);
      this.baseContext.lineTo(andX, andY);
      if (numberLines > 0) {
        startY -= lineSpacingHorizontal;
        andY -= lineSpacingHorizontal;
        startX += lineSpacingVertical;
        andX += lineSpacingVertical;
      }
    }
    this.baseContext.strokeStyle = color;
    this.baseContext.lineWidth = lineWidth;
    this.baseContext.stroke();
  };

  drawNumberScale = (
    startX: number,
    startY: number,
    numberDigits: number, // колличество цыфр
    numberSpacing: number, // интервал цыфр
    numberSpacingHorizontal: number, // интервал расположения цыфр
    numberSpacingVertical: number, // интервал расположения цыфр
    style: string,
    color: string,
    textAlign: CanvasTextAlign,
    textBaseline: CanvasTextBaseline
  ) => {
    this.baseContext.beginPath();
    let startNumber = 0;
    for (let i = 0; i < numberDigits + 1; i++) {
      this.baseContext.fillText(`${startNumber}`, startX, startY);
      this.baseContext.textAlign = textAlign;
      this.baseContext.textBaseline = textBaseline;
      if (numberDigits > 0) {
        startY -= numberSpacingHorizontal;
        startX += numberSpacingVertical;
        startNumber += numberSpacing;
      }
    }
    this.baseContext.font = style;
    this.baseContext.fillStyle = color;
    this.baseContext.stroke();
  };

  drawRectangleForColumnGraph = (
    startX: number,
    width: number,
    heightY: number,
    arrayRectangle: number[], // массив прямоугольников
    numberSpacingVertical: number, // интервал расположения прямоугольников
    scaleInterval: number, // интервал шкалы,
    scaleIntervalPxY: number, // интервал шкалы в пикселях,
    color: string = 'black'
  ) => {
    this.baseContext.fillStyle = color;

    for (let i = 0; i < arrayRectangle.length; i++) {
      this.baseContext.fillRect(
        startX,
        heightY - (arrayRectangle[i] / scaleInterval) * scaleIntervalPxY,
        width,
        (arrayRectangle[i] / scaleInterval) * scaleIntervalPxY
      );
      if (arrayRectangle.length > 0) {
        startX += numberSpacingVertical;
      }
    }
  };

  drawArrStringY = (
    startX: number,
    startY: number,
    IntervalPx: number, // интервал шкалы x в пикселях,
    arrString: string[],
    font: string,
    color: string
  ) => {
    this.baseContext.beginPath();
    this.baseContext.font = font;
    this.baseContext.fillStyle = color;
    arrString.forEach((str) => {
      this.baseContext.fillText(`${str}`, startX, startY);
      startX += IntervalPx;
    });
  };

  drawLineBazie = (
    data: number[],
    heightY: number,
    color: string,
    startX: number,
    scaleInterval: number, // шаг шкалы
    scaleIntervalPxY: number, // шаг шкалы у в пикселях
    scaleIntervalPxX: number, // шаг шкалы x в пикселях
    lineWidth: number
  ) => {
    this.baseContext.beginPath();

    for (let i = 0; i < data.length; i++) {
      const startY = heightY - (data[i] / scaleInterval) * scaleIntervalPxY;
      const andY = heightY - (data[i + 1] / scaleInterval) * scaleIntervalPxY;
      this.baseContext.moveTo(startX, startY);

      this.baseContext.bezierCurveTo(
        startX + 30,
        startY,
        startX + 40,
        andY,
        startX + scaleIntervalPxX,
        andY
      );

      startX += scaleIntervalPxX;
    }
    this.baseContext.strokeStyle = color;
    this.baseContext.lineWidth = lineWidth;
    this.baseContext.stroke();
  };

  drawPoint = (
    data: number[],
    heightY: number,
    color: string,
    startX: number,
    scaleInterval: number, // шаг шкалы
    scaleIntervalPxY: number, // шаг шкалы у в пикселях
    radius: number,
    scaleIntervalPxX: number // шаг шкалы x в пикселях
  ) => {
    this.baseContext.beginPath();

    for (let i = 0; i < data.length; i++) {
      const y = heightY - (data[i] / scaleInterval) * scaleIntervalPxY;
      this.baseContext.arc(startX, y, radius, 0, Math.PI * 2, true);
      this.baseContext.fill();
      this.baseContext.fillStyle = color;
      startX += scaleIntervalPxX;
      this.baseContext.moveTo(
        startX,
        heightY - (data[i + 1] / scaleInterval) * scaleIntervalPxY
      );
    }

    this.baseContext.stroke();
  };
}

export { CanvasDrawGraph };
