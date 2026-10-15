export type Photo = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  crop?: [number, number, number, number];
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  story?: string;
  seoTitle?: string;
  seoDescription?: string;
  layout?: 'story' | 'gallery';
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
  src: '/images/storyjoker1.png',
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
  {
    src: '/images/storyjoker1.png',
    alt: 'Muiz as the Joker, holding a mask to his face',
    title: 'Still In Character',
    caption: 'He keeps the broken smile against his cheek, buying another moment before he has to sit here with his own face.',
  },
  {
    src: '/images/storyjoker2.png',
    alt: 'Muiz as the Joker, looking down at the mask in his hand',
    title: 'Smile For Nobody',
    caption: 'He lowers the mask and studies its grin. It keeps smiling in his hand, asking nothing of the exhausted man holding it.',
  },
  {
    src: '/images/storyjoker3.png',
    alt: 'Muiz as the Joker, seated with a stained cloth',
    title: 'Let It Wait',
    caption: 'He leans forward with the cloth loose between his fingers. For now, even washing his face feels like another thing being asked.',
  },
  {
    src: '/images/storyjoker4.png',
    alt: 'Close-up of Muiz in smeared Joker makeup',
    title: 'Nowhere To Look',
    caption: 'He turns his eyes away and rests his head against the wall. There is nobody beside him to fill the silence.',
  },
  {
    src: '/images/storyjoker5.png',
    alt: 'Muiz wiping off Joker makeup',
    title: 'A Small Mercy',
    caption: 'With his eyes closed, he holds the cloth against his cheek. For a few seconds, there is nothing he needs to show.',
  },
  {
    src: '/images/storyjoker6.png',
    alt: 'Muiz wiping his face in a dressing-room mirror',
    title: 'There You Are',
    caption: 'He finally meets his own eyes in the mirror. The cloth stays against his cheek while he takes a longer look.',
  },
  {
    src: '/images/storyjoker7.png',
    alt: 'Muiz reclined in a green shirt, hand on his head',
    title: 'Enough For Tonight',
    caption: 'He leans back and closes his eyes, leaving the mirror behind. Whatever he saw there can wait until he has slept.',
  },
];


const priestImages: Photo[] = [
  {
    src: '/images/priest2.png',
    alt: 'Muiz as a priest in black robes, seated on a chair',
    title: 'Nothing To Confess',
    caption: 'He leans back and pulls at his collar, meeting every imagined accusation with the same look. Nobody is getting an apology.',
  },
  {
    src: '/images/priest3.png',
    alt: 'Muiz as a priest, smoking',
    title: 'Still Not Sorry',
    caption: 'Against the wall, he takes another drag and holds his stare. The cigarette gives him something to do besides explain himself.',
  },
  {
    src: '/images/rebelpriest1.png',
    alt: 'Muiz as a priest, crying with a rosary',
    title: 'Now It Hurts',
    caption: 'The hand that held the cigarette now grips a rosary. He bows into it, unable to keep his face from crumpling.',
  },
  {
    src: '/images/rebelpriest2.png',
    alt: 'Muiz as a priest, resting his head on a church pew',
    title: 'Stay A While',
    caption: 'Bent over the worn pew, he lets the rosary hang. There is nobody to impress, and no strength left for pretending.',
  },
  {
    src: '/images/rebelpriest3.png',
    alt: 'Muiz as a priest, hands clasped in prayer',
    title: 'Hear Me Out',
    caption: 'He looks up with wet eyes, both hands closed around the rosary. Whatever he asks now, he leaves his excuses out.',
  },
  {
    src: '/images/rebelpriest4.png',
    alt: 'Muiz as a priest, kissing his rosary',
    title: 'No More Hiding',
    caption: 'His gaze settles, quieter than when he arrived. He has said what he came to avoid, and tomorrow he must remember it.',
  },
];



const chessImages: Photo[] = [
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
];

const catImages: Photo[] = [
  {src: '/images/blackcat1.png', alt: 'Muiz in black tailoring with a black cat, image 1'},
  {src: '/images/blackcat2.png', alt: 'Muiz in black tailoring with a black cat, image 2'},
  {src: '/images/blackcat3.png', alt: 'Muiz in black tailoring with a black cat, image 3'},
  {src: '/images/blackcat4.png', alt: 'Muiz in black tailoring with a black cat, image 4'},
  {src: '/images/blackcat5.png', alt: 'Muiz in black tailoring with a black cat, image 5'},
  {src: '/images/blackcat6.png', alt: 'Muiz in black tailoring with a black cat, image 6'},
  {src: '/images/blackcat7.png', alt: 'Muiz in black tailoring with a black cat, image 7'},
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
       story: 'Every performance ends. The harder part is who you are once the lights go down and nobody is watching.',
        title: 'Behind the Grin',
        description: 'Every joke has a cost. He’s the one still paying it.',

              seoTitle: 'Male Model Joker Photoshoot | Muiz Thomas',
      seoDescription: 'A Joker-inspired male model photoshoot featuring Muiz Thomas. Seven intimate portraits explore the tired face beneath the mask, alone at a dressing table.',
       
      
      cover: character,
        images: jokerImages,
      },
      {
        slug: 'priest',
              story: 'Defiance is easy in daylight. This is what remains when the swagger runs out and all that is left is the confession.',
        title: 'Far From the Altar',
        description: 'How far can a man drift and still be heard?',
    seoTitle: 'Priest-Themed Male Model Photoshoot | Muiz Thomas',
      seoDescription: 'Nigerian model Muiz Thomas explores guilt and forgiveness in a priest-inspired photoshoot, told through six expressive black and white portraits.',
       

        cover: priestImages[0],
        images: priestImages,
      },
    ],
  },

  {
    slug: 'fashion-editorial',
    title: 'Fashion & Editorial',
    description: 'Black tailoring, sculptural furniture and considered stillness.',
    cover: fashion,
    images: [...chessImages, ...catImages],
    collections: [
      {
        slug: 'chess',
        title: 'Style Has the Quiet Advantage.',
        description: 'Black layers, bold proportions, and composure carried across the board.',
        layout: 'gallery',
        cover: fashion,
        images: chessImages,
      },
      {
        slug: 'cat',
        title: 'Even Confidence Has a Soft Side.',
        description: 'Sharp clothes, easy affection, and a little room for mischief.',
        layout: 'gallery',
        cover: catImages[0],
        images: catImages,
      },
    ],
  },
];