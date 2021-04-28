<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "InfoWindow",
    props: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number
        required: true
      }
    },
  }
</script>
