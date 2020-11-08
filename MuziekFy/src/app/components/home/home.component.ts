import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (respuesta: any) => { 
        console.log(respuesta);
        this.paises = respuesta;
      });
   }

  ngOnInit(): void {
  }

}
