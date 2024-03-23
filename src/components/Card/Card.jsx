import * as s from "./Card.styled";

const Card = ({ card }) => {
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
        <a href={card.url} rel="noopener noreferrer nofollow">
          <s.LearnMoreThumb>
            <s.IconWrap>{card.icon()}</s.IconWrap>
            <s.SubTitle>{card.subTitle}</s.SubTitle>
          </s.LearnMoreThumb>
        </a>
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
          <s.FaqImgThumb>
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

    default:
      return null;
  }
};

export default Card;
