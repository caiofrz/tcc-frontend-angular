import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { delay, first, tap } from 'rxjs';
import { PageResponse } from '../interfaces/PageResponse';
import { Room } from '../interfaces/Room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private readonly baseApiUrl = environment.baseApiURL;
  private endpoint = `${this.baseApiUrl}/rooms`;
  private fakeEndpoint = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) {}

  findAll(page = 0, pageSize = 10) {
    return this.http
      .get<PageResponse>(this.endpoint, {
        params: { page, size: pageSize },
      })
      .pipe(
        first(),
        tap((rooms) => console.log(rooms)),
        delay(500)
      );
  }

  save(room: Room) {
    console.log(room);
    return this.http.post<Room>(this.endpoint, room);
  }
}
