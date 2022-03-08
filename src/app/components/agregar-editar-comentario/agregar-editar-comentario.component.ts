import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Comentario} from "../../interfaces/Comentario";
import {ComentarioService} from "../../services/comentario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  agregarComentario: FormGroup;
  accion = 'Agregar';
  id = 0;
  comentario: Comentario | undefined;

  constructor( private formBuilder: FormBuilder,
               private  comentarioService: ComentarioService,
               private router: Router,
               private  activatedRoute: ActivatedRoute,
               private toastr: ToastrService ) {
    this.agregarComentario = this.formBuilder.group({
      titulo: [ '', Validators.required ],
      creador: [ '', Validators.required ],
      texto: [ '', Validators.required ]
    })
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if( this.id !== 0 ){
      this.accion = 'Editar';
      this.comentarioService.getComentario(this.id).subscribe( data => {
        console.log(data);
        this.comentario = data;
        // Imprimir informacion encontrada en ese registro en los campos correspondientes
        this.agregarComentario.patchValue({
          titulo: data.titulo,
          texto: data.texto,
          creador: data.creador
        })
      }, error => {
        console.log(error);
      } )
    }
  }

  agregarEditarComentario() {

    if( this.comentario == undefined ) {
      // Agregamos un nuevo comentario
      console.log( this.agregarComentario );

      const comentario: Comentario = {
        titulo: this.agregarComentario.get( 'titulo' )?.value,
        creador: this.agregarComentario.get( 'creador' )?.value,
        texto: this.agregarComentario.get( 'texto' )?.value,
        fechaCreacion: new Date()
      }

      this.comentarioService.saveComentario(comentario).subscribe( data => {
        this.router.navigate(['/']);
        this.toastr.success('El comentario se a creado exitosamente', '¡Comentario creado!');
      }, error => {
        this.toastr.error('Opss, Ocurrios un error', '¡Error !');
        console.log( error );
      } )

      console.log( comentario );
    } else {
      // Editamos comentario
      const comentario: Comentario = {
        id: this.comentario.id,
        titulo: this.agregarComentario.get( 'titulo' )?.value,
        creador: this.agregarComentario.get( 'creador' )?.value,
        texto: this.agregarComentario.get( 'texto' )?.value,
        fechaCreacion: this.comentario.fechaCreacion
      }
      this.comentarioService.updateComentario(this.id, comentario).subscribe( data => {
        this.router.navigate(['/']);
        this.toastr.info('El comentario se a actualizado exitosamente', '¡Comentario actualizado!');
      }, error => {
        console.log( error );
      } )

    }
  }

}
