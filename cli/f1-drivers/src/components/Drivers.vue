<template>
  <div class="drivers">
    <h2>F1 drivers</h2>
    <ul>
      <li v-for="(driver, index) in drivers" :key="index">
          {{`${driver.firstname} ${driver.lastname}`}}
          <button class="inline-button" type="button" v-on:click="removeDriver(index)">Remove</button>
      </li>
    </ul>

    <form @submit.prevent="onSubmit()">
      <input type="text" v-model="newDriver.firstname" v-validate="'required|min:3|max:30'" name="firstnameInput" />
      <input type="text" v-model="newDriver.lastname" v-validate="'required|min:3|max:30'" name="lastnameInput" />
      <input type="submit" value="Add" :disabled="errors.items.length > 0" />
      <div v-show="errors.has('firstnameInput')">{{ errors.first('firstnameInput') }}</div>
      <div v-show="errors.has('lastnameInput')">{{ errors.first('lastnameInput') }}</div>
    </form>
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
      newDriver: {
        firstname: '',
        lastname: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.clearMessage();
      this.drivers.push(this.newDriver);
      this.newDriver = {
        firstname: '',
        lastname: ''
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
