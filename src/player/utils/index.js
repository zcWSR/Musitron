export default class Utils {
  static getOffsetX(ele) {
    let { offsetLeft } = ele;
    while (ele = ele.offsetParent) {
      offsetLeft += ele.offsetLeft;
    }
    return offsetLeft;
  }
}
