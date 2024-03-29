import { nanoid } from "nanoid";
import card01 from "/public/assets/images/faq-img/ape-faq-01@1x.jpg";
import card02 from "/public/assets/images/faq-img/ape-faq-02@1x.jpg";
import card03 from "/public/assets/images/faq-img/ape-faq-03@1x.jpg";
import card04 from "/public/assets/images/faq-img/ape-faq-04@1x.jpg";

export const cardsFaqData = [
  {
    id: nanoid(),
    type: "faq",
    url: card01,
    alt: "Card 1",
    subTitle: "What is an nft collection?",
    description:
      "An nft collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
  },
  {
    id: nanoid(),
    type: "faq",
    url: card02,
    alt: "Card 2",
    subTitle: "How do i purchase nfts from a collection?",
    description:
      "To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.",
  },
  {
    id: nanoid(),
    type: "faq",
    url: card03,
    alt: "Card 3",
    subTitle: "Can i sell or trade nfts from a collection?",
    description:
      "Yes, you can sell or trade nfts from a collection like you would other digital assets.",
  },
  {
    id: nanoid(),
    type: "faq",
    url: card04,
    alt: "Card 4",
    subTitle: "What rights do i have as an owner\nof\n an nft?",
    description:
      "As an nft owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
  },
];
