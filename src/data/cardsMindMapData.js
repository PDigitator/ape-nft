import { nanoid } from "nanoid";
import ArrowIcon from "/src/assets/icons/up-right-arrow.svg?react";

export const cardsMindMapData = [
  {
    id: nanoid(),
    variant: "text-m-map",
    subTitle: "Yape Drop",
    description:
      "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
  },
  {
    id: nanoid(),
    variant: "text-m-map",
    subTitle: "New Collection",
    description:
      "Launch of the 2nd Yacht Collection Releasing the first version of the Ape Slam Game",
  },
  {
    id: nanoid(),
    variant: "text-m-map",
    subTitle: "Token",
    description:
      "Launch Your Own Token, The Proceeds Of Which Will Go To A Global Fund To Launch Yacht Club And Promote It",
  },
  {
    id: nanoid(),
    variant: "learn-more",
    subTitle: "Learn\nmore\nin mind map",
    icon: ArrowIcon,
    url: "https://en.wikipedia.org/wiki/Bored_Ape",
    ariaLabel: "Link to Wiki",
  },
];
