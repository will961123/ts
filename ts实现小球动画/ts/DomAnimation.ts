import Box from "./Box";
import { IUpdate } from "./InterfaceAnimation";
import TimeManager from "./TimeManager";

let boxList: Array<IUpdate> = [];
for (var i = 0; i < 5; i++) {
  let box = new Box();
  box.setPosition(i*100,0)
  box.appendTo("body");
  boxList.push(box);
//   TimeManager.getInstance().add(box)
}
// TimeManager.getInstance().setTimeAnimation(boxList,1500)
