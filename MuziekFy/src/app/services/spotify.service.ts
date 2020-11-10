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
      'Authorization': 'Bearer BQA9GCvnpLKyFEs7p6cI5uC7SB81lsLzHqj_9ukbFwNcb54MCcRv4T8T1knQ6BR5ocjBDALE-Nhvwxr5hWs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtist( keyword: string ){
    console.log(`https://api.spotify.com/v1/search?q=${keyword}&type=artist&limit=13`);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA9GCvnpLKyFEs7p6cI5uC7SB81lsLzHqj_9ukbFwNcb54MCcRv4T8T1knQ6BR5ocjBDALE-Nhvwxr5hWs'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${keyword}&type=artist&limit=15`, { headers }); 

   }
}
