import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Output() eventoEnviar = new EventEmitter<string>()

  casa = "hola"

  constructor() { }

  ngOnInit(): void {
   
    this.enviarEvento()


  }

  enviarEvento(){
    this.eventoEnviar.emit(this.casa)
    console.log("evento enviado")
  }


}
