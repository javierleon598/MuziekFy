import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  qry: string;

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQALPJltHVvXG3b73gWh5RZSOE69qf4egsJ8iPvIzse9cEykktgsxciRp-nsKeClb3G8wwEpx6flb1wVXc8',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map((data) => data['albums'].items));
  }

  getArtists(keyword: string) {
    return this.getQuery(`search?q=${keyword}&type=artist&limit=15`)
              .pipe(map((data) => data['artists'].items));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe(
                map( data => data['tracks'] )
              );
  }
}
