import {
  BodyStyled,
  ErrorCodeStyled,
  ErrorStyled,
  HeaderStyled,
  LinkStyled,
  TextStyled,
  TitleStyled
} from "./styled";
import { FC } from "react";
import { ErrorProps } from "./types";

export const Error: FC<ErrorProps> = ({
  errorCode,
  errorShortMessage,
  errorFullMessage,
  websiteUrl,
  hasTime
}) => {
  return (
    <ErrorStyled>
      <HeaderStyled>
        {errorShortMessage && (
          <TextStyled style={{ marginBottom: "10px" }}>{errorShortMessage}</TextStyled>
        )}
        <ErrorCodeStyled>Error {errorCode}</ErrorCodeStyled>
        {websiteUrl && <LinkStyled to="/">{websiteUrl}</LinkStyled>}
        {hasTime && <Timestamp />}
      </HeaderStyled>
      {errorFullMessage && (
        <BodyStyled>
          <TitleStyled>What happened?</TitleStyled>
          <TextStyled>{errorFullMessage}</TextStyled>
        </BodyStyled>
      )}
    </ErrorStyled>
  );
};

function Timestamp() {
  const timestamp = new Date().toUTCString();
  const styles = { fontSize: "14px", color: "#6B6A60", marginTop: "10px", display: "block" };

  return <time style={styles}>{timestamp}</time>;
}
