const prefix = '/api';
const version = '/v1';
const base = prefix + version;

const endpoints = {
  restaurantCreate: '/restaurant',
  restaurantGet: '/restaurant',
  restaurantPatch: '/restaurant/{0}',
  restaurantGetById: '/restaurant/{0}',
} as const;

export function getEndpoint(key: keyof typeof endpoints) {
  const endpoint = endpoints[key];
  return base + endpoint;
}
