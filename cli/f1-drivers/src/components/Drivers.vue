<template>
  <div class="drivers">
    <h2>F1 drivers</h2>
    <ul>
      <li v-for="(driver, index) in drivers" :key="index">
          {{`${driver.firstname} ${driver.lastname}`}}
          <button class="inline-button" type="button" v-on:click="removeDriver(index)">Remove</button>
      </li>
    </ul>

    <!-- button added -->
    <input type="text" v-model="newDriverFirstname" />
    <input type="text" v-model="newDriverLastname" />
    <input type="button" value="Add" v-on:click="addDriver" />
    <div v-if="unableToAdd">
        Fill both first name and last name input.
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drivers: [
        {
          firstname: "Max",
          lastname: "Verstappen"
        }
      ],
      newDriverFirstname: '',
      newDriverLastname: '',
      unableToAdd: false
    }
  },
  methods: {
    addDriver() {
      this.clearMessage();

      if (!!this.newDriverFirstname && !!this.newDriverLastname) {
          this.drivers.push({
              firstname: this.newDriverFirstname,
              lastname: this.newDriverLastname
          });
          this.newDriverFirstname = '';
          this.newDriverLastname = '';
      } else {
          this.unableToAdd = true;
      }
    },
    removeDriver(index) {
        this.drivers.splice(index, 1)
    },
    clearMessage() {
        this.unableToAdd = false;
    }
  },
  name: 'Drivers'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
