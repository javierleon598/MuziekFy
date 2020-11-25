import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
  }

  search(keyword: string){
    console.log(keyword);
    this.spotifyService.getArtist(keyword)
      .subscribe( (data: any) => { 
        this.artistas = data;
        console.log(this.artistas) 
      });
  }

}
