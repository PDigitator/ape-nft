import { nanoid } from "nanoid";

export const cardsBurgerData = [
  {
    id: nanoid(),
    kind: "burger",
    description: "About",
    ariaLabel: "Scroll to About section",
    url: "#about",
  },
  {
    id: nanoid(),
    kind: "burger",
    description: "M-Map",
    ariaLabel: "Scroll to Mind Map section",
    url: "#mind-map",
  },
  {
    id: nanoid(),
    kind: "burger",
    description: "Faq",
    ariaLabel: "Scroll to FAQ section",
    url: "#faq",
  },
  {
    id: nanoid(),
    kind: "burger",
    description: "Arts",
    ariaLabel: "Scroll to Collection section",
    url: "#arts",
  },
  {
    id: nanoid(),
    kind: "burger",
    description: "Mint",
    ariaLabel: "Scroll Contact Us section",
    url: "#mint",
  },
];
