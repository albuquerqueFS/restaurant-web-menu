import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRestaurantRequest } from 'src/@types/apis/restaurant';
import { HttpService } from 'src/app/core/services/http.service';
import { getEndpoint } from 'src/environments/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  baseUrl = environment.baseURL;

  constructor(private http: HttpService) {}

  createRestaurant(body: CreateRestaurantRequest) {
    return this.http.post(getEndpoint('restaurantCreate'), body);
  }
}
