import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-indicaciones',
  templateUrl: './indicaciones.page.html',
  styleUrls: ['./indicaciones.page.scss'],
})
export class IndicacionesPage implements OnInit {
  recetaId: string | null = null;
  receta: any = {};

  recetas: any[] = [
    {
      recetaId: '1',
      titulo: 'Pollo al sillao',
      imagenUrl: 'https://recetascocinaperuana.com/wp-content/uploads/2022/04/pollo-al-sillao-peruano.jpg',
      ingredientes: [
        '4 presas de pollo',
        '1⁄2 taza de sillao',
        '1⁄3 de taza de salsa de ostión',
        '1 pimiento rojo cortado en tiras delgadas',
        '1⁄4 de taza de cebolla china cortada en bastones',
        'Un pedazo de kion',
        '2 tazas de caldo de pollo',
        '2 cucharadas de chuño diluido en agua'
      ],
      preparacion: 'Mezclar el sillao, la salsa de ostión y el kion en un bowl. Agregar las presas de pollo, la mitad del pimiento y la mitad de la cebolla china. Dejar macerar por 30 minutos. Colocar el pollo con todo el macerado en una olla, añadir el caldo y cocinar por 20 minutos aproximadamente o hasta que el pollo esté cocido. Añadir el chuño diluido para espesar ligeramente la salsa. Agregar el pimiento y la cebolla china restantes. Servir. Acompañar con arroz blanco y papa sancochada.',
      video: 'https://www.youtube.com/watch?v=aOBXJk4VA4M'
    },
    {
      recetaId: '2',
      titulo: 'Arroz Chaufa con Pollo',
      imagenUrl: 'https://www.recetasderechupete.com/wp-content/uploads/2021/10/Arroz-chaufa-peurano-1200x828.jpg',
      ingredientes: [
        '300 g. de arroz redondo SOS',
        '1 salchicha fresca (opcional)',
        '4 huevos',
        '1 cdita. jengibre rallado',
        '1 cda. aceite de sésamo',
        '1 pechuga de pollo',
        '½ pimiento rojo',
        '4 cebollitas chinas',
        'Aceite de girasol',
        '125 ml. salsa de soja',
      ],
      preparacion: 'Batir los huevos y freírlos a manera de tortilla. Cortar la tortilla en cuadrados. Reservar.Cortar la pechuga de pollo en cubos En una sartén con aceite caliente freír a fuego alto la pechuga de pollo con el kion y sal al gustoAgregar el arroz cocido freírlo y echar el sillao. Incorporar bienAñadir el frejol chino, la cebolla china, el aceite de ajonjolí y el huevo reservado. Saltear y rectificar la sazón.Servir caliente Acompañar con salsa de tamarindo',
      video: 'https://www.youtube.com/watch?v=tf34QAHiono'
    },
    {
      recetaId: '3',
      titulo: 'Arroz con huevo',
      imagenUrl: 'https://comidaschilenas.com/wp-content/uploads/2019/11/Receta-de-arroz-con-huevo.jpg',
      ingredientes: [
        '300 g. de arroz redondo',
        'platano para freir',
        '4 huevos',
        'papas fritas',
      ],
      preparacion: 'Echa un chorro de aceite de oliva en una sartén, bate un par de huevos con una pizca de sal, y saltéalos hasta hacer unos huevos revueltos bien hechos. Una vez tengas los huevos revueltos, añade el arroz cocido, un chorrito pequeño de salsa de soja para darle color, una pizca más de sal, un chorrito de aceite de sésamo y mézclalo todo bien.',
      video: 'https://www.youtube.com/watch?v=W-XPVoliqzs'
    },
    {
      recetaId: '4',
      titulo: 'Ceviche',
      imagenUrl: 'https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/06/28/62bb7dc25377fd449e094704.jpg',
      ingredientes: [
        '1 pizca de pimienta',
        '1 kilogramo de pescado de tu elección',
        '1 cebolla cortada en julianas',
        '¼ taza de taza cilantro de hoja picada',
        '1 ají amarillo picado',
        '1 ají limo picado (para decorar)',
        '12 limones',
        '1 pizca de sal y pimienta',
        '1 taza de caldo de pescado'
      ],
      preparacion: 'Lavar el pescado y cortarlo en cubos de 1 a 2 cm de diámetro. Sazonar con sal y reservar.Colocar los cubos de pescado en un recipiente y agregar el jugo de limón recién exprimido. El jugo debe cubrir todo el pescado.Incorporar el culantro, cebolla, ají limo, Ajo Siba y Pimienta Sibarita al gusto.Mezclar bien los ingredientes y dejar reposar por unos 5 minutos aproximadamente para que los sabores se integren.Servir inmediatamente sobre un plato, colocar el Ceviche al centro y decorar el plato con una hoja de lechuga, trozos de camote y choclo. Si desea también puede acompañar con canchita serrana..',
      video: 'https://www.youtube.com/watch?v=oRw2YNE5kLU'
    },
    {
      recetaId: '5',
      titulo: 'Tallarines Saltados',
      imagenUrl: 'https://www.comedera.com/wp-content/uploads/2021/08/tallarines-saltados-peruanos-500x500.jpg',
      ingredientes: [
        '250 gramos de carne de res en bastones (de preferencia lomo fino)',
        '250 gramos de tallarines gruesos',
        '1 unidad de cebolla en juliana',
        '1/2 unidad de ají amarillo en tiras',
        '1/2 unidad de pimiento en tiras',
        '2 cucharadas de vinagre tinto',
        'Salsa de ostión a gusto',
        'Sillao a gusto',
        '1 1/2 unidades de tomate en gajos',
        '1/8 de taza de cebolla china',
        'Aceite',
        '1 cucharadita de aceite de ajonjolí',
        'Culantro',
        'Agua',
        'Sal a gusto',
      ],
      preparacion: 'Colocar agua y sal en una olla. Dejar hervir.Agregar los fideos y sancochar. Colar y reservar.Agregar aceite en una sartén.Colocar la carne de res en la sartén y flambear.Añadir la cebolla, ají amarillo y pimiento.Saltear por unos minutos.Agregar la salsa de ostión y el sillao. Saltear.Añadir el tomate y los fideos sancochados. Seguir salteando.Agregar la cebolla china y el aceite de ajonjolí.Echar culantro picado, remover y servir.',
      video: 'https://www.youtube.com/watch?v=bQdY9LkSB0E'
    },
    {
      recetaId: '6',
      titulo: 'Lomo',
      imagenUrl: 'https://irenemercadal.com/wp-content/uploads/2021/12/lomo-saltado-irenemercadal.com_.jpeg',
      ingredientes: [
        '3⁄4 de kilo de lomo fino',
        '1⁄2 kilo de papa blanca',
        '3 tomates',
        '3 cebollas',
        '1 ají amarillo',
        '1⁄2 a 1 taza de sillao',
        '2 cucharadas de vinagre tinto',
        '1 cucharada de ajo molido',
        'Sal',
        'Pimienta',
        'Culantro picado',
        'Aceite vegetal, cantidad necesaria',
        '4 porciones de arroz blanco cocido',

      ],
      preparacion: 'Cortar el lomo en tiras gruesas. Después, sazonar con sal, pimienta y ajo molido.Seguidamente, cortar los tomates y las cebollas en gajos gruesos. Luego, cortar el ají amarillo en tiras delgadas.El siguiente paso es cortar las papas blancas en bastones. Freírlas en abundante aceite caliente.Llevar una sartén amplia al fuego. Cuando esté caliente, añadir un chorro de aceite vegetal y esperar a que empiece a humear. Inmediatamente, agregar el lomo y dejar freír sin mover. Cuando la carne esté dorada, por un lado, empezar a saltear y flamear. Puedes echar un chorrito de pisco después de echar la carne para poder flambear (hazlo con mucho cuidado, pues el fuego puede ser alto).Agregar las cebollas, el ají amarillo y el vinagre. Seguir salteando.Añadir los tomates y el sillao. Y seguir salteando.Echar el culantro, remover y servir caliente con las papas fritas y el arroz blanco.',
      video: 'https://www.youtube.com/watch?v=NI-AMYX1-6Q'
    },
    {
      recetaId: '7',
      titulo: 'Ramen',
      imagenUrl: 'https://www.recetasderechupete.com/wp-content/uploads/2017/11/Ramen-48.jpg',
      ingredientes: [
        'Cebolleta china',
        '30 g. de atún seco en polvo o escamas, katsuobuchi',
        '1 cda. de semillas cilantro  ',
        '100 ml. de salsa soja',
        '1 cdita. de granos pimienta negra',
        '20 g. de alga kombu',
        '100 ml. de Mirin',
        '300 g. de fideos para ramen',
        '6 huevos M',
        '1,5 kg. de pollo despiezado',
        '150 g. de setas shitake',
        '4 zanahorias',
        'Huesos de rodillas de ternera',
        '100 ml. de salsa de pescado tailandesa',
        '6 rodajas lomo cerdo fresco',
        '100 ml. de sake',
        'Acompañamientos: del ramen',
        'Cebollino chino, cebolleta',
      ],
      preparacion: 'En una cazuela ponemos 2 litros de agua y, cuando su temperatura llegue a los 65º C, añadimos las algas kombu. Mantenemos durante 30 minutos. Pasado este tiempo retiramos la mitad del agua colándola y reservándola. Volvemos a poner la cazuela al fuego, esta vez sólo con 1 litro de agua, y subimos la temperatura a 85º C.Incorporamos el polvo de atún seco o las escamas de atún seco, dejamos reposar durante 5 minutos a 85ºC y retiramos la cazuela del fuego. Reservamos este caldo de katsuobushi.Con el resto del agua de algas que tenemos reservada, volvemos a ponerla en una nueva cazuela al fuego. Llevamos el caldo a 40º C, añadimos las setas shitake limpias y mantenemos a 40ºC durante 30 minutos. Pasado este tiempo retiramos la cazuela del fuego.En una olla exprés añadimos el caldo de setas, las propias setas shitake, el caldo de algas y atún seco previamente colado (desechamos las algas kombu), los huesos de rodilla, el pollo despiezado, las zanahorias, el cebollino chino o la cebolleta, los granos de pimienta, el cilantro, la sal, la salsa de soja, la salsa tailandesa de pescado, el mirin y el sake.El pollo lo añadiremos con toda su piel ya que dará mucho sabor al caldo. Una vez cocinado podremos desgrasarlo sin problemas, así que no nos preocuparemos a priori por la grasa que pueda tener el pollo.Cerramos la olla exprés y la ponemos al fuego. Cocinamos el caldo de nuestro ramen durante unas 2 horas. Pasado este tiempo dejamos que se enfríe y guardamos el caldo en el frigo. Preferentemente de un día para otro, para que la grasa suba a la superficie, se solidifique y podamos retirarla con facilidad a la mañana siguiente.',
      video: 'https://www.youtube.com/watch?v=bhi74---e_k'
    }
  
  
  
  
    
    
    
    // Agrega las demás recetas aquí
    
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.recetaId = this.activatedRoute.snapshot.paramMap.get('recetaId');
    this.receta = this.recetas.find((r) => r.recetaId === this.recetaId);
  }

  goBack() {
    this.router.navigate(['/recetas']);
  }

  openVideoUrl(url: string) {
    window.open(url, '_blank');
  }
}
