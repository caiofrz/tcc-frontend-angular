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

  constructor(private http: HttpClient) {}

  findAll(page = 0, pageSize = 10) {
    return this.http
      .get<PageResponse>(this.endpoint, {
        params: { page, size: pageSize },
      })
      .pipe(
        first(),
        tap(),
        delay(500)
      );
  }

  findOne(id: string) {
    return this.http.get<Room>(`${this.endpoint}/${id}`);
  }

  save(room: Room) {
    return this.http.post<Room>(this.endpoint, room);
  }

  update(room: Room, id: string) {
    return this.http.put<Room>(`${this.endpoint}/${id}`, room);
  }

  delete(id: string) {
    return this.http.delete<Room>(`${this.endpoint}/${id}`);
  }
}
