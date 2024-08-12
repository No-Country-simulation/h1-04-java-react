// src/assets/imageMapping.js
import img1 from "./patients/1.png";
import img2 from "./patients/2.png";
import img3 from "./patients/3.png";
import img4 from "./patients/4.png";
import img5 from "./patients/5.png";

const imageMapping = {
  2: img1,
  1: img2,
  3: img3,
  4: img4,
  5: img5,
  // Agrega más mapeos según los IDs
};

export const getImageById = (id) => {
  return imageMapping[id] || "path/to/defaultImage.png"; // Imagen por defecto si no se encuentra un mapeo
};
