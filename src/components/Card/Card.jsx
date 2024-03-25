import * as s from "./Card.styled";

const Card = ({ card, type, parentHeight }) => {
  switch (card.type) {
    case "text-m-map":
      return (
        <s.TxtThumb>
          <s.Description>{card.description}</s.Description>
          <s.SubTitle>{card.subTitle}</s.SubTitle>
        </s.TxtThumb>
      );

    case "learn-more":
      return (
        <s.LearnMoreLink
          href={card.url}
          rel="noopener noreferrer nofollow"
          aria-label={card.ariaLabel}
        >
          <s.IconWrap>{card.icon()}</s.IconWrap>
          <s.SubTitle>{card.subTitle}</s.SubTitle>
        </s.LearnMoreLink>
      );

    case "image-slide":
      return (
        <s.ImgThumb>
          <s.Image
            srcSet={`${card.url} 1x, ${card.url.replace(
              "@1x.jpg",
              "@2x.jpg"
            )} 2x`}
            src={card.url}
            alt={card.alt}
          />
        </s.ImgThumb>
      );

    case "faq":
      return (
        <>
          <s.FaqImgThumb parentHeight={parentHeight}>
            <s.Image
              srcSet={`${card.url} 1x, ${card.url.replace(
                "@1x.jpg",
                "@2x.jpg"
              )} 2x`}
              src={card.url}
              alt={card.alt}
            />
          </s.FaqImgThumb>
          <s.FaqTxtThumb>
            <s.FaqSubTitle>{card.subTitle}</s.FaqSubTitle>
            <s.FaqDescription>{card.description}</s.FaqDescription>
          </s.FaqTxtThumb>
        </>
      );

    case "social":
      return (
        <s.SocialLink
          href={card.url}
          rel="noopener noreferrer nofollow"
          aria-label={card.ariaLabel}
          type={type}
        >
          <s.SocialIconWrap>{card.icon()}</s.SocialIconWrap>
        </s.SocialLink>
      );

    case "burger":
      return (
        <s.BurgerLink href={card.url} aria-label={card.ariaLabel} type={type}>
          {card.description}
        </s.BurgerLink>
      );

    default:
      return null;
  }
};

export default Card;
