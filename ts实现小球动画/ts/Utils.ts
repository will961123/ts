import { IObj } from "./InterfaceAnimation";

export default class Utils {
  public static ce(type: string, style: IObj): Element {
    let elem = document.createElement(type);
    Utils.setStyle(elem,style)
    return elem;
  }
  public static setStyle(elem: IObj, style: IObj): void {
    for (let styleName in style) {
      elem.style[styleName] = style[styleName];
    }
  }
}
