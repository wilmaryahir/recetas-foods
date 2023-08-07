import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevas-recetas',
  templateUrl: './nuevas-recetas.page.html',
  styleUrls: ['./nuevas-recetas.page.scss'],
})
export class NuevasRecetasPage implements OnInit {

  // Propiedades para almacenar los datos de las nuevas recetas
  tituloReceta: string = '';
  descripcionReceta: string = '';
  listaRecetas: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Función para agregar una nueva receta
  agregarReceta() {
    // Validar que ambos campos estén completos
    if (this.tituloReceta.trim() === '' || this.descripcionReceta.trim() === '') {
      // Mostrar una alerta si alguno de los campos está vacío
      alert('Por favor, completa todos los campos antes de agregar la receta.');
      return;
    }

    // Agregar la nueva receta a la lista
    this.listaRecetas.push({
      titulo: this.tituloReceta,
      descripcion: this.descripcionReceta
    });

    // Limpiar los campos del formulario después de agregar la receta
    this.tituloReceta = '';
    this.descripcionReceta = '';
  }
}
