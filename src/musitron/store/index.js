import ControllerStore from './controller';

class PlayerStore {
  constructor() {
    this.controller = new ControllerStore();
  }
}

export default new PlayerStore();
