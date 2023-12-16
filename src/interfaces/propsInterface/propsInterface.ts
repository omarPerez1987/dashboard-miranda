export interface TopMenuProps {
  hiddenMenu: () => void;
  menuOpen: boolean;
  title: string;
}

export interface KpisCardProps {
  Icon: React.ElementType;
  number: number;
  text: string;
}
