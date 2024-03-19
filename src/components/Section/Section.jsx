import * as s from "./Section.styled";

const Section = ({ anchorId, title, children }) => {
  return (
    <>
      <s.SectionWrap id={anchorId}>
        <s.Container>
          {title === "About" ? (
            <s.TitleHidden>{title}</s.TitleHidden>
          ) : (
            <s.Title>{title}</s.Title>
          )}

          {children}
        </s.Container>
      </s.SectionWrap>
    </>
  );
};

export default Section;
