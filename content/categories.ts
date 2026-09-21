export type CategorySize = "large" | "tall" | "wide" | "small";

export type Category = {
  id: string;
  title: string;
  kicker: string;
  image: string;
  size: CategorySize;
  alt: string;
};

export const categories: Category[] = [
  {
    id: "decorations",
    title: "Party Decorations",
    kicker: "Set the room",
    image: "/images/cat-decorations.png",
    size: "large",
    alt: "Vibrant party decorations in magenta, gold and teal",
  },
  {
    id: "balloons",
    title: "Balloons",
    kicker: "Fill the air",
    image: "/images/cat-balloons.png",
    size: "tall",
    alt: "Shiny magenta, gold, teal and violet party balloons",
  },
  {
    id: "gifts",
    title: "Return Gifts",
    kicker: "Send them home smiling",
    image: "/images/cat-gifts.png",
    size: "wide",
    alt: "Bright return gifts wrapped in magenta, gold, teal and purple",
  },
  {
    id: "props",
    title: "Party Props",
    kicker: "For the photos",
    image: "/images/cat-props.png",
    size: "small",
    alt: "Colorful photo-booth props with gold stars and magenta details",
  },
  {
    id: "wrapping",
    title: "Gift Wrapping",
    kicker: "The finishing touch",
    image: "/images/cat-wrapping.png",
    size: "small",
    alt: "Magenta gift wrap with a shining gold bow and teal ribbon",
  },
  {
    id: "theme",
    title: "Theme Parties",
    kicker: "Pick a world",
    image: "/images/cat-theme.png",
    size: "small",
    alt: "Glittering gold crown, magenta mask and theme party pieces",
  },
  {
    id: "toys",
    title: "Toys",
    kicker: "Little hands, big joy",
    image: "/images/cat-toys.png",
    size: "small",
    alt: "Colorful wooden toys and a plush for children's parties",
  },
  {
    id: "accessories",
    title: "Birthday Accessories",
    kicker: "Candles and extras",
    image: "/images/cat-accessories.png",
    size: "small",
    alt: "Gold number candle, magenta hat and birthday accessories",
  },
  {
    id: "banners",
    title: "Birthday Banners",
    kicker: "Hang the moment",
    image: "/images/cat-banners.png",
    size: "wide",
    alt: "Magenta, gold, teal and violet birthday bunting",
  },
  {
    id: "supplies",
    title: "Party Supplies",
    kicker: "Plates, cups, the lot",
    image: "/images/cat-supplies.png",
    size: "small",
    alt: "Shiny gold plates with magenta, teal and violet party tableware",
  },
  {
    id: "school",
    title: "School Party Items",
    kicker: "Classroom celebrations",
    image: "/images/cat-school.png",
    size: "tall",
    alt: "Bright school party crowns, balloons and gold stars",
  },
];
