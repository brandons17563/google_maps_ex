<template>
  <div>
    <div class="google-map" ref="map">
      <InfoWindow v-for="d in data" :key="d.id" :lat="d.lat" :lng="d.lng" :msg="d.message">
        {{d.message}}
      </InfoWindow>
    </div>
  </div>
</template>

<script>

import UI from '@/mapUI.js'

import InfoWindow from './InfoWindow'
  export default {
    name: "Map",
    components: {
      InfoWindow
    },
    data() {
      return {
        map:null,
        ui: [
          {
            create: UI.addTitle,
            position: window.google.maps.ControlPosition.TOP_CENTER,
            events: []
          },
          {
            create: UI.addZoomOut,
            position: window.google.maps.ControlPosition.LEFT_BOTTOM,
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
            create: UI.addZoomIn,
            position: window.google.maps.ControlPosition.LEFT_BOTTOM,
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
            create: UI.addSidebarToggle,
            position: window.google.maps.ControlPosition.TOP_LEFT,
            events: [{
              type: 'click',
              callback: this.clearUI
            }]
          },
          {
            create: UI.addPinControl,
            position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
            events: []
          }]
      }
    },
    props: {
      data: {
        type: Array,
        required: true
      },
    },
    mounted() {
      if(!this.map){
        this.map = new window.google.maps.Map(this.$refs["map"],
          {
          center: {lat: 44.9727, lng: -93.23540000000003},
          zoom: 3,
          gestureHandling: 'greedy',
          minZoom: 2,
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          clickableIcons: false,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          backgroundColor: '#3B5284'
        }
        )
      }
      this.addUI()
    },
    methods: {
      getMap(callback) {
        let self = this;
        function checkForMap() {
          if(self.map) callback(self.map)
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
    width: 500px;
    height: 500px;
  }
</style>
