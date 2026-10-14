export type Photo = {
  src: string;
  alt: string;
  crop?: [number, number, number, number];
};

export type Series = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cover: Photo;
  images: Photo[];
};

export const cat: Photo = {
  src: '/images/rectanglecatportrait.png',
  alt: 'Muiz in black tailoring, seated with a black cat in a sunlit loft',
};

// CSS crops isolate photographs from the supplied visual reference. Replace these
// preview assets with full-resolution originals when available. Coordinates are
// x, y, width, height within the 684 × 2048 reference, excluding baked-in captions.

export const beauty: Photo = {
  src: '/images/realskin1.png',
  alt: 'Muiz in a close-up skincare portrait',
};

export const character: Photo = {
  src: '/images/realjoker1.png',
  alt: 'Muiz holding a playing card in purple and green character styling',
};

export const fashion: Photo = {
  src: '/images/chess1.png',
  alt: 'Muiz wearing black, seated at a chessboard',
};

export const details: Photo[] = [
  {
    src: '/images/design-reference.png',
    alt: 'Close-up of Muiz wearing narrow black sunglasses',
    crop: [24, 1294, 201, 133],
  },
  {
    src: '/images/design-reference.png',
    alt: 'Black-and-white portrait of Muiz resting his face on his hand',
    crop: [239, 1294, 202, 133],
  },
  {
    src: '/images/design-reference.png',
    alt: 'Beauty detail of Muiz in warm light',
    crop: [459, 1294, 200, 133],
  },
];

const emerald: Photo = {
  src: '/images/realagbada1.png',
  alt: 'Muiz in an embroidered emerald agbada and matching fila',
};

const sport: Photo = {
  src: '/images/realsport1.png',
  alt: 'Muiz holding a basketball on an outdoor court at sunset',
};

export const series: Series[] = [
  {
    slug: 'nigerian-heritage',
    title: 'Nigerian Heritage',
    tagline: 'Culture. Tailoring. Presence.',
    description:
      'Traditional silhouettes, intricate embroidery and a contemporary point of view. An exploration of Nigerian menswear in emerald, ivory and burgundy.',
    cover: emerald,
    images: [
      emerald,
      {src: '/images/realagbada2.png', alt: 'Muiz in a traditional Nigerian agbada, image 2'},
      {src: '/images/realagbada3.png', alt: 'Muiz in a traditional Nigerian agbada, image 3'},
      {src: '/images/realagbada4.png', alt: 'Muiz in a traditional Nigerian agbada, image 4'},
      {src: '/images/realagbada5.png', alt: 'Muiz in a traditional Nigerian agbada, image 5'},
      {src: '/images/realagbada6.png', alt: 'Muiz in a traditional Nigerian agbada, image 6'},
    ],
  },
  {
    slug: 'beauty-grooming',
    title: 'Beauty & Grooming',
    tagline: 'Skin. Expression. Confidence.',
    description:
      'Close studies of skin, light and expression. A quieter visual language for beauty and grooming concepts.',
    cover: beauty,
    images: [
      beauty,
      {src: '/images/realskin2.png', alt: 'Muiz in a skincare and grooming portrait, image 2'},
      {src: '/images/realskin3.png', alt: 'Muiz in a skincare and grooming portrait, image 3'},
      {src: '/images/realskin4.png', alt: 'Muiz in a skincare and grooming portrait, image 4'},
    ],
  },
  {
    slug: 'sport',
    title: 'Sport',
    tagline: 'Movement. Discipline. Energy.',
    description:
      'Athletic presence, the open court and the last light of the day. A basketball concept exploring the meeting point of sport and style.',
    cover: sport,
    images: [
      sport,
      {src: '/images/realsport2.png', alt: 'Muiz in athletic wear on an outdoor court, image 2'},
      {src: '/images/realsport4.png', alt: 'Muiz in athletic wear on an outdoor court, image 4'},
      {src: '/images/realsport5.png', alt: 'Muiz in athletic wear on an outdoor court, image 5'},
      {src: '/images/realsport6.png', alt: 'Muiz in athletic wear on an outdoor court, image 6'},
      {src: '/images/realsport7.png', alt: 'Muiz in athletic wear on an outdoor court, image 7'},
    ],
  },
  {
    slug: 'character-studies',
    title: 'Character Studies',
    tagline: 'Mood. Transformation. Story.',
    description:
      'Expressive styling and cinematic character work. A self-directed exploration of colour, tension and persona.',
     cover: character,
    images: [
      character,
      {src: '/images/realjoker2.png', alt: 'Muiz in joker character study, image 2'},
      {src: '/images/realjoker3.png', alt: 'Muiz in joker character study, image 3'},
      {src: '/images/realjoker4.png', alt: 'Muiz in joker character study, image 4'},
      {src: '/images/realjoker5.png', alt: 'Muiz in joker character study, image 5'},
      {src: '/images/realjoker6.png', alt: 'Muiz in joker character study, image 6'},
      {src: '/images/realjoker7.png', alt: 'Muiz in joker character study, image 7'},
      {src: '/images/realjoker8.png', alt: 'Muiz in joker character study, image 8'},
      {src: '/images/realjoker9.png', alt: 'Muiz in joker character study, image 9'},
    ],
  },
  {
    slug: 'fashion-editorial',
    title: 'Fashion & Editorial',
    tagline: 'Tailoring. Attitude. Timeless.',
    description:
      'Black tailoring, sculptural furniture and considered stillness. Editorial concepts built around presence, proportion and restraint.',
    cover: fashion,
    images: [
      fashion,
      {src: '/images/chess2.png', alt: 'Muiz in black tailoring at a chessboard, image 2'},
      {src: '/images/chess3.png', alt: 'Muiz in black tailoring at a chessboard, image 3'},
      {src: '/images/chess4.png', alt: 'Muiz in black tailoring at a chessboard, image 4'},
      {src: '/images/chess5.png', alt: 'Muiz in black tailoring at a chessboard, image 5'},
      {src: '/images/chess6.png', alt: 'Muiz in black tailoring at a chessboard, image 6'},
      {src: '/images/chess7.png', alt: 'Muiz in black tailoring at a chessboard, image 7'},
      {src: '/images/chess8.png', alt: 'Muiz in black tailoring at a chessboard, image 8'},
      {src: '/images/chess9.png', alt: 'Muiz in black tailoring at a chessboard, image 9'},
  {src: '/images/chess10.png', alt: 'Muiz in black tailoring at a chessboard, image 10'},
      {src: '/images/blackcat1.png', alt: 'Muiz in black tailoring with a black cat, image 1'},
      {src: '/images/blackcat2.png', alt: 'Muiz in black tailoring with a black cat, image 2'},
      {src: '/images/blackcat3.png', alt: 'Muiz in black tailoring with a black cat, image 3'},
      {src: '/images/blackcat4.png', alt: 'Muiz in black tailoring with a black cat, image 4'},
      {src: '/images/blackcat5.png', alt: 'Muiz in black tailoring with a black cat, image 5'},
      {src: '/images/blackcat6.png', alt: 'Muiz in black tailoring with a black cat, image 6'},
      {src: '/images/blackcat7.png', alt: 'Muiz in black tailoring with a black cat, image 7'},
    ],
  },
];