export interface Restaurant {
  key: string;
  name: string;
  type: string;
  image_cover: string;
  isOpen: boolean;
  address: Address;
  menu: Menu;
}

export interface Address {
  code: string;
  country: string;
  city: string;
  street: string;
  number: number;
}

export interface Menu {
  groups: Group[];
}

export interface Group {
  id: string;
  name: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  icon: string;
  description: string;
  price: number;
}

export interface CartItem extends Item {
  observation: string | null;
}
