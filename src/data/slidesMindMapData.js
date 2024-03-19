import { nanoid } from "nanoid";
import Icon from "../assets/icons/up-right-arrow-48x48.svg?react";

export const slidesMindMapData = [
  {
    id: nanoid(),
    type: "text",
    subTitle: "Yape Drop",
    description:
      "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
  },
  {
    id: nanoid(),
    type: "text",
    subTitle: "New Collection",
    description:
      "Launch of the 2nd Yacht Collection Releasing the first version of the Ape Slam Game",
  },
  {
    id: nanoid(),
    type: "text",
    subTitle: "Token",
    description:
      "Launch Your Own Token, The Proceeds Of Which Will Go To A Global Fund To Launch Yacht Club And Promote It",
  },
  {
    id: nanoid(),
    type: "learn-more",
    subTitle: "Learn\nmore\nin mind map",
    icon: Icon,
    url: "https://boredapeyachtclub.com/",
  },
];
