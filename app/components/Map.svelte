<script lang="ts">
  import { onMount } from "svelte";
  import { MapView } from "@nativescript/google-maps";

  let mapViewElement: any;

  onMount(() => {
    const mapView = new MapView();
    mapView.lat = 52.520008;
    mapView.lng = 13.404954;
    mapView.zoom = 12;
    mapView.bearing = 0;
    mapView.tilt = 0;

    mapViewElement.appendChild(mapView);
  });

  let lat = 52.520008;
  let lng = 13.404954;
  let zoom = 12;
  let bearing = 0;
  let tilt = 0;

  $: console.log(mapViewElement);
</script>

<page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:map="@nativescript/google-maps"
  bind:this={mapViewElement}
>
  <actionBar title="Map" />
  <!-- <stackLayout bind:this={mapViewElement}></stackLayout> -->
</page>
