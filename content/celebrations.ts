export type CelebrationId =
  | "birthday"
  | "kids"
  | "anniversary"
  | "school"
  | "theme"
  | "surprise"
  | "other";

export type Celebration = {
  id: CelebrationId;
  label: string;
  line: string;
  scene: string;
  from: string;
  to: string;
  accent: string;
  images: [string, string, string];
};

export const celebrations: Celebration[] = [
  {
    id: "birthday",
    label: "Birthday",
    line: "Candles, balloons, and a room that says today is yours.",
    scene: "balloons, candles, banners",
    from: "#2A0838",
    to: "#FF2E8A",
    accent: "#F4C430",
    images: [
      "/images/cat-balloons.png",
      "/images/cat-accessories.png",
      "/images/cat-banners.png",
    ],
  },
  {
    id: "kids",
    label: "Kids Party",
    line: "Toys, colours, and enough props to keep the chaos joyful.",
    scene: "toys, vibrant props",
    from: "#1A0838",
    to: "#9B7DFF",
    accent: "#2EE6D6",
    images: [
      "/images/cat-toys.png",
      "/images/cat-school.png",
      "/images/cat-props.png",
    ],
  },
  {
    id: "anniversary",
    label: "Anniversary",
    line: "Quiet luxury. Soft gold. Something wrapped with care.",
    scene: "gift wrapping, elegant decorations",
    from: "#2A1030",
    to: "#F4C430",
    accent: "#FFF7FB",
    images: [
      "/images/cat-wrapping.png",
      "/images/cat-gifts.png",
      "/images/cat-decorations.png",
    ],
  },
  {
    id: "school",
    label: "School Event",
    line: "Banners, stars, and classroom-ready celebration kits.",
    scene: "banners, stars",
    from: "#08242A",
    to: "#2EE6D6",
    accent: "#FF7AB6",
    images: [
      "/images/cat-school.png",
      "/images/cat-banners.png",
      "/images/cat-supplies.png",
    ],
  },
  {
    id: "theme",
    label: "Theme Party",
    line: "Hats, masks, and the little details that complete a world.",
    scene: "party props, themed decorations",
    from: "#2A0830",
    to: "#FF7AB6",
    accent: "#F4C430",
    images: [
      "/images/cat-theme.png",
      "/images/cat-props.png",
      "/images/cat-decorations.png",
    ],
  },
  {
    id: "surprise",
    label: "Surprise",
    line: "A closed box. A held breath. Then the room lights up.",
    scene: "gifts, confetti",
    from: "#1A0828",
    to: "#FF2E8A",
    accent: "#F4C430",
    images: [
      "/images/hero-poster.png",
      "/images/cat-gifts.png",
      "/images/cat-balloons.png",
    ],
  },
  {
    id: "other",
    label: "Other Celebration",
    line: "If it matters to you, we probably have something for it.",
    scene: "a little of everything",
    from: "#1A0828",
    to: "#9B7DFF",
    accent: "#FFF7FB",
    images: [
      "/images/cat-decorations.png",
      "/images/cat-wrapping.png",
      "/images/cat-supplies.png",
    ],
  },
];
