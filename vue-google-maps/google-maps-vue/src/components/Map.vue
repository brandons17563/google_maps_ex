<template>
  <div>
    <div class="google-map" ref="map">

    </div>

  </div>
</template>

<script>
  export default {
    name: "Map",
    props: {
      data: {
        type: Array,
        required: true
      }
    }
  }
</script>
