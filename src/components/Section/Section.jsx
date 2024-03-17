import * as s from "./Section.styled";

const Section = ({ anchorId, title, children }) => {
  return (
    <>
      <s.SectionWrap id={anchorId}>
        <s.Container>
          {title && <s.TitleHidden>{title}</s.TitleHidden>}
          {children}
        </s.Container>
      </s.SectionWrap>
    </>
  );
};

export default Section;
