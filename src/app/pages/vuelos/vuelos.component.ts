import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vuelos',
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    ToolbarModule,
    CardModule,
    InputTextModule,

    RadioButtonModule,
    InputNumberModule,
  ],
  templateUrl: './vuelos.component.html',
  styleUrl: './vuelos.component.scss'
})
export class VuelosComponent {

    tripType = 'idaVuelta';
  from = '';
  to = '';
  departDate: Date | null = null;
  returnDate: Date | null = null;
  passengers = 1;

  destinos = [
    { nombre: 'Bogotá', precio: '$150 USD', imagen: 'assets/bogota.jpg' },
    { nombre: 'Medellín', precio: '$120 USD', imagen: 'assets/medellin.jpg' },
    { nombre: 'Miami', precio: '$400 USD', imagen: 'assets/miami.jpg' },
  ];

  searchFlights() {
    alert(
      `Buscando vuelos: ${this.from} → ${this.to}\n` +
      `Tipo: ${this.tripType}\n` +
      `Salida: ${this.departDate}\n` +
      `Regreso: ${this.returnDate}\n` +
      `Pasajeros: ${this.passengers}`
    );
  }
}
