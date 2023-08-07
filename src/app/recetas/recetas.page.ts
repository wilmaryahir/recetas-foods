import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  recetas: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Código para obtener las recetas
    this.recetas = [
      {
        recetaId: '1',
        titulo: 'Pollo al sillao',
        indicaciones: 'Mezcla el pollo con sillao, salsa de ostión, ajo y especias. Cocina con verduras chinas como holantao, kión y frijol chino. Disfruta de un plato suculento y sabroso.'
      },
      {
        recetaId: '2',
        titulo: 'Arroz Chaufa con Pollo',
        indicaciones: 'Prepara un delicioso arroz chaufa con pollo fusionando sabores chinos y peruanos. Sigue los pasos para obtener una experiencia gastronómica inolvidable.'
      },
      {
        recetaId: '3',
        titulo: 'Arroz con huevo',
        indicaciones: 'Disfruta de un clásico plato peruano con arroz y huevo. Sigue los pasos para preparar esta deliciosa y sencilla receta.'
      },
      {
        recetaId: '4',
        titulo: 'Ceviche',
        indicaciones: 'Aprende cómo hacer ceviche peruano, un plato refrescante y lleno de sabores. Marinar pescado fresco en jugo de limón con especias y acompañarlo con camote y maíz.'
      },
      {
        recetaId: '5',
        titulo: 'Tallarines saltado',
        indicaciones: 'Prepara unos deliciosos tallarines saltados con pollo y verduras al estilo peruano. Salteados en una salsa sabrosa y acompañados de un toque oriental.'
      },
      {
        recetaId: '6',
        titulo: 'Lomo',
        indicaciones: 'Prepara un jugoso lomo saltado, una mezcla de carne de res, cebolla, tomate y ají amarillo. Sírvelo con papas fritas y arroz blanco. ¡Una explosión de sabores!'
      },
      {
        recetaId: '7',
        titulo: 'Ramen',
        indicaciones: 'Prepara un auténtico plato de ramen japonés, con fideos, caldo sabroso y toppings como huevo marinado, carne de cerdo y vegetales. Un plato reconfortante y lleno de sabor.'
      }
      // Agrega las demás recetas aquí
      
      
    ];
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
