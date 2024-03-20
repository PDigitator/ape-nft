// import { useEffect } from "react";
// import { useState } from "react";
// import { useRef } from "react";

// import Section from "../Section";
// import { staticTheme } from "../../theme";
// import * as s from "./Header.styled";

const Header = ({ isMobileView }) => {
  return <>{isMobileView ? <p>Header Small</p> : <p>Header Big</p>}</>;
};

export default Header;
