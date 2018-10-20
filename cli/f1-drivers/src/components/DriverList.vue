<template>
  <div class="driver-list">
    <h2>F1 drivers</h2>
    <ul>
      <DriverListItem v-for="(driver, index) in drivers" 
        :key="index" 
        :driver="driver"
        :index="index" 
        @remove-driver="removeDriver" />
    </ul>
      <NewDriverForm @add-driver="addDriver" />
  </div>
</template>

<script>
import DriverListItem from './DriverListItem';
import NewDriverForm from './NewDriverForm';

export default {
  components: {
    DriverListItem,
    NewDriverForm
  },
  data () {
    return {
      drivers: [
        {
          firstname: "Max",
          lastname: "Verstappen"
        }
      ]
    }
  },
  methods: {
    addDriver(driver) {
      this.drivers.push(driver);
    },
    removeDriver(index) {
      this.drivers.splice(index, 1);
    }
  },
  name: 'DriverList'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
