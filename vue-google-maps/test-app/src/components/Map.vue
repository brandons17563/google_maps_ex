<template>
  <div>
    <div class="google-map" ref="map">
      <MapMarker v-for="(data,i) in mapData" :key="data.id + i" :lat="data.lat" :lng="data.lng"></MapMarker>
      <InfoWindow v-for="(data, i) in mapData" :key="data.id + i + data.lat + data.lng" :lat="data.lat" :lng="data.lng">
        <InfoWindowContent :message="data.message"/>
      </InfoWindow>
    </div>
  </div>
</template>

<script>
    /*eslint-disable no-undef */

    import MapMarker from './Marker'
    import InfoWindow from './InfoWindow'
    import InfoWindowContent from './InfoWindowContent'

    export default {
      name: 'Map',
      props: {
        mapConfig: Object,
      },
      components: {
        MapMarker,
        InfoWindow,
        InfoWindowContent
      },
      data() {
        return {
          mapData: [
            {
              id: 1,
              lat: 50,
              lng: 50,
              message: "Hello World"
            },
            {
              id: 2,
              lat: 75,
              lng: 75,
              message: "New Data"
            },

        ],
          map: null,
          ui: [
          {
            create: this.mapUI.addTitle,
            position: google.maps.ControlPosition.TOP_CENTER,
            events: []
          },
          {
            create: this.mapUI.addZoomOut,
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            events: [
              {
                type: 'click',
                callback: ()=> {
                  this.map.setZoom(this.map.getZoom() - 1)
                }
              }
            ]
          },
          {
            create: this.mapUI.addZoomIn,
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            events: [
              {
                type: 'click',
                callback: ()=> {
                  this.map.setZoom(this.map.getZoom() + 1)
                }
              }
            ]
          },
          {
            create: this.mapUI.addSidebarToggle,
            position: google.maps.ControlPosition.TOP_LEFT,
            events: [{
              type: 'click',
              callback: this.clearUI
            }]
          },
          {
            create: this.mapUI.addPinControl,
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
            events: []
          }]
        }
      },
      mounted() {
        if(!this.map){
          this.map = new window.google.maps.Map(this.$refs["map"], {
          center: {lat: 44.9727, lng: -93.23540000000003},
          zoom: 3,
          gestureHandling: 'greedy',
          minZoom: 2,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          clickableIcons: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          backgroundColor: '#3B5284'
        })
          console.log("Initialized map")
        } else {
          console.log('preventing load ')
        }

        this.addUI()
      },
      methods: {
        getMap(callback) {
          let vm = this;
          function checkForMap() {
            if(vm.map) callback(vm.map)
            else setTimeout(checkForMap, 200)
          }
          checkForMap()
        },
        addUI() {
          this.ui.forEach((el) => {
          const div = document.createElement('div');
          el.create(div, this.map);
          if(el.events){
            el.events.forEach((e) => {
              div.addEventListener(e.type, () => {
                e.callback()
              });
            })
          }
          this.map.controls[el.position].push(div);
        });
      },
      clearUI() {
        this.ui.forEach((el) => {
          this.map.controls[el.position].clear()
        });
      }
      }

    }
</script>

<style media="screen">
.google-map {
  height: 500px;
  width:500px;;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 100px;
}
</style>
