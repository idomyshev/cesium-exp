<template>
  <v-container>
    <div id="cesiumContainer"></div>
  </v-container>
</template>

<script>
window.CESIUM_BASE_URL = "/";
import * as Cesium from "cesium";
// import "cesium/Build/Cesium/Widgets/widgets.css";
import "./Widgets/widgets.css";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  mounted() {
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MzIyNmJjYy05YTMwLTRlMGEtOWQ2NS0xYTVjNzM4YWE0MGIiLCJpZCI6OTU3MzksImlhdCI6MTY1MzkzMDYxMX0.E_bEljWtXDkndWUsvBkc_QQ_Y5UUlHPwqA8ha8B0Cvo";

    // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
    });
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = viewer.scene.primitives.add(
      Cesium.createOsmBuildings()
    );
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    });

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    // const buildingTileset = viewer.scene.primitives.add(
    //   // Cesium.createOsmBuildings()
    // );
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0.0),
    //     pitch: Cesium.Math.toRadians(-15.0),
    //   },
    // });

    // window.CESIUM_BASE_URL = "https://localhost:8081/";
    // Cesium.Ion.defaultAccessToken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MzIyNmJjYy05YTMwLTRlMGEtOWQ2NS0xYTVjNzM4YWE0MGIiLCJpZCI6OTU3MzksImlhdCI6MTY1MzkzMDYxMX0.E_bEljWtXDkndWUsvBkc_QQ_Y5UUlHPwqA8ha8B0Cvo";
    // const viewer = new Cesium.Viewer("cesiumContainer", {
    //   terrainProvider: new Cesium.CesiumTerrainProvider({
    //     url: Cesium.IonResource.fromAssetId(1),
    //   }),
    // });
    // viewer.imageryLayers.addImageryProvider(
    //   new Cesium.IonImageryProvider({ assetId: 2 })
    // );
  },
};
</script>
