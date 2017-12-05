import { observable, computed, action } from 'mobx';


class ProcessorStore {
  @observable playProcess = 0;
  @observable loading = false;
  @observable loadingProcess = 0;
  @observable btnPress = false;
  @observable startX = 0;
  beforeProcessChange = 0;
}

export default class ControllerStore {
  constructor() {
    this.processor = new ProcessorStore();
  }
}
