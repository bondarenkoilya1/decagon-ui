import { FC } from "react";
import { NavLink } from "react-router";

import {
  InternalListItemStyled,
  InternalListStyled,
  ListStyled,
  SectionTitleStyled,
  SidebarStyled,
  TitleStyled
} from "./styled";

import { NavigationSectionProps, SidebarProps } from "./types";

export const Sidebar: FC<SidebarProps> = ({ title, sections }) => {
  return (
    <SidebarStyled>
      {title && <TitleStyled>{title}</TitleStyled>}
      <ListStyled>
        {sections &&
          sections.map((section: NavigationSectionProps) => (
            <li key={crypto.randomUUID()}>
              <SectionTitleStyled>{section.title}</SectionTitleStyled>
              <InternalListStyled>
                {section.items.map((item) => (
                  <InternalListItemStyled key={crypto.randomUUID()}>
                    <NavLink to={item.url}>{item.title}</NavLink>
                  </InternalListItemStyled>
                ))}
              </InternalListStyled>
            </li>
          ))}
      </ListStyled>
    </SidebarStyled>
  );
};
