import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  casaRecibida =""

  ngOnInit(): void {

  }

  recibirEvento(evento:string){
    this.casaRecibida = evento

    console.log(this.casaRecibida + " Evento que se recibió")
  }


}
