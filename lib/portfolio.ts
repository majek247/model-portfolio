export type Photo = {
  src: string;
  alt: string;
  crop?: [number, number, number, number];
};

 export type Collection = {
  slug: string;
  title: string;
  description: string;
  cover: Photo;
  images: Photo[];
};

export type Series = {
  slug: string;
  title: string;
  description: string;
  cover: Photo;
  images: Photo[];
  collections?: Collection[];
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
  src: '/images/storyjoker3.png',
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


const jokerImages: Photo[] = [
  {src: '/images/storyjoker1.png', alt: 'Muiz as the Joker, in a dressing room holding a mask'},
  {src: '/images/storyjoker2.png', alt: 'Muiz as the Joker, image 2'},
  {src: '/images/storyjoker3.png', alt: 'Muiz as the Joker, image 3'},
  {src: '/images/storyjoker4.png', alt: 'Muiz as the Joker, image 4'},
  {src: '/images/storyjoker5.png', alt: 'Muiz as the Joker, image 5'},
  {src: '/images/storyjoker6.png', alt: 'Muiz as the Joker, image 6'},
  {src: '/images/storyjoker7.png', alt: 'Muiz as the Joker, image 7'},
];

const priestImages: Photo[] = [
  {src: '/images/priest2.png', alt: 'Muiz as the Priest, image 2'},
  {src: '/images/priest3.png', alt: 'Muiz as the Priest, image 3'},
  {src: '/images/rebelpriest1.png', alt: 'Muiz as the Priest, image 4'},
  {src: '/images/rebelpriest2.png', alt: 'Muiz as the Priest, image 5'},
  {src: '/images/rebelpriest3.png', alt: 'Muiz as the Priest, image 6'},
  {src: '/images/rebelpriest4.png', alt: 'Muiz as the Priest, image 7'},

];

export const series: Series[] = [
  {
    slug: 'nigerian-heritage',
    title: 'Nigerian Heritage',
    description:
      'Traditional silhouettes, intricate embroidery and a contemporary point of view. ',
    cover: emerald,
    images: [
      emerald,
      {src: '/images/realagbada3.png', alt: 'Muiz in a traditional Nigerian agbada, image 3'},
      {src: '/images/realagbada4.png', alt: 'Muiz in a traditional Nigerian agbada, image 4'},
      {src: '/images/realagbada5.png', alt: 'Muiz in a traditional Nigerian agbada, image 5'},
      {src: '/images/realagbada6.png', alt: 'Muiz in a traditional Nigerian agbada, image 6'},
    ],
  },
  {
    slug: 'beauty-grooming',
    title: 'Beauty & Grooming',
    description:
      'Close studies of skin, light and expression.  ',
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
    description:
      'Athletic presence, the open court and the last light of the day.  ',
    cover: sport,
    images: [
      sport,

      {src: '/images/realsport6.png', alt: 'Muiz in athletic wear on an outdoor court, image 6'},
      {src: '/images/realsport7.png', alt: 'Muiz in athletic wear on an outdoor court, image 7'},
      {src: '/images/realsport12.png', alt: 'Muiz in athletic wear on an outdoor court, image 8'},
      {src: '/images/realsport13.png', alt: 'Muiz in athletic wear on an outdoor court, image 9'},
      {src: '/images/realsport9.png', alt: 'Muiz in athletic wear on an outdoor court, image 10'},
      

    ],
  },



  {
    slug: 'characters',
    title: 'Characters',
    description: 'Expressive styling and cinematic character work.',
    cover: character,
    images: [...jokerImages, ...priestImages],
    collections: [
      {
        slug: 'joker',
        title: 'After the Act',
        description: 'Who is left when the laughing stops?',
        cover: character,
        images: jokerImages,
      },
      {
        slug: 'priest',
        title: 'Mea Culpa',
        description: 'Swagger, smoke and a long, honest prayer.',
        cover: priestImages[0],
        images: priestImages,
      },
    ],
  },


  {
    slug: 'fashion-editorial',
    title: 'Fashion & Editorial',
    description:
      'Black tailoring, sculptural furniture and considered stillness.',
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