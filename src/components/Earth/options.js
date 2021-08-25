const change = {
  ambientLightColor: "red",
  cameraRotateSpeed: 0.5,
  focusAnimationDuration: 2000,
  focusEasingFunction: ["Linear", "None"],
  pointLightColor: "gold",
  pointLightIntensity: 1.5,
  globeGlowColor: "blue",
  markerTooltipRenderer: marker => `${marker.city} (${marker.value})`
};

export default change;
