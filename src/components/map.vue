<template>
     <div>
    <l-map style="height:100vh; width:100%;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <v-locatecontrol/>
      <v-geosearch :options="geosearchOptions" ></v-geosearch>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
    <input type="text">
   </div>
  </template>
  
  <script>
  import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
  import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'
  import { OpenStreetMapProvider } from 'leaflet-geosearch';
  import VGeosearch from 'vue2-leaflet-geosearch';

  // Vue.component('v-map', Vue2Leaflet.Map);
//Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      'v-locatecontrol': Vue2LeafletLocatecontrol,
      VGeosearch
    },
    data () {
      return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 15,
        center: [51.505, -0.159],
        markerLatLng: [51.504, -0.159],
        geosearchOptions: { // Important part Here
        provider: new OpenStreetMapProvider(),
        },
      };
    }
  }
  </script>
  