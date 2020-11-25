import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
  }

  search(keyword: string){
    this.loading = true;
    console.log(keyword);
    this.spotifyService.getArtist(keyword)
      .subscribe( (data: any) => { 
        this.artistas = data;
        console.log(this.artistas) 
        this.loading = false;
      });
  }

}
