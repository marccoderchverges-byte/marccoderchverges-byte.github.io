// Shared product data for the Shop / product pages.
// Coordinates are the real find-spots; serial, weight, size, hardness,
// stone type and price are placeholder values for this staging build.
// Pantone references are an approximate, hand-matched read of the
// dominant tones in each photo — a stylistic reference, not a
// certified color match.

var STONES = [
  {
    id: "01",
    img: "fotos/pedra-01.jpg",
    coords: "41.4036°N 2.1744°E",
    serial: "APH-00714",
    pantones: [
      { name: "Charcoal Gray", code: "18-0201 TPX", hex: "#55504B" },
      { name: "Nutria", code: "17-1230 TPX", hex: "#8B6C49" }
    ],
    weight: "420 g",
    size: "9.4 × 7.1 × 5.2 cm",
    hardness: "6.5 (Mohs)",
    type: "Granite",
    price: "€320"
  },
  {
    id: "02",
    img: "fotos/pedra-02.jpg",
    coords: "41.3874°N 2.1686°E",
    serial: "APH-00235",
    pantones: [
      { name: "Charcoal Gray", code: "18-0201 TPX", hex: "#55504B" },
      { name: "Nutria", code: "17-1230 TPX", hex: "#8B6C49" }
    ],
    weight: "310 g",
    size: "8.6 × 6.4 × 4.5 cm",
    hardness: "5 (Mohs)",
    type: "Schist",
    price: "€260"
  },
  {
    id: "03",
    img: "fotos/pedra-03.jpg",
    coords: "41.9794°N 2.8214°E",
    serial: "APH-00891",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Gray Morn", code: "14-4102 TPX", hex: "#BEBCB5" }
    ],
    weight: "505 g",
    size: "10.2 × 7.8 × 5.6 cm",
    hardness: "6.5 (Mohs)",
    type: "Gneiss",
    price: "€380"
  },
  {
    id: "04",
    img: "fotos/pedra-04.jpg",
    coords: "42.1408°N 1.8225°E",
    serial: "APH-00462",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Nutria", code: "17-1230 TPX", hex: "#8B6C49" }
    ],
    weight: "275 g",
    size: "7.9 × 6.0 × 4.0 cm",
    hardness: "7 (Mohs)",
    type: "Quartzite",
    price: "€340"
  },
  {
    id: "05",
    img: "fotos/pedra-05.jpg",
    coords: "41.6176°N 0.9200°E",
    serial: "APH-00178",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Bracken", code: "19-0618 TPX", hex: "#423628" }
    ],
    weight: "360 g",
    size: "8.8 × 6.9 × 4.8 cm",
    hardness: "3.5 (Mohs)",
    type: "Limestone",
    price: "€240"
  },
  {
    id: "06",
    img: "fotos/pedra-06.jpg",
    coords: "41.1189°N 1.2445°E",
    serial: "APH-00527",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Chateau Gray", code: "17-1502 TPX", hex: "#998D85" }
    ],
    weight: "445 g",
    size: "9.6 × 7.3 × 5.4 cm",
    hardness: "6 (Mohs)",
    type: "Sandstone",
    price: "€300"
  },
  {
    id: "07",
    img: "fotos/pedra-07.jpg",
    coords: "42.3372°N 3.1725°E",
    serial: "APH-00349",
    pantones: [
      { name: "Bracken", code: "19-0618 TPX", hex: "#423628" },
      { name: "Excalibur", code: "19-3906 TPX", hex: "#595755" }
    ],
    weight: "390 g",
    size: "9.0 × 6.8 × 4.9 cm",
    hardness: "6 (Mohs)",
    type: "Basalt",
    price: "€290"
  },
  {
    id: "08",
    img: "fotos/pedra-08.jpg",
    coords: "41.5591°N 2.0114°E",
    serial: "APH-00963",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Safari", code: "16-1310 TPX", hex: "#A88D69" }
    ],
    weight: "520 g",
    size: "10.5 × 8.0 × 5.8 cm",
    hardness: "3.5 (Mohs)",
    type: "Marble",
    price: "€420"
  },
  {
    id: "09",
    img: "fotos/pedra-09.jpg",
    coords: "41.7267°N 2.4963°E",
    serial: "APH-00106",
    pantones: [
      { name: "Bracken", code: "19-0618 TPX", hex: "#423628" },
      { name: "Nutria", code: "17-1230 TPX", hex: "#8B6C49" }
    ],
    weight: "260 g",
    size: "7.6 × 5.8 × 3.9 cm",
    hardness: "3 (Mohs)",
    type: "Slate",
    price: "€220"
  },
  {
    id: "10",
    img: "fotos/pedra-10.jpg",
    coords: "41.2179°N 1.4467°E",
    serial: "APH-00284",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Nutria", code: "17-1230 TPX", hex: "#8B6C49" }
    ],
    weight: "335 g",
    size: "8.4 × 6.5 × 4.4 cm",
    hardness: "4 (Mohs)",
    type: "Dolomite",
    price: "€250"
  },
  {
    id: "11",
    img: "fotos/pedra-11.jpg",
    coords: "42.0512°N 2.6300°E",
    serial: "APH-00738",
    pantones: [
      { name: "Kalamata", code: "19-0414 TPX", hex: "#3A352D" },
      { name: "Safari", code: "16-1310 TPX", hex: "#A88D69" }
    ],
    weight: "470 g",
    size: "9.8 × 7.5 × 5.3 cm",
    hardness: "6 (Mohs)",
    type: "Gabbro",
    price: "€360"
  },
  {
    id: "12",
    img: "fotos/pedra-12.jpg",
    coords: "41.8823°N 1.0932°E",
    serial: "APH-00415",
    pantones: [
      { name: "Excalibur", code: "19-3906 TPX", hex: "#595755" },
      { name: "Safari", code: "16-1310 TPX", hex: "#A88D69" }
    ],
    weight: "300 g",
    size: "8.2 × 6.2 × 4.3 cm",
    hardness: "7 (Mohs)",
    type: "Quartz vein rock",
    price: "€310"
  }
];
