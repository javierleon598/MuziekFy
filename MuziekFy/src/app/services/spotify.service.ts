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
        'Bearer BQBKzAed4tElT6F1HaTtfzfIeGf335XBe_aWGXqAJeICf8l0Jy-y7M28u9cFRlihOV4wUzFgDPMC2mVs0_Q',
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
