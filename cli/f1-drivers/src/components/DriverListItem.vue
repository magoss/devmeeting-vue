<template>
  <li>
    {{`${driver.firstname} ${driver.lastname}`}}
    <button type="button" v-on:click="removeDriver()">Remove</button>
  </li>
</template>

<script>
  export default {
    methods: {
      removeDriver() {
        this.$emit('remove-driver', this.driver.id );
      }
    },
    name: 'DriverListItem',
    props: {
      driver: {
        type: Object
      },
      index: {
        type: Number
      }
    }
  }
</script>

<style scoped>

</style>