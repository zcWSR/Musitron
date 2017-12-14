export default class Utils {
  static PLAY_ORDER = {
    LIST_LOOP: 0,
    SINGLE_LOOP: 1,
    SHUFFLE: 2
  }

  static getOffsetX(ele) {
    let { offsetLeft } = ele;
    while (ele = ele.offsetParent) {
      offsetLeft += ele.offsetLeft;
    }
    return offsetLeft;
  }
}
