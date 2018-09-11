export class NavigationItem {
  id: number;
  name: string;
  isFavourite: boolean;
  iconName: string;

  constructor(id: number, name: string, isFavourite: boolean, iconName: string ) {
    this.id = id;
    this.name = name;
    this.isFavourite = isFavourite;
    this.iconName = iconName;
  }
  }
