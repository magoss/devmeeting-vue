<template>
  <div class="driver-list">
    <h2>F1 drivers</h2>
    <ul>
      <DriverListItem v-for="driver in drivers" 
        :key="driver.id" 
        :driver="driver"
        @remove-driver="removeDriver" />
    </ul>
      <NewDriverForm @add-driver="onAddDriver" />
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
  computed: {
    drivers() {
      return this.$store.state.drivers;
    }
  },
  created () {
    this.$store.dispatch('fetchDrivers');
  },
  methods: {
    onAddDriver(driver) {
      this.$store.dispatch('addDriver', driver);
    },
    removeDriver(id) {
      this.$store.dispatch('removeDriver', id);
    }
  },
  name: 'DriverList'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
