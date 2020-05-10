# Index

- [Intro](#intro)
- [Demo](#demo)
- [Data](#data)
- [Screenshots](#screenshots)

## Intro

Maritime Map has been developed using React, Redux, [Mapcraft](https://github.com/iding-ir/mapcraft) (a mini sdk that I built around Mapbox GL JS) and Bootstrap.

It receives and combines together data from 3 standard GeoJSON files for **routes**, **vessels** and **cargos**, and allows users track down cargos and vessels on the map.

For legacy jQuery version please visit [Here](https://github.com/iding-ir/g2-ocean).

## Demo

[Live Demo](http://react-redux-maritime-map.iding.ir)

## Data

This app loads three mock [GeoJSON](https://geojson.org) files locally:

### routes.json (shortened):

```
{
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "id": "r-1",
        "name": "ECSA to North Europe"
      },
      "geometry": {
        "type": "MultiLineString",
        "coordinates": [
          [
            [
              8.50067138671875,
              53.605544099238
            ],
            [
              8.368835449218748,
              53.66905301677406
            ],
            [
              8.17108154296875,
              53.743838123480074
            ],
            .
            .
            .
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "r-2",
        "name": "St. Lawrence to Europe"
      },
      "geometry": {
        "type": "MultiLineString",
        "coordinates": [
          [
            [-70.9552001953125,
              48.44742209577055
            ],
            [-70.7794189453125,
              48.42191010942875
            ],
            [-70.7025146484375,
              48.37084770238366
            ],
            .
            .
            .
          ]
        ]
      }
    },
    .
    .
    .
  ]
}
```

### ports.json (shortened):

```
{
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "id": "p-1",
        "type": "port",
        "routes": ["r-1"],
        "name": "Bremerhaven"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.50341796875,
          53.605544099238
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "p-2",
        "type": "port",
        "routes": ["r-1"],
        "name": "Emden"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.196044921875,
          53.34727222643009
        ]
      }
    },
    .
    .
    .
  ]
}
```

### vessels.json (shortened):

```
{
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "id": "v-1",
        "type": "vessel",
        "routes": [
          "r-1"
        ],
        "name": "Anatolian Spring",
        "cargos": [{
            "owner": "kb-061",
            "id": "oei-9102"
          },
          {
            "owner": "mp-376",
            "id": "hvy-3377"
          },
          .
          .
          .
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.119140625,
          53.69670647530323
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "v-2",
        "type": "vessel",
        "routes": [
          "r-1"
        ],
        "name": "Punic Princess",
        "cargos": [{
            "owner": "gr-765",
            "id": "kmo-1171"
          },
          {
            "owner": "ey-291",
            "id": "qij-3638"
          },
          .
          .
          .
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.390655517578125,
          51.644441875696955
        ]
      }
    }
    .
    .
    .
  ]
}
```

## Screenshots

### First view:

![First view](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015319.png)

### Searching for cargo by cargo-id:

![Searching for cargo by cargo-id](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015333.png)

### Finding the vessel:

![Finding the vessel](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015352.png)

### Vessel information:

![Vessel information](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015359.png)

### Searching for cargo in a vessel by its owner-id:

![Searching for cargo in a vessel by its owner-id](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015408.png)

### Finding cargo by owner-id:

![Finding cargo by owner-id](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015418.png)

### Selecting a trade route:

![Selecting a trade route](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015437.png)

### Fitting bounds to a route:

![Fitting bounds to a route](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015453.png)

### Viewing route info:

![Viewing route info](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015538.png)

### Viewing port info:

![Viewing port info](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015542.png)

### Show/hide layers on map:

![Show/hide layers on map](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015554.png)

### Dark mode:

![Dark mode](http://g2ocean.iding.ir/screenshots/screen-shot-2019-11-12-at-015601.png)
