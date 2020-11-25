import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor( private spotifyService: SpotifyService ) {

    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => { 
        console.log(data);
        this.nuevasCanciones = data.albums.items;
        console.log(this.nuevasCanciones);
      });

   }

  ngOnInit(): void {
  }

}
