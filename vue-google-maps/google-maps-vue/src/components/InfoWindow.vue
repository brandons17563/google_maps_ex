<template>
  <div>
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "InfoWIndow",
    props: {
      lat: {
        type: Number
      },
      lng: {
        type: Number
      },
      msg: {
        type: String
      }
    },
    data: () => ({
      infoW: null
    }),
    mounted() {
      this.$parent.getMap( map => {
        this.infoW = new window.google.maps.InfoWindow({
          position: {lat: this.lat, lng: this.lng},
          content: this.$el,
        });
        this.infoW.open(map)
      })

    }
  }
</script>
