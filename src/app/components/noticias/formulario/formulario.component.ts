import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* Vamos a pasar datos de aquí(componente hijo) al componente padre( noticias.component ) */
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionada = 'co';

  categorias: any[] = [
    { value:'general', nombre:'General' },
    { value:'business', nombre:'Negocios' },
    { value:'entertainment', nombre:'Entretenimiento' },
    { value:'health', nombre:'Salud' },
    { value:'science', nombre:'Ciencia' },
    { value:'sports', nombre:'Deportes' },
    { value:'technology', nombre:'Tecnología' }
  ];

  paises: any[] = [
    { value: 'co', nombre: 'Colombia' },
    { value: 'ru', nombre: 'Rusia' },
    { value: 'ua', nombre: 'Ucrania' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 've', nombre: 'Venezuela' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'gb', nombre: 'Reino Unido' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'hu', nombre: 'Hungria' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    /* creamos el objeto */
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionada
    }
  }

}
