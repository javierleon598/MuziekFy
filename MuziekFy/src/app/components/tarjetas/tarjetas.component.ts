import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router ) {
    console.log(this.items);
   }

  ngOnInit(): void {
  }

  verArtista(item: any){

    let artistaId: string;

    if(item.type === 'artist'){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    console.log(item);

    this.router.navigate(['/artist', artistaId ]);
  }
}
