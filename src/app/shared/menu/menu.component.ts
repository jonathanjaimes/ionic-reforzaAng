import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }


  //Muy buena forma de hacer los links de la navbar automáticamente

  rutas = [
    {
      path: 'home',
      name: 'home'
    },
    {
      path: 'about',
      name: 'about'
    },
    {
      path: 'contact',
      name: 'contact'
    },
    {
      path: 'posts',
      name: 'posts'
    },
    {
      path: 'perezoso',
      name: 'perezoso'
    },
    {
      path: 'activo',
      name: 'activo'
    }
  ]

  ngOnInit(): void {
  }

}
