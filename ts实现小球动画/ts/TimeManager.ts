import { IUpdate } from "./InterfaceAnimation";
export default class TimeManager {
  // 私有 静态 实例
  private static _instance?: TimeManager;
  private elemList: Array<IUpdate> = [];
  private timer: number = 0;
  private targetTime: number = 0;
  private startTime: number = 0;
  constructor() {}
  // 公共 静态方法 返回单例
  public static getInstance(): TimeManager {
    if (!TimeManager._instance) {
      TimeManager._instance = new TimeManager();
    }
    return TimeManager._instance;
  }

  public add(ele: IUpdate): boolean {
    if (this.elemList.indexOf(ele) > -1) {
      return false;
    } else {
      this.elemList.push(ele);
      if (this.elemList.length > 0 && this.timer === 0) {
        this.timer = setInterval((): void => this.animation(), 16);
      }
      return true;
    }
  }

  public remove(ele: IUpdate): boolean {
    if (this.elemList.indexOf(ele) > -1) {
      this.elemList.splice(this.elemList.indexOf(ele), 1);
      if (this.elemList.length === 0) {
        clearInterval(this.timer);
        this.timer = 0;
      }
      return true;
    } else {
      return false;
    }
  }

  public setTimeAnimation(elemList: Array<IUpdate>, time: number): void {
    this.elemList.length = 0;
    this.timer = 0;
    this.targetTime = time;
    this.startTime = new Date().getTime();
    for (let i = 0; i < elemList.length; i++) {
      this.add(elemList[i]);
    }
  }

  public removeAll(): void {
    this.elemList.forEach((elem: IUpdate): void => {
      this.remove(elem);
    });
  }

  public animation(): void {
    // if (new Date().getTime() - this.startTime >= this.targetTime) {
    //   this.removeAll();
    //   return;
    // }
    for (let i = 0; i < this.elemList.length; i++) {
      this.elemList[i].update();
    }
  }
}
