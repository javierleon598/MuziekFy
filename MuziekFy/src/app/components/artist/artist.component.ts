import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  topTracks: any = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService
              ) { 
    this.loading = true;
    this.activatedRoute.params.subscribe( (params) => { 
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    } );
  }

  ngOnInit(): void {
  }

  getArtista( id: string ){
    this.spotifyService.getArtist(id)
      .subscribe((artista) => { 
        this.artista = artista;
        this.loading = false;
        console.log(artista); 
      });
  }

  getTopTracks( id: string ){
    this.spotifyService.getTopTracks(id)
      .subscribe((topTracks) => { 
        this.topTracks = topTracks;
        this.loading = false;
        console.log(topTracks); 
      });
  }

}
