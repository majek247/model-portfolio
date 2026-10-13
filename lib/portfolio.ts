export type Photo = { src: string; alt: string; crop?: [number, number, number, number] };
export type Series = { slug: string; title: string; tagline: string; description: string; cover: Photo; images: Photo[] };
export const cat: Photo = {src:'/images/cat-portrait.png',alt:'Muiz in black tailoring, seated with a black cat in a sunlit loft'};
// CSS crops isolate photographs from the supplied visual reference. Replace these
// preview assets with full-resolution originals when available. Coordinates are
// x, y, width, height within the 684 × 2048 reference, excluding baked-in captions.
export const beauty: Photo = {src:'/images/design-reference.png',alt:'Muiz in a close-up skincare portrait',crop:[350,623,309,272]};
export const character: Photo = {src:'/images/design-reference.png',alt:'Muiz holding a playing card in purple and green character styling',crop:[240,981,201,214]};
export const fashion: Photo = {src:'/images/design-reference.png',alt:'Muiz wearing black, seated at a chessboard',crop:[457,981,201,214]};
export const details: Photo[] = [
 {src:'/images/design-reference.png',alt:'Close-up of Muiz wearing narrow black sunglasses',crop:[24,1294,201,133]},
 {src:'/images/design-reference.png',alt:'Black-and-white portrait of Muiz resting his face on his hand',crop:[239,1294,202,133]},
 {src:'/images/design-reference.png',alt:'Beauty detail of Muiz in warm light',crop:[459,1294,200,133]},
];
const emerald: Photo = {src:'/images/heritage-emerald.png',alt:'Muiz in an embroidered emerald agbada and matching fila'};
const sport: Photo = {src:'/images/sport.png',alt:'Muiz holding a basketball on an outdoor court at sunset'};
export const series: Series[] = [
 {slug:'nigerian-heritage',title:'Nigerian Heritage',tagline:'Culture. Tailoring. Presence.',description:'Traditional silhouettes, intricate embroidery and a contemporary point of view. An exploration of Nigerian menswear in emerald, ivory and burgundy.',cover:emerald,images:[emerald,{src:'/images/heritage-ivory.png',alt:'Muiz in an ivory agbada on stone steps'},{src:'/images/heritage-burgundy.png',alt:'Muiz seated in burgundy traditional tailoring'}]},
 {slug:'beauty-grooming',title:'Beauty & Grooming',tagline:'Skin. Expression. Confidence.',description:'Close studies of skin, light and expression. A quieter visual language for beauty and grooming concepts.',cover:beauty,images:[beauty,details[2]]},
 {slug:'sport',title:'Sport',tagline:'Movement. Discipline. Energy.',description:'Athletic presence, the open court and the last light of the day. A basketball concept exploring the meeting point of sport and style.',cover:sport,images:[sport]},
 {slug:'character-studies',title:'Character Studies',tagline:'Mood. Transformation. Story.',description:'Expressive styling and cinematic character work. A self-directed exploration of colour, tension and persona.',cover:character,images:[character]},
 {slug:'fashion-editorial',title:'Fashion & Editorial',tagline:'Tailoring. Attitude. Timeless.',description:'Black tailoring, sculptural furniture and considered stillness. Editorial concepts built around presence, proportion and restraint.',cover:fashion,images:[cat,fashion,details[1]]},
];
