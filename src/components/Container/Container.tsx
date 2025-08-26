import { ContainerStyled } from "./styled";
import { FC } from "react";
import { ContainerProps } from "./types";

export const Container: FC<ContainerProps> = ({ children, maxWidth }) => {
  const styles = { maxWidth };

  return <ContainerStyled style={styles}>{children}</ContainerStyled>;
};
