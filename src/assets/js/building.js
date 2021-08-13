import * as Cesium from "cesium";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZjFiMWMzMy01YWQ4LTQzMzEtOThmMC1jNDkwMmY1YTg0YTEiLCJpZCI6NjM4MTcsImlhdCI6MTYyODU2MjI5MX0.T1p55HmkVlmyrREXW-klGywV9t6txA-etyAzjhLRS8w";
function createBuilding(cesiumContainer) {
  let viewer = new Cesium.Viewer(cesiumContainer, {
    terrainProvider: Cesium.createWorldTerrain(),
  });
  let buildingsTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-104.9965, 39.74248, 4000),
  });
}
