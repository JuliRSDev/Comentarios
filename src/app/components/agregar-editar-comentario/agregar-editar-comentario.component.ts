import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Comentario} from "../../interfaces/Comentario";

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  agregarComentario: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.agregarComentario = this.formBuilder.group({
      titulo: [ '', Validators.required ],
      creador: [ '', Validators.required ],
      texto: [ '', Validators.required ]
    })
  }

  ngOnInit(): void {
  }

  agregar() {
    console.log( this.agregarComentario );

    const comentario: Comentario = {
      titulo: this.agregarComentario.get( 'titulo' )?.value,
      creador: this.agregarComentario.get( 'creador' )?.value,
      texto: this.agregarComentario.get( 'texto' )?.value,
      fechaCreacion: new Date()
    }

    console.log( comentario );
  }

}
