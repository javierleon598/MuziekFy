import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service listo');
   }

   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1uZxpp2KQcyPfpl9wniszht_tllt3m8Y8fzhWLDldFp3_xjQm1edEna4bRUog9ajVz9EEruNbn2G0sU0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtist( keyword: string ){
    console.log(`https://api.spotify.com/v1/search?q=${keyword}&type=artist&limit=13`);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1uZxpp2KQcyPfpl9wniszht_tllt3m8Y8fzhWLDldFp3_xjQm1edEna4bRUog9ajVz9EEruNbn2G0sU0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${keyword}&type=artist&limit=15`, { headers }); 

   }
}
