import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { StringHelpers } from 'src/app/shared/utils/string-helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  serverUrl!: string;
  httpRetries!: string;
  httpTimeoutSeconds!: string;
  httpRetryDelaySeconds!: string;

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, ...params: string[]): Observable<T> {
    this.readConfig();

    return this.httpClient.get<T>(
      StringHelpers.format(this.serverUrl + url, ...params),
    );
  }

  post<T>(url: string, body: any | null, ...params: string[]): Observable<T> {
    this.readConfig();

    return this.httpClient.post<T>(
      StringHelpers.format(this.serverUrl + url, ...params),
      body,
    );
  }

  private readConfig() {
    this.serverUrl = environment.api.serverUrl;
    this.httpRetries = environment.api.httpRetries;
    this.httpTimeoutSeconds = environment.api.httpTimeoutSeconds;
    this.httpRetryDelaySeconds = environment.api.httpRetryDelaySeconds;
  }
}
