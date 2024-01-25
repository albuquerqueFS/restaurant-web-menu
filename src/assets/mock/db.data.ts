import { Item, Restaurant } from 'src/@types/type';

interface Database {
  restaurants: Restaurant[];
}

export const database: Database = {
  restaurants: [
    {
      key: '327c31bb-aa3c-49a7-ac38-bb045d65a9b5',
      name: "McDonald's Itaquera",
      type: 'Restaurante Fast Food',
      image_cover:
        'https://braziljournal.com/wp-content/uploads/2022/06/Mcdonalds.jpg',
      isOpen: false,
      address: {
        code: '08141-404',
        country: 'Brazil',
        city: 'São Paulo',
        street: 'Rua Ibitira',
        number: 93,
      },
      menu: {
        groups: [
          {
            id: '1',
            name: 'Hamburguers',
            items: [
              {
                id: '1',
                name: 'Big Mac',
                icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
                description:
                  'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
                price: 19.99,
              },
              {
                id: '2',
                name: 'Quarteirão com Queijo',
                icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXNUCF7/200/200/original?country=br',
                description:
                  'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
                price: 19.99,
              },
              {
                id: '3',
                name: 'Hamburguer',
                icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXWsQj4/200/200/original?country=br',
                description:
                  'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
                price: 19.99,
              },
              {
                id: '4',
                name: 'Cheeseburger',
                icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br',
                description:
                  'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
                price: 19.99,
              },
            ],
          },
          {
            id: '2',
            name: 'Sanduíches de Frango',
            items: [
              {
                id: '1',
                name: 'MacCrispy Chicken Legend',
                icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kuX1FshW/200/200/original?country=br',
                description:
                  'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
                price: 19.99,
              },
              {
                id: '2',
                name: 'MacCrispy Chicken Deluxe',
                icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ksXrqrYB/200/200/original?country=br',
                description:
                  'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
                price: 19.99,
              },
            ],
          },
        ],
      },
    },
  ],
};

export const getRestaurantById = (uuid: string): Restaurant =>
  database.restaurants.filter(
    (restaurant: Restaurant) => restaurant.key === uuid,
  )[0];

export const getItemById = (uuid: string, id: string): Item =>
  getRestaurantById(uuid).menu.groups[0].items.filter(
    (item: Item) => item.id === id,
  )[0];
