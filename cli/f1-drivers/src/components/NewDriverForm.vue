<template>
  <form @submit.prevent="onSubmit()">
    <input type="text" v-model="newDriver.firstname" v-validate="'required|min:3|max:30'" name="firstnameInput" />
    <input type="text" v-model="newDriver.lastname" v-validate="'required|min:3|max:30'" name="lastnameInput" />
    <input type="submit" value="Add" :disabled="errors.items.length > 0" />
    <div v-show="errors.has('firstnameInput')">{{ errors.first('firstnameInput') }}</div>
    <div v-show="errors.has('lastnameInput')">{{ errors.first('lastnameInput') }}</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newDriver: {
        firstname: '',
        lastname: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('add-driver', this.newDriver);
      this.clearNewDriver();
    }, 
    clearNewDriver() {
      this.newDriver = {
        firstname: '',
        lastname: ''
      }
    }
  }
}
</script>

<style scoped>
</style>