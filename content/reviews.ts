export type Review = {
  id: string;
  name: string;
  quote: string;
  stars: 5;
  featured?: boolean;
  lang?: "en" | "hi-mix";
};

export const reviews: Review[] = [
  {
    id: "subjeet",
    name: "Subjeet Badhaan",
    quote:
      "Your shop is a one-stop-shop for all my party needs! The staff are friendly, the selection is amazing, and the prices are great. I would highly recommend your shop to anyone.",
    stars: 5,
    featured: true,
  },
  {
    id: "anand",
    name: "Anand Badhan",
    quote:
      "I am very happy with this shop because there is no such shop in our area and the owner of this shop is very well behaved. It is a very good shop.",
    stars: 5,
  },
  {
    id: "raju",
    name: "Raju Trivedi",
    quote: "Good product shop",
    stars: 5,
  },
  {
    id: "shivank",
    name: "Shivank Kumar",
    quote: "Bahut badhiya shop aur bahut badhiya bhaiya ...",
    stars: 5,
    lang: "hi-mix",
  },
  {
    id: "bharat",
    name: "Bharat Gurnani",
    quote: "Bahut acchi dukaan lagi verry good",
    stars: 5,
    lang: "hi-mix",
  },
  {
    id: "haribhan",
    name: "haribhan singh rathour",
    quote: "Bahut achcha Laga aapki dukaan hai",
    stars: 5,
    lang: "hi-mix",
  },
];

export const featuredReview =
  reviews.find((review) => review.featured) ?? reviews[0];
