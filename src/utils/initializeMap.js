import Mapcraft from "mapcraft";
console.log(process);

export default () => {
  return new Mapcraft({
    env: {
      mapbox: {
        token: process.env.REACT_APP_MAPBOX_TOKEN,
      },
    },
    styles: {
      // light: "mapbox://styles/mapbox/streets-v11",
      light: "/mapcraft/jsons/styles/light/style.json",
    },
    defaultStyle: "dark",
    map: {
      container: "app-map",
      center: [35, 35],
      zoom: 2,
      hash: false,
    },
    controls: {
      fullscreen: false,
      geolocation: false,
      navigation: true,
    },
    icons: {
      port: "/assets/images/icon-port.png",
      vessel: "/assets/images/icon-vessel.png",
      default: "/assets/images/icon-default.png",
    },
    geoJsons: {
      routes: "/data/routes.json",
      ports: "/data/ports.json",
      vessels: "/data/vessels.json",
    },
  });
};
