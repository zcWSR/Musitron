import { observable, computed, action } from 'mobx';
import Utils from '../../utils';


export default class ControllerStore {
  @observable playing = false;
  @observable loading = false;
  @observable loadingProcess = 0;
  @observable playingProcess = 0;
  @observable totalTime = 56;
  @observable isProcessorBtnPress = false;
  @observable processorBtnStartX = 0;
  @observable processorBarWidth = 0;
  processorBtnXWas = 0;

  @computed
  get timeString() {
    const timeSpend = this.totalTime * this.playingProcess;
    let times = [
      Math.floor(timeSpend / 60),
      Math.floor(timeSpend % 60),
      Math.floor(this.totalTime / 60),
      Math.floor(this.totalTime % 60)
    ];
    times = times.map(item => `${item < 10 ? '0' : ''}${item}`);
    return `${times[0]}:${times[1]}/${times[2]}:${times[3]}`;
  }

  @computed
  get processorBtnToLeftPx() {
    return this.playingProcess * (this.processorBarWidth - 14);
  }


  // volume
  @observable volume = 1;
  @observable isVolumeBtnPress = false;
  @observable volumeBtnStartX = 0;
  @observable volumeBtnWidth = 0;
  volumeBtnXWas = 0;

  @computed
  get volumeBtnToLeftPx() {
    return this.volume * (100 - 10);
  }


  @observable playOrder = Utils.PLAY_ORDER.LIST_LOOP;

  @action.bound
  togglePlayOrder() {
    this.playOrder = (this.playOrder + 1) % 3;
  }

  @observable playList = {
    list: [],
    history: []
  }
}
