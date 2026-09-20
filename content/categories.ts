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
    alt: "Premium party decorations in coral, cream and champagne gold",
  },
  {
    id: "balloons",
    title: "Balloons",
    kicker: "Fill the air",
    image: "/images/cat-balloons.png",
    size: "tall",
    alt: "Cluster of champagne, coral and blush party balloons",
  },
  {
    id: "gifts",
    title: "Return Gifts",
    kicker: "Send them home smiling",
    image: "/images/cat-gifts.png",
    size: "wide",
    alt: "Small wrapped return gifts with coral and gold ribbon",
  },
  {
    id: "props",
    title: "Party Props",
    kicker: "For the photos",
    image: "/images/cat-props.png",
    size: "small",
    alt: "Elegant gold mask and cream party hat",
  },
  {
    id: "wrapping",
    title: "Gift Wrapping",
    kicker: "The finishing touch",
    image: "/images/cat-wrapping.png",
    size: "small",
    alt: "Cream wrapping paper, gold scissors and coral ribbon",
  },
  {
    id: "theme",
    title: "Theme Parties",
    kicker: "Pick a world",
    image: "/images/cat-theme.png",
    size: "small",
    alt: "Theme party crown, mask and decorations",
  },
  {
    id: "toys",
    title: "Toys",
    kicker: "Little hands, big joy",
    image: "/images/cat-toys.png",
    size: "small",
    alt: "Wooden toys and a small plush for children's parties",
  },
  {
    id: "accessories",
    title: "Birthday Accessories",
    kicker: "Candles and extras",
    image: "/images/cat-accessories.png",
    size: "small",
    alt: "Birthday candles, party hat and coral accessories",
  },
  {
    id: "banners",
    title: "Birthday Banners",
    kicker: "Hang the moment",
    image: "/images/cat-banners.png",
    size: "wide",
    alt: "Cream and coral birthday bunting against a warm wall",
  },
  {
    id: "supplies",
    title: "Party Supplies",
    kicker: "Plates, cups, the lot",
    image: "/images/cat-supplies.png",
    size: "small",
    alt: "Gold plates, cream cups and coral napkins",
  },
  {
    id: "school",
    title: "School Party Items",
    kicker: "Classroom celebrations",
    image: "/images/cat-school.png",
    size: "tall",
    alt: "School party crowns, balloons and gold stars",
  },
];
