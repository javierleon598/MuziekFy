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
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;
    
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => { 
        this.nuevasCanciones = data;
        console.log(this.nuevasCanciones);
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        console.log(errorServicio);
      });
  }

  ngOnInit(): void {
    
  }

}
