export interface NavigationItemProps {
  title: string;
  url: string;
}

export interface NavigationSectionProps {
  title: string;
  items: NavigationItemProps[];
}

export interface SidebarProps {
  title: string;
  sections?: NavigationSectionProps[];
}
