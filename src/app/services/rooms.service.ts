import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../interfaces/Room';
import { environment } from 'src/enviroments/enviroment';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private readonly baseApiUrl = environment.baseApiURL;
  private endpoint = `${this.baseApiUrl}/rooms `;
  private fakeEndpoint = '/assets/rooms.json';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Room[]>(this.fakeEndpoint).pipe(
      first(),
      tap((rooms) => console.log(rooms)),
      delay(5000)
    );
  }
}
