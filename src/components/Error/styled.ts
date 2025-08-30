import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ErrorStyled = styled.section`
  border-radius: 6px;
  background-color: #fff;
  max-width: 800px;
`;

export const HeaderStyled = styled.header`
  padding: 30px;
  background-color: #f3f3f3;
`;

export const BodyStyled = styled.main`
  padding: 30px;
`;

export const ErrorCodeStyled = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

export const TitleStyled = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const TextStyled = styled.p`
  font-size: 16px;
  margin-top: 14px;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: 14px;
  margin-top: 4px;
`;
