import { GlobalStyle } from "./styled";
import { Global } from "@emotion/react";

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
    </>
  );
};
