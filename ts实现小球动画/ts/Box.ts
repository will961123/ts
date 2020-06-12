import { IUpdate } from "./InterfaceAnimation";
import Utils from "./Utils";
import TimeManager from "./TimeManager";

export default class Box implements IUpdate {
  private elem?: HTMLDivElement;
  private speedX: number = 2;
  private speedY: number = 2;
  private _left: number = 0;
  private _top: number = 0;
  private isRUn: boolean = false;
  constructor() {
    this.elem = this.createElement();
    this.elem.addEventListener("click", (e: MouseEvent): void =>
      this.handlerClick(e)
    );
  }
  private createElement(): HTMLDivElement {
    return Utils.ce("div", {
      width: "50px",
      height: "50px",
      "background-color": "red",
      "border-radius": "25px",
      position: "absolute",
      left: 0,
      top: 0
    }) as HTMLDivElement;
  }
  private handlerClick(e: MouseEvent): void {
    this.isRUn = !this.isRUn;
    if (this.isRUn) {
      TimeManager.getInstance().add(this);
    } else {
      TimeManager.getInstance().remove(this);
    }
  }
  // 继承 IUpdate 中的 update 方法
  public update(): void {
    if (!this.elem) {
      return;
    }
    this.speedY += 0.2;
    if (this.top > 300) {
      if (this.speedY < 0) {
        TimeManager.getInstance().remove(this);
      }
      this.speedY = -this.speedY + 1;
    } 
    this.top += this.speedY;
    // this.left += this.speed;
    // this.elem.style.left = this.left + "px";
  }
  public setPosition(left: number, top: number): void {
    this.left = left;
    this.top = top;
  }
  set left(val: number) {
    this._left = val;
    if (this.elem) {
      this.elem.style.left = val + "px";
    }
  }
  get left(): number {
    return this._left;
  }
  set top(val: number) {
    this._top = val;
    if (this.elem) {
      this.elem.style.top = val + "px";
    }
  }
  get top(): number {
    return this._top;
  }
  public appendTo(parent: string | Element): void {
    if (typeof parent === "string") {
      parent = document.querySelector(parent) as Element;
    }
    if (parent) {
      parent.appendChild(this.elem as Element);
    }
  }
}
