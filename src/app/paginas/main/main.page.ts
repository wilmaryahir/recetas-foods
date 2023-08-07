import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FotosService } from 'src/app/services/fotos.services'; // Agrega la importación del servicio FotosService aquí

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    public fotosService: FotosService // Agrega el servicio FotosService aquí
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  onMenuItemClick(option: string) {
    console.log('Opción seleccionada en la barra lateral:', option);

    switch (option) {
      case 'Opción 1':
        this.router.navigate(['/about']);
        break;
      case 'Opción 2':
        this.router.navigate(['/recetas']);
        break;
      case 'Opción 3':
        this.router.navigate(['/nuevas-recetas']);
        break;
        case 'Opción 4':
          this.router.navigate(['/perfil']);
          break;
      default:
        // Opción inválida o no implementada
        break;
    }
  }

  onRightButtonClick() {
    console.log('Botón de la parte superior derecha clicado.');
    // Aquí puedes implementar la lógica para manejar el clic en el botón de la parte superior derecha
  }

  addPhotoGallery() {
    this.fotosService.addNewGallery();
  }

}
