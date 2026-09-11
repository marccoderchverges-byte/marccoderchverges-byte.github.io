// Shared product data for the Shop / product pages.
// This is the real product stock (photographed 2026-09): each entry's
// first image is the cover/"star" shot, the rest are the gallery, and
// "video" is the clip shown on hover in the Shop and included in the
// product-page gallery. Coordinates are the find-spots; serial, weight,
// size, hardness and price are studio-assigned values for this staging
// build. Pantone references are an approximate, hand-matched read of the
// dominant tones in each photo — a stylistic reference, not a certified
// color match.

var STONES = [
  {
    id: "01",
    img: "fotos/01/01.jpg",
    imgs: ["fotos/01/01.jpg", "fotos/01/02.jpg", "fotos/01/03.jpg"],
    video: "fotos/01/video.mp4",
    coords: "41.5051°N 2.3921°E",
    serial: "APH-01102",
    pantones: [
      { name: "Chamois Leather", code: "16-1235 TPX", hex: "#C9A15D" },
      { name: "Jet Black", code: "19-0303 TPX", hex: "#2B2622" }
    ],
    weight: "450 g",
    size: "8.5 × 7.2 × 5.5 cm",
    hardness: "6.5 (Mohs)",
    type: "Gneiss",
    price: "€250"
  },
  {
    id: "02",
    img: "fotos/02/01.jpg",
    imgs: ["fotos/02/01.jpg", "fotos/02/02.jpg", "fotos/02/03.jpg"],
    video: "fotos/02/video.mp4",
    coords: "63.4188°N 19.0060°W",
    serial: "APH-01118",
    pantones: [
      { name: "Jet Black", code: "19-0303 TPX", hex: "#201F1E" },
      { name: "Gray Morn", code: "14-4501 TPX", hex: "#B8B4AC" }
    ],
    weight: "510 g",
    size: "8.0 × 7.5 × 6.0 cm",
    hardness: "6 (Mohs)",
    type: "Gabbro",
    price: "€250"
  },
  {
    id: "03",
    img: "fotos/03/01.jpg",
    imgs: ["fotos/03/01.jpg", "fotos/03/02.jpg", "fotos/03/03.jpg", "fotos/03/04.jpg"],
    video: "fotos/03/video.mp4",
    coords: "41.5051°N 2.3921°E",
    serial: "APH-01133",
    pantones: [
      { name: "Winter Wheat", code: "13-0916 TPX", hex: "#E3D2A8" },
      { name: "Nutria", code: "17-1230 TPX", hex: "#B8945F" }
    ],
    weight: "280 g",
    size: "8.8 × 6.5 × 4.0 cm",
    hardness: "3.5 (Mohs)",
    type: "Limestone",
    price: "€250"
  },
  {
    id: "04",
    img: "fotos/04/01.jpg",
    imgs: ["fotos/04/01.jpg", "fotos/04/02.jpg", "fotos/04/03.jpg", "fotos/04/04.jpg"],
    video: "fotos/04/video.mp4",
    coords: "41.5051°N 2.3921°E",
    serial: "APH-01149",
    pantones: [
      { name: "Rose Dust", code: "16-1511 TPX", hex: "#D9A98C" },
      { name: "Jet Black", code: "19-0303 TPX", hex: "#2B2422" }
    ],
    weight: "390 g",
    size: "7.5 × 5.5 × 4.2 cm",
    hardness: "6.5 (Mohs)",
    type: "Granite",
    price: "€250"
  },
  {
    id: "05",
    img: "fotos/05/01.jpg",
    imgs: ["fotos/05/01.jpg", "fotos/05/02.jpg", "fotos/05/03.jpg", "fotos/05/04.jpg"],
    video: "fotos/05/video.mp4",
    coords: "43.2630°N 2.9350°W",
    serial: "APH-01162",
    pantones: [
      { name: "Olive Branch", code: "18-0625 TPX", hex: "#7D7A5C" },
      { name: "Kalamata", code: "19-0511 TPX", hex: "#514F3C" }
    ],
    weight: "310 g",
    size: "7.0 × 5.0 × 4.0 cm",
    hardness: "5 (Mohs)",
    type: "Schist",
    price: "€250"
  },
  {
    id: "06",
    img: "fotos/06/01.jpg",
    imgs: ["fotos/06/01.jpg", "fotos/06/02.jpg", "fotos/06/03.jpg"],
    video: "fotos/06/video.mp4",
    coords: "41.3760°N 1.1622°E",
    serial: "APH-01177",
    pantones: [
      { name: "Simply Taupe", code: "16-1105 TPX", hex: "#A89A88" },
      { name: "Gray Morn", code: "14-4501 TPX", hex: "#C7BBA8" }
    ],
    weight: "260 g",
    size: "7.5 × 6.5 × 5.0 cm",
    hardness: "7 (Mohs)",
    type: "Quartz vein rock",
    price: "€250"
  },
  {
    id: "07",
    img: "fotos/07/01.jpg",
    imgs: ["fotos/07/01.jpg", "fotos/07/02.jpg", "fotos/07/03.jpg", "fotos/07/04.jpg"],
    video: "fotos/07/video.mp4",
    coords: "41.8467°N 3.1467°E",
    serial: "APH-01188",
    pantones: [
      { name: "Dusk Lilac", code: "16-1610 TPX", hex: "#C9A9AA" },
      { name: "Reed Yellow", code: "14-0725 TPX", hex: "#C4BE87" }
    ],
    weight: "240 g",
    size: "6.5 × 5.0 × 4.0 cm",
    hardness: "3.5 (Mohs)",
    type: "Dolomite",
    price: "€250"
  },
  {
    id: "08",
    img: "fotos/08/01.jpg",
    imgs: ["fotos/08/01.jpg", "fotos/08/02.jpg", "fotos/08/03.jpg"],
    video: "fotos/08/video.mp4",
    coords: "27.6333°S 61.7000°W",
    serial: "APH-01203",
    pantones: [
      { name: "Silver Fox", code: "16-4204 TPX", hex: "#9FA3A5" },
      { name: "Gunmetal", code: "18-0306 TPX", hex: "#5B6063" }
    ],
    weight: "340 g",
    size: "4.5 × 3.8 × 2.5 cm",
    hardness: "5 (Mohs)",
    type: "Meteorite",
    price: "€300"
  }
];
