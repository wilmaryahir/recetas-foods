import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
    this.nombre = localStorage.getItem('user') || '';
    this.password = localStorage.getItem('password') || '';
  }
}
