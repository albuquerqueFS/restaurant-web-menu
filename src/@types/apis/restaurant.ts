import { URL } from '../basics';

export interface CreateRestaurantRequest {
  name: string;
  type: string;
  image_cover: URL;
}
