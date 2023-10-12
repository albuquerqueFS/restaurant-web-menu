interface Restaurant {
  key: string;
  name: string;
  type: string;
  image_cover: string;
  isOpen: boolean;
  address: Address;
  menu: Menu;
}

interface Address {
  code: string;
  country: string;
  city: string;
  street: string;
  number: number;
}

interface Menu {
  groups: Group[];
}

interface Group {
  id: string;
  name: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  icon: string;
  description: string;
  price: number;
}
