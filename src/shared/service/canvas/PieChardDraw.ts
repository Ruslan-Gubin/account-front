import { CanvasDraw } from "./CanvasDraw";
import { ISelector, PieChardDrawProps } from "./types";

export class PieChardDraw {
  private radius: number;
  private totalCount: number;
  private drawService: CanvasDraw;
  private selectors: ISelector[];

  constructor({ radius, drawService, selectors, totalCount }: PieChardDrawProps) {
    this.radius = radius;
    this.drawService = drawService;
    this.selectors = selectors;
    this.totalCount = totalCount
  }

  private drawCenter() {
    this.drawService.arc({
      size: { radius: 30, x: this.radius, y: this.radius },
      fill: {color: 'white'},
    });
  }

    private drawCount() {  
    let countX = 75
    if (this.totalCount >= 1000) {
      countX = 70
    }
    if (this.totalCount >= 10000) {
      countX = 63
    }

    this.drawService.text({
      text: String(this.totalCount),
      color: 'black',
      maxWidth: 40,
      x: countX,
      y: 95,
    })
  }

  private drawSelectors() {
    let startAngle = 0;

    for (const selector of this.selectors) {
      const degrees = (selector.ratio / 100) * 360;

      this.drawService.drawSelectors({
        size: {
          radius: selector.radius,
          x: this.radius,
          y: this.radius,
          start: startAngle,
          end: startAngle + degrees,
        },
        fill: { color: selector.color },
        border: { color: 'white', width: 2, join: "bevel" }
      });
      startAngle += degrees;
    }
  }

  public update() {
    this.drawSelectors();
    this.drawCenter();
    this.drawCount();
  }
}
