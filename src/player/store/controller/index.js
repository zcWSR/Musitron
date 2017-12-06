import { observable, computed, action } from 'mobx';


export default class ControllerStore {
  @observable playing = false;
  @observable loading = false;
  @observable loadingProcess = 0;
  @observable playingProcess = 0;
  @observable totalTime = 56;
  @observable isBtnPress = false;
  @observable btnStartX = 0;
  @observable barWidth = 0;
  btnXWas = 0;

  @computed
  get timeString() {
    const timeSpend = this.totalTime * this.playingProcess;
    let times = [
      Math.floor(timeSpend / 60),
      Math.floor(timeSpend % 60),
      Math.floor(this.totalTime / 60),
      Math.floor(this.totalTime % 60),
    ];
    times = times.map(item => {
      return item < 10 ? `0${item}` : `${item}`;
    });
    return `${times[0]}:${times[1]}/${times[2]}:${times[3]}`;
  }

  @computed
  get btnToLeftPx() {
    return `${this.playingProcess * (this.barWidth - 14)}px`;
  }
}
