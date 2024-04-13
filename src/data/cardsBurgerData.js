import { nanoid } from "nanoid";

export const cardsBurgerData = [
  {
    id: nanoid(),
    variant: "burger",
    description: "About",
    ariaLabel: "Scroll to About section",
    url: "#about",
  },
  {
    id: nanoid(),
    variant: "burger",
    description: "M-Map",
    ariaLabel: "Scroll to Mind Map section",
    url: "#mind-map",
  },
  {
    id: nanoid(),
    variant: "burger",
    description: "Faq",
    ariaLabel: "Scroll to FAQ section",
    url: "#faq",
  },
  {
    id: nanoid(),
    variant: "burger",
    description: "Arts",
    ariaLabel: "Scroll to Collection section",
    url: "#arts",
  },
  {
    id: nanoid(),
    variant: "burger",
    description: "Mint",
    ariaLabel: "Scroll Contact Us section",
    url: "#mint",
  },
];
