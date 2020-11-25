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
        'Bearer BQDXlhWnPpNPX7DejLw8ovYu2r2CtuNZPNM1k5IAJ0Gcruz4fUvqWnvtBTuWJqFAb7TBk14bAbkqIcEf3mc',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map((data) => data['albums'].items));
  }

  getArtist(keyword: string) {
    return this.getQuery(`search?q=${keyword}&type=artist&limit=15`)
              .pipe(map((data) => data['artists'].items));
  }
}
