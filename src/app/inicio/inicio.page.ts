import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  nombre="Enrique";
  apellidos="Martin-Albo del Olmo"
  edad = 19;
  enlace="https://www.youtube.com"

  ngOnInit() {
  }

}
