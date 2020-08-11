import colors from "assets/colors";

const palettes = Object.keys(colors.presetPalettes);

export { colors };
export default function randomColor() {
  const palettesIndex = Math.floor(Math.random() * palettes.length);

  return palettes[palettesIndex];
}
