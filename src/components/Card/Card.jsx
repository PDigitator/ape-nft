import * as s from "./Card.styled";

const Card = ({ card }) => {
  switch (card.type) {
    case "text":
      return (
        <s.TxtThumb>
          <s.Description>{card.description}</s.Description>
          <s.SubTitle>{card.subTitle}</s.SubTitle>
        </s.TxtThumb>
      );
    case "learn-more":
      return (
        <a href={card.url} rel="noopener noreferrer nofollow">
          <s.LearnMoreThumb>
            <s.IconWrap>{card.icon()}</s.IconWrap>
            <s.SubTitle>{card.subTitle}</s.SubTitle>
          </s.LearnMoreThumb>
        </a>
      );
    case "image":
      return (
        <s.ImgThumb>
          <s.Image
            src={card.url}
            alt={card.alt}
            srcSet={`${card.url} 1x, ${card.url.replace(
              "@1x.jpg",
              "@2x.jpg"
            )} 2x`}
          />
        </s.ImgThumb>
      );
    default:
      return null;
  }
};

export default Card;
