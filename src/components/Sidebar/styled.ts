import styled from "@emotion/styled";

export const SidebarStyled = styled.aside`
  width: 100%;
  /* noinspection CssUnresolvedCustomProperty */
  max-width: var(--container-width, 20%);
  /* noinspection CssUnresolvedCustomProperty */
  height: var(--container-width, 100vh);
  background-color: #b7b0b0;
  color: #000;
  padding: 60px 30px 30px 30px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const SectionTitleStyled = styled.h4`
  font-size: 18px;
  border-bottom: 1px solid #605a5a;
  padding-bottom: 4px;
`;

export const InternalListStyled = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const InternalListItemStyled = styled.li`
  margin-top: 10px;
`;
