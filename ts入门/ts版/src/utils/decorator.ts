/**
 * 抽离装饰器
 */

// target:被装饰对象(类)
// target的类型由调用者决定 定义泛型
export const Scroll = <C>() => (target): C => {
  // class本质还是构造函数加 prototype
  if (target.prototype.onReachBottom) {
    target.prototype.beforeCreate = function() {
      let lastY = 0;
      // 滚动事件
      window.addEventListener(
        "scroll",
        throttle(() => {
          const ComputedHeight = () => {
            return (
              document.body.clientHeight -
              window.scrollY -
              window.screen.availHeight
            );
          };
          if (ComputedHeight() < 50 && window.screen.availHeight >= lastY) {
            lastY = window.screen.availHeight
            target.prototype.onReachBottom();
          }
        }, 200)
      );
    };
  }

  return target;
};

const throttle = (func, delay) => {
  var prev = Date.now();
  return function() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
};

const ItemActions = {
  close() {
    console.log("关闭");
  },
  skip() {
    console.log("跳转");
  }
};
export const ItemFy = target => {
  Object.assign(target.prototype, ItemActions);
  return target;
};
