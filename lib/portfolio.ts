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
  src: '/images/skincare3.png',
  alt: 'Muiz in a close-up skincare portrait',
};

export const character: Photo = {
  src: '/images/jokermodel1.png',
  alt: 'Muiz holding a playing card in purple and green character styling',
};

export const fashion: Photo = {
  src: '/images/chessmodel10.png',
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
  src: '/images/agbada1.png',
  alt: 'Muiz in an embroidered emerald agbada and matching fila',
};

const sport: Photo = {
  src: '/images/sport6.png',
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
      {src: '/images/agbada2.png', alt: 'Muiz in a traditional Nigerian agbada, image 2'},
      {src: '/images/agbada3.png', alt: 'Muiz in a traditional Nigerian agbada, image 3'},
      {src: '/images/agbdada4.png', alt: 'Muiz in a traditional Nigerian agbada, image 4'},
      {src: '/images/agbada5.png', alt: 'Muiz in a traditional Nigerian agbada, image 5'},
      {src: '/images/agbada6.png', alt: 'Muiz in a traditional Nigerian agbada, image 6'},
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
      {src: '/images/skincare1.png', alt: 'Muiz in a skincare and grooming portrait, image 1'},
      {src: '/images/skincare2.png', alt: 'Muiz in a skincare and grooming portrait, image 2'},
      {src: '/images/skincare4.png', alt: 'Muiz in a skincare and grooming portrait, image 4'},
      {src: '/images/skincare5.png', alt: 'Muiz in a skincare and grooming portrait, image 5'},
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
      {src: '/images/sport1.png', alt: 'Muiz holding a basketball on an outdoor court, image 1'},
      {src: '/images/sport2.png', alt: 'Muiz in athletic wear on an outdoor court, image 2'},
      {src: '/images/sport3.png', alt: 'Muiz in athletic wear on an outdoor court, image 3'},
      {src: '/images/sport4.png', alt: 'Muiz in athletic wear on an outdoor court, image 4'},
      {src: '/images/sport5.png', alt: 'Muiz in athletic wear on an outdoor court, image 5'},
      {src: '/images/sport7.png', alt: 'Muiz in athletic wear on an outdoor court, image 7'},
      {src: '/images/sport8.png', alt: 'Muiz in athletic wear on an outdoor court, image 8'},
      {src: '/images/sport9.png', alt: 'Muiz in athletic wear on an outdoor court, image 9'},
      {src: '/images/sport10.png', alt: 'Muiz in athletic wear on an outdoor court, image 10'},
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
      {src: '/images/joker3.png', alt: 'Muiz holding a burning joker card in character styling'},
      {src: '/images/jokermodel1.png', alt: 'Muiz in joker character study, image 1'},
      {src: '/images/jokermodel2.png', alt: 'Muiz in joker character study, image 2'},
      {src: '/images/jokermodel4.png', alt: 'Muiz in joker character study, image 4'},
      {src: '/images/jokermodel5.png', alt: 'Muiz in joker character study, image 5'},
      {src: '/images/jokermodel6.png', alt: 'Muiz in joker character study, image 6'},
      {src: '/images/jokermodel7.png', alt: 'Muiz in joker character study, image 7'},
      {src: '/images/jokermodel8.png', alt: 'Muiz in joker character study, image 8'},
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
      {src: '/images/chessmodel1.png', alt: 'Muiz in black tailoring at a chessboard, image 1'},
      {src: '/images/chessmodel2.png', alt: 'Muiz in black tailoring at a chessboard, image 2'},
      {src: '/images/chessmodel3.png', alt: 'Muiz in black tailoring at a chessboard, image 3'},
      {src: '/images/chessmodel4.png', alt: 'Muiz in black tailoring at a chessboard, image 4'},
      {src: '/images/chessmodel5.png', alt: 'Muiz in black tailoring at a chessboard, image 5'},
      {src: '/images/chessmodel6.png', alt: 'Muiz in black tailoring at a chessboard, image 6'},
      {src: '/images/chessmodel7.png', alt: 'Muiz in black tailoring at a chessboard, image 7'},
      {src: '/images/chessmodel8.png', alt: 'Muiz in black tailoring at a chessboard, image 8'},
      {src: '/images/chessmodel9.png', alt: 'Muiz in black tailoring at a chessboard, image 9'},
      {src: '/images/black-lad1.png', alt: 'Muiz in black tailoring, editorial portrait 1'},
      {src: '/images/black-lad2.png', alt: 'Muiz in black tailoring, editorial portrait 2'},
      {src: '/images/black-lad3.png', alt: 'Muiz in black tailoring, editorial portrait 3'},
      {src: '/images/black-lad4.png', alt: 'Muiz in black tailoring, editorial portrait 4'},
      {src: '/images/black-lad5.png', alt: 'Muiz in black tailoring, editorial portrait 5'},
      {src: '/images/black-lad6.png', alt: 'Muiz in black tailoring, editorial portrait 6'},
      {src: '/images/black-lad7.png', alt: 'Muiz in black tailoring, editorial portrait 7'},
      {src: '/images/black-lad8.png', alt: 'Muiz in black tailoring, editorial portrait 8'},
      {src: '/images/black-lad9.png', alt: 'Muiz in black tailoring, editorial portrait 9'},
      {src: '/images/black-lad10.png', alt: 'Muiz in black tailoring, editorial portrait 10'},
      {src: '/images/black-lad11.png', alt: 'Muiz in black tailoring, editorial portrait 11'},
      {src: '/images/black-lad12.png', alt: 'Muiz in black tailoring, editorial portrait 12'},
      {src: '/images/black-lad13.png', alt: 'Muiz in black tailoring, editorial portrait 13'},
      {src: '/images/black-lad14.png', alt: 'Muiz in black tailoring, editorial portrait 14'},
      {src: '/images/black-lad15.png', alt: 'Muiz in black tailoring, editorial portrait 15'},
      {src: '/images/black-lad16.png', alt: 'Muiz in black tailoring, editorial portrait 16'},
    ],
  },
];