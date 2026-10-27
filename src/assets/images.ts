// Direct imports guarantee Vite bundles and hashes images in dist/ for Netlify
import heroPlatter from './images/hero_chipacitos_platter_1793084496201.jpg';
import chipaClasico from './images/product_chipa_clasico_1793084497246.jpg';
import chipaRelleno from './images/product_chipa_relleno_1793084497800.jpg';
import medialunas from './images/product_medialunas_pastry_1793084498778.jpg';
import chipaHerbs from './images/chipa_herbs_close_up_1793084531522.jpg';
import alfajores from './images/product_pasteleria_alfajores_1793084556077.jpg';

export const IMAGES = {
  hero: heroPlatter || '/images/hero_chipacitos_platter.jpg',
  chipaClasico: chipaClasico || '/images/product_chipa_clasico.jpg',
  chipaRelleno: chipaRelleno || '/images/product_chipa_relleno.jpg',
  medialunas: medialunas || '/images/product_medialunas_pastry.jpg',
  chipaHerbs: chipaHerbs || '/images/chipa_herbs_close_up.jpg',
  alfajores: alfajores || '/images/product_pasteleria_alfajores.jpg',
};

// Fallback image helper
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl: string) => {
  const target = e.currentTarget;
  if (target.src !== fallbackUrl) {
    target.src = fallbackUrl;
  }
};
