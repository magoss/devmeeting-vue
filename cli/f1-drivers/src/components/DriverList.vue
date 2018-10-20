<template>
  <div class="driver-list">
    <h2>F1 drivers</h2>
    <ul>
      <DriverListItem v-for="driver in sharedState.drivers" 
        :key="driver.id" 
        :driver="driver"
        @remove-driver="removeDriver" />
    </ul>
      <NewDriverForm @add-driver="addDriver" />
  </div>
</template>

<script>
import DriverListItem from './DriverListItem';
import NewDriverForm from './NewDriverForm';
import store from '../store';

export default {
  components: {
    DriverListItem,
    NewDriverForm
  },
  created() {
    store.fetchDrivers();
  },
  data () {
    return {
      sharedState: store.state 
    }
  },
  methods: {
    addDriver(driver) {
      store.addDriver(driver);
    },
    removeDriver(id) {
      store.removeDriver(id);
    }
  },
  name: 'DriverList'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
