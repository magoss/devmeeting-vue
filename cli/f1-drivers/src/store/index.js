import axios from 'axios';

const store = {
  state: {
    drivers: []
  }, 
  async fetchDrivers() {
    this.state.drivers = await axios.get('drivers.json').then(res => res.data.drivers);
  },
  addDriver(driver) {
    this.state.drivers.push(driver);
  }, 
  removeDriver(id) {
    this.state.drivers = this.state.drivers.filter(driver => driver.id !== id);
  }
}

export default store;
