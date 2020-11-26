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
        'Bearer BQAjdwJjk4PnwrgAeO7TIQinw3fNwldMumxq2o_Qu-Djn3nmirO62iGYLQWU3_aqkHOt9MMXiKquEzBUgGI',
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
