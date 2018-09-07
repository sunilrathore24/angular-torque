export class NavigationItem {
  id: number;
  name: string;
  isFavourite: boolean;

  constructor(id: number, name: string, isFavourite: boolean ) {
    this.id = id;
    this.name = name;
    this.isFavourite = isFavourite;
  }
  }
