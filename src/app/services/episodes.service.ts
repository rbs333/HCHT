import { Injectable } from '@angular/core';
import { Episode } from '../episodes/episode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  episodesUrl = 'http://localhost:3000/api/episodes';

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<Episode[]> {
  	console.log(this.http.get<Episode[]>(this.episodesUrl));
  	return this.http.get<Episode[]>(this.episodesUrl);
  }

}
