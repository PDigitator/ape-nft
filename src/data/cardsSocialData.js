import { nanoid } from "nanoid";
import DiscordIcon from "/src/assets/icons/discord.svg?react";
import OpenseaIcon from "/src/assets/icons/opensea.svg?react";
import TwitterIcon from "/src/assets/icons/x-twitter.svg?react";

export const cardsSocialData = [
  {
    id: nanoid(),
    kind: "social",
    icon: DiscordIcon,
    ariaLabel: "Link to Opensea",
    url: "https://discord.com/",
  },
  {
    id: nanoid(),
    kind: "social",
    icon: OpenseaIcon,
    ariaLabel: "Link to Opensea",
    url: "https://opensea.io/collection/boredapeyachtclub?search[collections][0]=boredapeyachtclub",
  },
  {
    id: nanoid(),
    kind: "social",
    icon: TwitterIcon,
    ariaLabel: "Link to Twitter",
    url: "https://twitter.com/BoredApeYC",
  },
];
