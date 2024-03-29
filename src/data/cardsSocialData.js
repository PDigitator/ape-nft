import { nanoid } from "nanoid";
import DiscordIcon from "/public/assets/icons/discord.svg?react";
import OpenseaIcon from "/public/assets/icons/opensea.svg?react";
import TwitterIcon from "/public/assets/icons/x-twitter.svg?react";

export const cardsSocialData = [
  {
    id: nanoid(),
    type: "social",
    icon: DiscordIcon,
    ariaLabel: "Link to Opensea",
    url: "https://discord.com/",
  },
  {
    id: nanoid(),
    type: "social",
    icon: OpenseaIcon,
    ariaLabel: "Link to Opensea",
    url: "https://opensea.io/collection/boredapeyachtclub?search[collections][0]=boredapeyachtclub",
  },
  {
    id: nanoid(),
    type: "social",
    icon: TwitterIcon,
    ariaLabel: "Link to Twitter",
    url: "https://twitter.com/BoredApeYC",
  },
];
